// while문을 사용하여 0부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력

let i = 10;

while (i > 0) {
  i -= 1;
  if (i % 2 === 1) {
    if (i === 0) {
      break;
    }
    console.log(i);
  }
}
