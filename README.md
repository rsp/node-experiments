node-experiments
================

https://github.com/rsp/node-experiments

Some experiments performed on [Node.js](https://nodejs.org/).
Because programming is an experimental science.

Observations
------------
### Stream events

On Node v0.10.31 the behavior of stdin stream events seem strange
in that sometimes the 'ready' event gets fired immediately before the end of input
(but not always).
Also it is not consistent with different types of input
(e.g. `cat file | program` is not consistent with `program < file` -
but not when file is something like `/dev/fd/63` in which case it is consistent with the pipe).
When you listen only for certain events but not all then it gets even more complicated
and in some cases no input can give you more events than some input.
See below.

Prerequisites
-------------
Some experiments are only shell scripts and don't run any Node code.
Some are Node programs.

* [Bash](https://www.gnu.org/software/bash/)
* [cURL](http://curl.haxx.se/)
* [grep](https://en.wikipedia.org/wiki/Grep) with Perl regular expression support (like [GNU Grep](http://www.gnu.org/software/grep/))
* [Node](https://nodejs.org/) or [io.js](https://iojs.org/)

It should work on any standard Linux/Unix distribution. If it doesn't,
please [sumbit an issue](https://github.com/rsp/node-releases-experiments/issues).

It was written and tested on Ubuntu 14.04 with various versions of Node.

Streams
-------
Experiments with Node.js streams.

See: [Streams.md](Streams.md) for details.

### `stdin-events-all.js`

Shows what events are fired **with** a 'data' event handler.

Interesting examples:
```
$ ./stdin-events-all.js < /dev/null
$ cat /dev/null | ./stdin-events-all.js
$ ./stdin-events-all.js < <(cat /dev/null)
```
See: [Streams.md](Streams.md) for more examples with output.

### `stdin-events-nodata.js`

Shows what events are fired **without** a 'data' event handler.
Interesting examples:
```
$ ./stdin-events-nodata.js
$ cat | ./stdin-events-nodata.js
$ ./stdin-events-nodata.js < /dev/null
$ cat /dev/null | ./stdin-events-nodata.js
$ echo | ./stdin-events-nodata.js
```
See: [Streams.md](Streams.md) for more examples with output.

Releases
--------
Experiments on Node.js releases.

### `dist-versions`

Usage: `./dist-versions`

Prints the versions of Node that have their own directory (not just single tarballs).
(It will be needed later.)

Author
------
Rafał Pocztarski - https://github.com/rsp

License
-------
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.
