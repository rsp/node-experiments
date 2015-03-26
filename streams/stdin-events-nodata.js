#!/usr/bin/env node

// a test of Node.js stream events
// from node-experiments by Rafał Pocztarski
// See: https://github.com/rsp/node-experiments

// This experiment shows which stdin events are fired
// with no 'data' event handler.

var num = 0;
function logEvent(message) {
	console.log(++num + '. ' + message);
}

console.log(
	"stdin events without 'data' event handler:"
);

process.stdin.on('open',     function () { logEvent('stdin open'); });
process.stdin.on('end',      function () { logEvent('stdin end'); });
process.stdin.on('close',    function () { logEvent('stdin close'); });
//process.stdin.on('data',     function () { logEvent('stdin data'); });
process.stdin.on('readable', function () { logEvent('stdin readable'); });

