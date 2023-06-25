const assert = require('assert');
const PaintCan = require('../models/paintCan.js')

describe('PaintCan', function () {
    let paintCan1;
    let paintCan2;

    beforeEach(function() {
        paintCan1 = new PaintCan(10);
        paintCan2 = new PaintCan(0);
    })

    it('should have a number of litres of paint', function () {
        assert.strictEqual(paintCan1.litres, 10);
    })

    it('should be able to check if it is empty - false', function () {
        assert.strictEqual(paintCan1.isItEmpty(), false);
    })

    it('should be able to check if it is empty - true', function () {
        assert.strictEqual(paintCan2.isItEmpty(), true);
    })

    it('should be able to empty itself of paint', function () {
        paintCan1.empty();
        assert.strictEqual(true, paintCan1.isItEmpty())
    })

    it('should be able to partially use contents of can', function () {
        paintCan1.usePaint(9);
        assert.strictEqual(1, paintCan1.litres);
    })

    it('should be able to return remainder if can emptied', function () {
        remainder = paintCan1.usePaint(11);
        assert.strictEqual(1, remainder);
    })



})