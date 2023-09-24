function runWasm() {
  const result = Module.ccall('sum', 'number', ['number', 'number'], [1, 2]);

  console.log(result);
}

const button = document.getElementById('run-wasm-button');

button.onclick = () => {
  runWasm();
};
