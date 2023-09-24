/**
 * Contains all the functions exported from the WebAssembly module instance.
 * @type {{
 *  sumIntNums: (a: number, b: number) => number
 * }}
 */
const exports = {};

async function loadWasm() {
  const source = await fetch('./main.wasm');
  const webAssemblyObject = await WebAssembly.instantiateStreaming(source);

  exports.sumIntNums = webAssemblyObject.instance.exports['sum_int_nums'];

  if (!exports.sumIntNums) {
    throw new Error('"sumIntNums" export not found');
  }
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
