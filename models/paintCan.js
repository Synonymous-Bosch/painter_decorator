const PaintCan = function (litres) {
    this.litres = litres;
}

PaintCan.prototype.isItEmpty = function () {
    if (this.litres === 0) {return true} else {return false}
}

PaintCan.prototype.empty = function () {
    this.litres = 0;
}



PaintCan.prototype.usePaint = function (areaToPaint) {
    let remainder=0;
    if (areaToPaint > this.litres) {
        remainder = areaToPaint - this.litres;
        this.empty()
    } else  {
        this.litres -= areaToPaint;
    }
    return remainder;
}

module.exports = PaintCan;