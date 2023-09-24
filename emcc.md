# EMCC

The Emscripten Compiler Frontend (emcc) is used to call the Emscripten compiler from the command line.

## Commands

```sh
emcc ./main.c -o ./main.js -s NO_EXIT_RUNTIME=1 -s EXPORTED_RUNTIME_METHODS=ccall
```

```sh
emcc ./main.c -o ./main.js -s NO_EXIT_RUNTIME=1 -s EXPORTED_RUNTIME_METHODS=ccall,cwrap
```

```sh
emcc ./src/main.c -o ./out/main.js && rm ./out/main.js
```
