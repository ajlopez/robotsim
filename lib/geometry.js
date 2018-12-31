
function Point(x, y) {
    this.x = function () { return x; }
    this.y = function () { return y; }
}

function createPoint(x, y) {
    return new Point(x, y);
}

module.exports = {
    point: createPoint
};