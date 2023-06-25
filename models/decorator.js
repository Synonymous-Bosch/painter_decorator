const Decorator = function () {
    this.paintCans = [];
}

Decorator.prototype.addPaintCan = function (paintCan) {
    this.paintCans.push(paintCan);
}

Decorator.prototype.totalLitresPaint = function () {
    return this.paintCans.reduce((totalPaint, paintCan) => {
        return totalPaint + paintCan.litres;
    }, 0)
}

Decorator.prototype.enoughPaint = function (room) {
    if (this.totalLitresPaint() >= room.area) {
        return true;
    } else { 
        return false 
    }
}

Decorator.prototype.removeEmpty = function () {
    let newArray = this.paintCans.filter((paintCan) => {
        return paintCan['litres'] > 0;
    })
    this.paintCans = newArray;
}

Decorator.prototype.paintRoom = function (room) {
    let areaToPaint = room.area;
    if (this.enoughPaint(room)) {
        room.painted = true;
        for (i=0; i < this.paintCans.length; i++) {
            // console.log(`areaCheck: ${areaToPaint}`);
            if (this.paintCans[i].litres < areaToPaint) {
                areaToPaint -= this.paintCans[i].litres;
                this.paintCans[i].litres = 0;
            } else {
                this.paintCans[i].litres -= areaToPaint;
                areaToPaint = 0;

            }
        }
        
        }
    };


module.exports = Decorator;