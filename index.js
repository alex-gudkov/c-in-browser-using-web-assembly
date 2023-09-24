/**
 * @type {(a: number, b: number) => number}
 */
const sumIntNums = Module.cwrap('sum_int_nums', 'number', ['number', 'number']);

function runWasm() {
  const a = 1;
  const b = 2;

  const result = sumIntNums(a, b);

  console.log(result);
}

const button = document.getElementById('run-wasm-button');

button.onclick = () => {
  runWasm();
};
