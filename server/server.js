'use strict';

var nodeStatic = require('node-static');
var http = require('http');

var fileServer = new(nodeStatic.Server)('./dist');
http.createServer(function(req, res) {
  fileServer.serve(req, res);
}).listen(3100);
