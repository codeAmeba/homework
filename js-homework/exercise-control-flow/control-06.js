// while문을 사용하여 0부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력

// 순서 반전 실패
let i = 0;

while (i < 10) {
  i++;
  if (i % 2 === 1) {
    console.log(i);
    if (i === 10) break;
  }
}
