
var robots = require('../lib/robots');

exports['create robot with initial position and orientation'] = function (test) {
    var robot = robots.robot();
    
    test.ok(robot);
    test.equal(typeof robot, 'object');
    test.equal(robot.position().x(), 0);
    test.equal(robot.position().y(), 0);
    test.equal(robot.orientation(), 0);
};

