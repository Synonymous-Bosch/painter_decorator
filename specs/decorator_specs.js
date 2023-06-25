const assert = require('assert');
const Decorator = require('../models/decorator.js');
const PaintCan = require('../models/paintCan.js');
const Room = require('../models/room.js');

describe ('Decorator', function () {
    let decorator1;
    let paintCan1;
    let paintCan2;
    let paintCan3;
    let room1;
    let bigRoom;

    beforeEach(function() {
        decorator1 = new Decorator();
        paintCan1 = new PaintCan(10);
        paintCan2 = new PaintCan(12);
        paintCan3 = new PaintCan(0);
        room1 = new Room(11);
        bigRoom = new Room(21);
    });

  it('should start with an empty paint stock', function () {
    assert.deepStrictEqual(decorator1.paintCans, []);
  })  

  it('should be able to add a can of paint to paint stock', function () {
    decorator1.addPaintCan(paintCan1);
    assert.deepStrictEqual(decorator1.paintCans, [paintCan1])
  })

  it('should be able to calculate total litres paint in stock', function () {
    decorator1.addPaintCan(paintCan1);
    decorator1.addPaintCan(paintCan2);
    decorator1.addPaintCan(paintCan3);
    assert.strictEqual(decorator1.totalLitresPaint(), 22)
  })

  it('should be able to calculate whether it has enough paint to paint a room - true', function () {
    decorator1.addPaintCan(paintCan2);
    decorator1.addPaintCan(paintCan3);
    assert.strictEqual(true, decorator1.enoughPaint(room1))
  })

  it('should be able to calculate whether it has enough paint to paint a room - false', function () {
    decorator1.addPaintCan(paintCan1);
    decorator1.addPaintCan(paintCan3);
    assert.strictEqual(false, decorator1.enoughPaint(room1))
  })

  it('should be able to remove empty paint cans from stock', function () {
    decorator1.addPaintCan(paintCan1);
    decorator1.addPaintCan(paintCan2);
    decorator1.addPaintCan(paintCan3);
    decorator1.removeEmpty();
    assert.deepStrictEqual([paintCan1, paintCan2], decorator1.paintCans);
  })



  it('should be able to paint a room if enough paint in stock', function () {
    decorator1.addPaintCan(paintCan2)
    decorator1.paintRoom(room1);
    assert.strictEqual(true, room1.painted);
    assert.strictEqual(1, decorator1.totalLitresPaint());
  })

  it('should be able to use multiple cans to paint room', function () {
    decorator1.addPaintCan(paintCan1);
    decorator1.addPaintCan(paintCan2);
    decorator1.paintRoom(bigRoom);
    assert.strictEqual(true, bigRoom.painted);
    assert.strictEqual(1, decorator1.totalLitresPaint());
  })

})