function runWasm() {
  const result = Module.ccall('main', 'number', [], []);

  console.log(result);
}

const button = document.getElementById('run-wasm-button');

button.onclick = () => {
  runWasm();
};
