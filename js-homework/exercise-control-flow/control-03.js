// for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력

// 가로로 출력 실패
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    const j = i.toString();
    console.log(typeof j, j);
  }
}
