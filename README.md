node-experiments
================

https://github.com/rsp/node-experiments

Some experiments performed on [Node.js](https://nodejs.org/).
Because programming is an experimental science.

Prerequisites
-------------
Some experiments are only shell scripts and don't run any Node code.
Some are Node programs.

* [Bash](https://www.gnu.org/software/bash/)
* [cURL](http://curl.haxx.se/)
* [grep](https://en.wikipedia.org/wiki/Grep) with Perl regular expression support (like [GNU Grep](http://www.gnu.org/software/grep/))
* Node

It should work on any standard Linux/Unix distribution. If it doesn't,
please [sumbit an issue](https://github.com/rsp/node-releases-experiments/issues).

It was written and tested on Ubuntu 14.04 with various versions of Node.

Streams
-------
Experiments with Node.js streams.

### `stdin-events-all.js`

Shows what events are fired **with** a 'data' event handler.

---

Running from terminal with no input redirection:

```
$ ./stdin-events-all.js
```
When immediately sending EOT with Ctrl+D then those events are fired, in that order:

1. stdin readable
2. stdin end
3. stdin close

---

Running with stdin set to /dev/null or to an empty file with `<` redirection in shell:

```
$ ./stdin-events-all.js < /dev/null
$ ./stdin-events-all.js < empty-file
```

Only one event is fired:

1. stdin end

---

Running with `cat /dev/null` or `cat empty-file` piped to stdin with `|` redirection:

```
$ cat /dev/null | ./stdin-events-all.js
```

Three events are fired:

1. stdin readable
2. stdin end
3. stdin close

---

Running from terminal with no input redirection:

```
$ ./stdin-events-all.js
```
When immediately sending EOT with Ctrl+D then those events are fired, in that order:

1. stdin readable
2. stdin end
3. stdin close

When first some input is given (for example by hitting Enter) and then EOT (with Ctrl+D) then this is what is fired, in that order - 1-2 are fired after Enter, 3-5 are fired after Ctrl+D:

1. stdin data
2. stdin readable
3. stdin readable
4. stdin end
5. stdin close




### `stdin-events-nodata.js`

Shows what events are fired **without** a 'data' event handler.

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
