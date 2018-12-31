
var geometry = require('../lib/geometry');

exports['create point'] = function (test) {
    var point = geometry.point(1, 2);
    
    test.ok(point);
    test.equal(typeof point, 'object');
    test.equal(point.x(), 1);
    test.equal(point.y(), 2);
};

