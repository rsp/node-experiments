#!/usr/bin/env node

// a test of Node.js stream events
// from node-experiments by Rafał Pocztarski
// See: https://github.com/rsp/node-experiments

// This experiment shows which file events are fired
// with a 'data' event handler, after a delay.

"use strict";

var fs = require('fs');

var num = 0;
function logEvent(message) {
	console.log(++num + '. ' + message);
}

var file = process.argv[2];

if (file === undefined) {
	console.log("argument missing");
	process.exit(1);
}

console.log(
	"file '" + file + "' stream events with 'data' event handler, delayed:"
);

var stream = fs.createReadStream(file);

setTimeout(function () {

	stream.on('open',     function () { logEvent('file open'); });
	stream.on('end',      function () { logEvent('file end'); });
	stream.on('close',    function () { logEvent('file close'); });
	stream.on('data',     function () { logEvent('file data'); });
	stream.on('readable', function () { logEvent('file readable'); });
	stream.on('error',    function () { logEvent('file error'); });

}, 1000);

