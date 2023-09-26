/**
 * @description Wrapper which contains all functions exported from WebAssembly module instance.
 * @type {{
 *  sumInt: (a: number, b: number) => number;
 *  divInt: (a: number, b: number) => number;
 * }}
 */
const exports = {};

async function load() {
  const source = await fetch('../out/main.wasm');
  const webAssemblyObject = await WebAssembly.instantiateStreaming(source, {});

  exports.sumInt = webAssemblyObject.instance.exports['sum_int'];

  if (!exports.sumInt) {
    throw new Error('"sumInt" export not found');
  }

  exports.divInt = webAssemblyObject.instance.exports['div_int'];

  if (!exports.divInt) {
    throw new Error('"divInt" export not found');
  }
}

load();

function run() {
  const a = 20;
  const b = -6;
  const result = exports.divInt(a, b);

  console.log(result);
}

const runButtonElement = document.getElementById('run-button');

runButtonElement.onclick = () => {
  run();
};
