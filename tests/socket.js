QUnit.module('Socket', function() {
	QUnit.test("new LIBRECAST.Socket()", function(assert) {
		const channelName = "test";
		const done = assert.async(4);
		const lctx = new LIBRECAST.Context(function () {
			assert.ok(true, "Context created");
			const sock = new LIBRECAST.Socket(lctx);
			const p1 = sock.init();
			const chan = new LIBRECAST.Channel(lctx, channelName);
			const p2 = chan.init();
			p1.then(function () {
				assert.ok(true, "Socket created");
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
			});
			done();
		});
		assert.ok(lctx, "new LIBRECAST.Context");
		assert.ok(lctx.websocket instanceof WebSocket, "websocket created");
	});
});
