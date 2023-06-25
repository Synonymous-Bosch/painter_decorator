const assert = require('assert');
const Room = require('../models/room.js');

describe ('Room', function () {
    let room1;
    let room2;

    beforeEach(function () {
        room1 = new Room(9);
        room2 = new Room(15);
    })

    it('should have an area in square meters', function () {
        assert.strictEqual(room1.area, 9);
    })

    it('should start not painted', function () {
        assert.strictEqual(room1.painted, false)
    })

    it('should be able to be painted', function () {
        room1.paintRoom();
        assert.strictEqual(room1.painted, true);
    })
})