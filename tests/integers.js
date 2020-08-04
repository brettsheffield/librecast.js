var UINT32_MAX = 4294967295;
var UINT64_MAX = "18446744073709551615";

QUnit.module('32/64 bit Integers', function() {
	QUnit.test("read uint32", function(assert) {
		var buffer = new ArrayBuffer(4); /* 32 bits */
		var dataview = new DataView(buffer);

		/* pack integer into dataview */
		dataview.setUint32(0, UINT32_MAX);

		/* read it back */
		var i1 = dataview.getUint32(0);
		assert.strictEqual(i1, UINT32_MAX, "UINT32_MAX");
	});
	QUnit.test("read uint64", function(assert) {
		var buffer = new ArrayBuffer(8); /* 64 bits */
		var dataview = new DataView(buffer);

		// TODO: split uint64 and pack
		dataview.setUint32(0, 0);
		dataview.setUint32(4, UINT32_MAX);

		var t1 = dataview.getUint64(0);

		assert.strictEqual(t1.toString(), "" + UINT32_MAX, "uint64");

		// TODO: reassemble uint64
	});
});
