Node Experiments: Streams
=========================

Experiments with Node.js streams.

See:

* [README.md](README.md)
* https://github.com/rsp/node-experiments

### `stdin-events-all.js`

Shows what events are fired **with** a 'data' event handler.

---

#### First, no input:

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

Running with stdin set to the output of `cat /dev/null` or `cat empty-file` with `<` redirection via a `/dev/fd/*` file using the `<(command)` syntax in shell:
```
$ ./stdin-events-all.js < <(cat empty-file)
$ ./stdin-events-all.js < <(cat /dev/null)
```
Three events are fired:

1. stdin readable
2. stdin end
3. stdin close

---

#### Now with some input, a single newline:

Running from terminal with no input redirection:
```
$ ./stdin-events-all.js
```

When first some input is given (for example by hitting Enter) and then EOT (with Ctrl+D) then this is what is fired, in that order - 1-2 are fired after Enter, 3-5 are fired after Ctrl+D:

1. stdin data
2. stdin readable
3. stdin readable
4. stdin end
5. stdin close


### `stdin-events-nodata.js`

Shows what events are fired **without** a 'data' event handler.

---

#### No input:

Running the program from terminal with no stdin redirection:
```
$ ./stdin-events-nodata.js
```
We get the 'readable' event but not 'end' and 'close' - even though we listen to them:

1. stdin readable

This is **different** than when we also listed to 'data' for the same input.

(Also compare with `cat | ./stdin-events-nodata.js`)

---

Running with /dev/null or an empty file redirected to stdin with `<`:
```
$ ./stdin-events-nodata.js < /dev/null
$ ./stdin-events-nodata.js < empty-file
```
We get one event:

1. stdin end

This time this is **the same** as when we listen to 'data' for the same kind of input.

---

Piping `cat` with an empty file to a program with no 'data' handler:
```
$ cat empty-file | ./stdin-events-nodata.js
$ cat /dev/null | ./stdin-events-nodata.js
```
fires 3 events:

1. stdin readable
2. stdin end
3. stdin close

But piping `cat` with a non-empty file with no 'data' handler:
```
$ cat one-newline | ./stdin-events-nodata.js
$ echo | ./stdin-events-nodata.js
```
fires only 1 event:

1. stdin readable

