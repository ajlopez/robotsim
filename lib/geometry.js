
function Point(x, y) {
    this.x = function () { return x; };
    this.y = function () { return y; };
}

function createPoint(x, y) {
    return new Point(x, y);
}

function Line(from, to) {
    this.from = function () { return from; };
    this.to = function () { return to; };
}

function createLine(from, to) {
    return new Line(from, to);
}

module.exports = {
    point: createPoint,
    line: createLine
};