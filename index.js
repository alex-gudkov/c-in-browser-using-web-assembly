function runWasm() {
  const a = 1;
  const b = 2;

  // trigger `sum` function from exported WebAssembly module
  const result = Module.ccall('sum', 'number', ['number', 'number'], [a, b]);

  console.log(result);
}

const button = document.getElementById('run-wasm-button');

button.onclick = () => {
  runWasm();
};
