// while문을 사용하여 0부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력

// 0이 출력 안 됨.
let i = 0;

while (i < 10) {
  i += 1;
  if (i % 2 === 0 && i !== 10) {
    console.log(i);
    if (i === 10) {
      break;
    }
  }
}
