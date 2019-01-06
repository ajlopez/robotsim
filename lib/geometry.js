
function Point(x, y) {
    this.x = function () { return x; };
    this.y = function () { return y; };
    
    this.move = function (distance, orientation) {
        var radians = orientation * Math.PI / 180;
        
        var newx = x + distance * Math.sin(radians);
        var newy = y + distance * Math.cos(radians);
        
        return new Point(newx, newy);
    };
    
    this.distance = function (point) {
        var dx = x - point.x();
        var dy = y - point.y();
        
        return Math.sqrt(dx * dx + dy * dy);
    };
}

function createPoint(x, y) {
    return new Point(x, y);
}

function Line(from, to) {
    this.from = function () { return from; };
    this.to = function () { return to; };
    this.length = function () { return from.distance(to); };
}

function createLine(from, to) {
    return new Line(from, to);
}

module.exports = {
    point: createPoint,
    line: createLine
};