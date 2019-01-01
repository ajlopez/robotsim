
var geometry = require('./geometry');

function Robot(options) {
    options = options || { };
    
    if (!options.position)
        options.position = geometry.point(0, 0);
    
    if (options.orientation == null)
        options.orientation = 0;
    
    this.position = function () { return options.position; };
    this.orientation = function () { return options.orientation; };
}

function createRobot(options) {
    return new Robot(options);
}

module.exports = {
    robot: createRobot
};