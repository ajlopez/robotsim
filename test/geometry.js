
var geometry = require('../lib/geometry');

exports['create point'] = function (test) {
    var point = geometry.point(1, 2);
    
    test.ok(point);
    test.equal(typeof point, 'object');
    test.equal(point.x(), 1);
    test.equal(point.y(), 2);
};

exports['move point'] = function (test) {
    var point = geometry.point(1, 2);
    
    var distance = 2;
    var orientation = 30;
    
    var result = point.move(distance, orientation);
    
    test.ok(result);
    test.equal(typeof result, 'object');
    test.equal(result.x(), 2);
    test.ok(Math.abs(result.y() - (2 + Math.sqrt(3))) <= 0.0000001);
};

exports['distance between points'] = function (test) {
    var point1 = geometry.point(1, 2);
    var point2 = geometry.point(2, 3);
    var point3 = geometry.point(3, 2);
    
    test.equal(point1.distance(point2), Math.sqrt(2));
    test.equal(point2.distance(point1), Math.sqrt(2));
    test.equal(point1.distance(point3), 2);
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

exports['line length'] = function (test) {
    var p1 = geometry.point(1, 2);
    var p2 = geometry.point(3, 4);
    
    var line = geometry.line(p1, p2);
    
    test.equal(line.length(), Math.sqrt(8));
};

exports['create polygon'] = function (test) {
    var point1 = geometry.point(1, 2);
    var point2 = geometry.point(2, 3);
    var point3 = geometry.point(1, 4);
    
    var polygon = geometry.polygon([ point1, point2, point3 ]);
    
    test.ok(polygon);
    test.equal(typeof polygon, 'object');
};

