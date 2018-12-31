
var geometry = require('../lib/geometry');

exports['create point'] = function (test) {
    var point = geometry.point(1, 2);
    
    test.ok(point);
    test.equal(typeof point, 'object');
    test.equal(point.x(), 1);
    test.equal(point.y(), 2);
};

exports['create line'] = function (test) {
    var p1 = geometry.point(1, 2);
    var p2 = geometry.point(3, 4);
    
    var line = geometry.line(p1, p2);
    
    test.ok(line);
    test.equal(typeof line, 'object');
    test.equal(line.from().x(), 1);
    test.equal(line.from().y(), 2);
    test.equal(line.to().x(), 3);
    test.equal(line.to().y(), 4);
};

