// wrap `sum` function from exported WebAssembly module
const sum = Module.cwrap('sum', 'number', ['number', 'number']);

function runWasm() {
  const a = 1;
  const b = 2;

  // trigger `sum` function
  const result = sum(a, b);

  console.log(result);
}

const button = document.getElementById('run-wasm-button');

button.onclick = () => {
  runWasm();
};
