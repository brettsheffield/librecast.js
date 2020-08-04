QUnit.module('Database', function() {
	QUnit.test("get()", function(assert) {
		//const done = assert.async();
		const lctx = new LIBRECAST.Context();
		//assert.ok(lctx, "new LIBRECAST.Context");
		const sock = new LIBRECAST.Socket(lctx);
	});
	QUnit.todo("put()", function(assert) {
		return false;
	});
});
