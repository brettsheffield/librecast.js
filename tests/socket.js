QUnit.module('Socket', function() {
	QUnit.test("new LIBRECAST.Socket()", function(assert) {
		const channelName = "test";
		const messageText = "hello world";
		const done = assert.async(7);
		const lctx = new LIBRECAST.Context(function () {
			assert.ok(true, "Context created");
			const sock = new LIBRECAST.Socket(lctx);
			const p1 = sock.init();
			const chan = new LIBRECAST.Channel(lctx, channelName);
			const p2 = chan.init();
			p1.then(function () {
				assert.ok(true, "Socket created");
				sock.listen(function (cb, opcode, len, id, token, key, val, timestamp) {
					assert.ok(true, "message received on Socket");
					assert.strictEqual(val, messageText, "message verified");
					done();
				});
				done();
			});
			p2.then(function () {
				assert.ok(true, "Channel created");
				done();
			});
			Promise.all([p1, p2])
			.then(function () {
				assert.ok(true, "Socket and Channel both created");
				done();
			})
			.then(function () {
				chan.bindSocket(sock, function () {
					assert.ok(true, "Channel bound to Socket");
					done();
				});
			})
			.then(function () {
				chan.join(function () {
					assert.ok(true, "Channel joined");
					chan.send(messageText);
					done();
				});
			});
			done();
		});
		assert.ok(lctx, "new LIBRECAST.Context");
		assert.ok(lctx.websocket instanceof WebSocket, "websocket created");
	});
});
