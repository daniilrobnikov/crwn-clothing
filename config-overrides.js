const { override, addBabelPlugin, addBabelPreset } = require('customize-cra')
module.exports = override(addBabelPlugin('styled-jsx/babel'))

// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
