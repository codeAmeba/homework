// for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력
// 빈 문자열 생성으로 수정 완료

let result = '';

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) result += i;
}

console.log(result);

