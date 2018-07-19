

var path = require('path');

module.exports = {
    entry: './tests/FirstTest.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./bundles', 'dist')
    }
};


