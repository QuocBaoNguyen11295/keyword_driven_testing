const MathJS = require('../unit_test/math');
const assert = require('assert');

describe('Unit test for Math', () => {
    it('Should sum the number correctly', () => {
        assert.strictEqual(MathJS.sum(1, 2), 3);
    })

    it('Should sub the number correctly', () => {
        assert.strictEqual(MathJS.sub(1, 2), 3);
    })

    it('Should sub the number correctly', () => {
        assert.strictEqual(MathJS.divide(1, 0), 1);
    })
})