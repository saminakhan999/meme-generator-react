const path = require('path');
const config = require('./webpack.config.js');

config.devServer = {
  historyApiFallback: true, //serve a previous page on a 404 error
  port: 8080, // use this port for the server
  hot: true, // refresh the browser when changes are saved
  open: true, // open the project in the browser when the server starts
  host: '0.0.0.0' // make server accessible externally
};

config.devtool = 'inline-source-map'; // a tool to find errors in the compiled code, but show them against the source code for easier debugging

module.exports = config;
