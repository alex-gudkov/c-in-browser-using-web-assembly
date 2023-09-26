/**
 * @description Wrapper which contains all functions exported from WebAssembly module instance.
 * @type {{
 *  sumIntNums: (a: number, b: number) => number;
 *  divIntNums: (a: number, b: number) => number;
 * }}
 */
const exports = {};

async function load() {
  const source = await fetch('../out/main.wasm');
  const webAssemblyObject = await WebAssembly.instantiateStreaming(source, {});

  exports.sumIntNums = webAssemblyObject.instance.exports['sum_int_nums'];

  if (!exports.sumIntNums) {
    throw new Error('"sumIntNums" export not found');
  }

  exports.divIntNums = webAssemblyObject.instance.exports['div_int_nums'];

  if (!exports.divIntNums) {
    throw new Error('"divIntNums" export not found');
  }
}

load();

function run() {
  const a = 20;
  const b = -6;
  const result = exports.divIntNums(a, b);

  console.log(result);
}

const runButtonElement = document.getElementById('run-button');

runButtonElement.onclick = () => {
  run();
};
