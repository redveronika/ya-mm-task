'use strict';

const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = function () {
    return require(
        path.join(__dirname, 'webpack/', `${process.env.NODE_ENV}.config.js`)
    );
};
