// while문을 사용하여 0부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력

// 0은 출력 안 되고, 10까지 출력 됨
// let i = 0;

// while (i < 10) {
//   i++
//   if (i % 2 === 0) {
//     console.log(i);
//     if (i >= 10) break;
//   }
// }

// 0은 출력 안 되고, 10까지 출력 됨
let i = 0;

while (i % 2 === 0) {
  i++;
  console.log(i)
  if (i === 10) {
    break;
  }
}
