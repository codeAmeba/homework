// 1부터 20 미만의 정수 중 2 또는 3의 배수인 수의 총합

let i = 0;

for (let j = 1; j < 20; j++) {
  if (j % 2 === 0 || j % 3 === 0) {
    i += j;
  }
}

console.log(i);
