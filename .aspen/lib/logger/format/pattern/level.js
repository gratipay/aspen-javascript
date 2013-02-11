var utils = require('../../utils.js');

module.exports = function () {
    "use strict";

    return function (message, level, options) {
        return utils.makeStringExactLength(level, options.length);
    };
};