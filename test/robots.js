
var robots = require('../lib/robots');
var geometry = require('../lib/geometry');

exports['create robot with default position and orientation'] = function (test) {
    var robot = robots.robot();
    
    test.ok(robot);
    test.equal(typeof robot, 'object');
    test.equal(robot.position().x(), 0);
    test.equal(robot.position().y(), 0);
    test.equal(robot.orientation(), 0);
};

exports['create robot with initial position and orientation'] = function (test) {
    var point = geometry.point(1, 2);
    var orientation = 60;
    
    var robot = robots.robot({ position: point, orientation: orientation });
    
    test.ok(robot);
    test.equal(typeof robot, 'object');
    test.equal(robot.position().x(), point.x());
    test.equal(robot.position().y(), point.y());
    test.equal(robot.orientation(), orientation);
};

