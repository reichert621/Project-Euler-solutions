'use strict';

const ANSWERS = {
    1: 233168,
    2: 4613732
};

function pad(num, size) {
  return ('000' + num).substr(-size);
}

console.log('Running Project Euler JS tests...');
console.log('------');

for (let n in ANSWERS) {
  const problemNumber = pad(n, 3);

  const _startTime = new Date();
  const answer = require(`./p${problemNumber}`)();
  const _endTime = new Date();

  if (answer == ANSWERS[n]) {
    const _time = _endTime - _startTime;

    console.log(`[PASS] Problem ${problemNumber}: ${answer}`);
    console.log(`[PASS] Total computation time: ${_time} ms`);
  } else {
    console.log(`[FAIL] Problem ${problemNumber} output: ${answer}`);
    console.log(`[FAIL] Expected output: ${ANSWERS[n]}`);
  }

  console.log('------');
}
