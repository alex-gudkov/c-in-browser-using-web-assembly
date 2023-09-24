const exports = {};

async function loadWasm() {
  const source = await fetch('./main.wasm');
  const webAssemblyObject = await WebAssembly.instantiateStreaming(source);

  exports.sumIntNums = webAssemblyObject.instance.exports['sum_int_nums'];
}

loadWasm();

function runWasm() {
  const a = 1;
  const b = 2;
  const result = exports.sumIntNums(a, b);

  console.log(result);
}

const button = document.getElementById('run-wasm-button');

button.onclick = () => {
  runWasm();
};
