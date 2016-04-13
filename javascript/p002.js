'use strict';

module.exports = compute;

function compute() {
  let sum = 0;
  let x = 1;
  let y = 2;

  while (x < 4000000) {
    if (x % 2 === 0) sum += x;

    let tmp = x;
    x = y;
    y = tmp + y;
  }

  return sum;
}
