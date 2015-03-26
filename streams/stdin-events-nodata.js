#!/usr/bin/env node

// a test of Node.js stream events
// from node-experiments by Rafał Pocztarski
// See: https://github.com/rsp/node-experiments

// This experiment shows which stdin events are fired
// with no 'data' event handler.

console.log(
	"stdin events without 'data' event handler:"
);

process.stdin.on('open',     function () { console.log('stdin open'); });
process.stdin.on('end',      function () { console.log('stdin end'); });
process.stdin.on('close',    function () { console.log('stdin close'); });
//process.stdin.on('data',     function () { console.log('stdin data'); });
process.stdin.on('readable', function () { console.log('stdin readable'); });

