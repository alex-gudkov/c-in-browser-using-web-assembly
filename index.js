/**
 * @description Wrapper which contains all functions exported from WebAssembly module instance.
 * @type {{
 *  sumIntNums: (a: number, b: number) => number;
 *  subIntNums: (a: number, b: number) => number;
 *  mulIntNums: (a: number, b: number) => number;
 *  divIntNums: (a: number, b: number) => number;
 * }}
 */
const exports = {};

async function loadWasm() {
  const source = await fetch('./out/main.wasm');
  const webAssemblyObject = await WebAssembly.instantiateStreaming(source, {});

  exports.sumIntNums = webAssemblyObject.instance.exports['sum_int_nums'];

  if (!exports.sumIntNums) {
    throw new Error('"sumIntNums" export not found');
  }

  exports.subIntNums = webAssemblyObject.instance.exports['sub_int_nums'];

  if (!exports.subIntNums) {
    throw new Error('"subIntNums" export not found');
  }

  exports.mulIntNums = webAssemblyObject.instance.exports['mul_int_nums'];

  if (!exports.mulIntNums) {
    throw new Error('"mulIntNums" export not found');
  }

  exports.divIntNums = webAssemblyObject.instance.exports['div_int_nums'];

  if (!exports.divIntNums) {
    throw new Error('"divIntNums" export not found');
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
