# HTML/CSS 1~8일차 주요 내용
## 블로그에 정리중
- https://codeameba.github.io/

## 1일차(0401)
- XML
- HTML 4.01
- WHATWG
- HTML 구조 
	- 3단(헤더, 콘텐츠, 푸터), 4단(헤더, 내비, 콘텐츠, 푸터)
- 선형화 단계
- 시멘틱 요소
- 네이밍
- WAI-ARIA
- CSS - Box model
- normal flow
- flex
- float
- clear
- Pseudo-Element(가상요소)
	- ::before, ::after, :hover


## 2일차(0402)
- CSS 기초
	- 상속의 이해
	- 겹침의 개념
	- 우선순위
- 레이아웃
	- position
	- float
	- display
- DOM Tree란?
- 선택자 파워
	- element < class < id < inline-style
- Color
- Font
	- font-size, font-weight, font-variant, line-height(특징 알기), font-family
	- 브라우저별 지원 형식이 다름
	- rem, em, px 차이 알아보기
- Table
- Position
	- relative, absolute, fixed, sticky 각각의 특징 알기
- 브라우저 접두사
	- -webkit, -ms, -o, -moz


## 3일차(0404)
- nav
	- 한 페이지에 2~3개 정도가 적당
	- 메인메뉴임을 알 수 있도록 <h1>으로 제목 넣어줄 것(section, article 동일)
- gradient
	- background  속성 중 하나
	- linear-gradient()
- text-shadow
- white-space 
	- nowrap
- background-position
- animation - @keyframe


## 4일차(0405)
- form
- fields
- legend
- label (input  요소에 for 속성으로 연결)
- a tag(title, target, a 태그의 중요성)
- text-indent
- letter-spacing
- clearfix(모듈)
```
.clearfix::after {content: “”; display: block; clear: both;}
```


## 5일차(0408)
- dl, dt, dd
- display: flex
- 크로스브라우징의 중요성
- HTML5 Shiv - [WEBDIR :: HTML5 Shiv - HTML5 요소 크로스브라우징](https://webdir.tistory.com/81)


## 6일차(0409)
- <time>
	- 날짜 정의
	- datetime 속성 - 필수 속성, 컴퓨터가 날짜를 확인
- text-overflow
	- overflow: hidden, white-space: nowrap 함께 써야 함
- <script>
	- defer 속성
- removeClass
- addClass
- e.keycode
	- [https://keycode.info/](https://keycode.info/) 
	

## 7일차(0411)
- article
- figure
- img alt
- <em>, <strong>
- transition


## 8일차(0412)
- ol
- q
- footer - article 내부에도 사용 가능
- :hover 특징
- counter()
	- counter(name, style)
	- name: 카운터 이름
	- style: 기본값(생략)은 십진수(decimal), list-style-type과 동일한 값
	- disc, circle, square, decimal, decimal-leading-zero, lower-roman, upper-roman, lower-greek, lower-latin, upper-latin, armenian, georgian, lower-alpha, upper-alpha, or none.


## 9일차(0415)
- `<a href="mailto:code.ameba@gmail.com">code.ameba@gmail.com</a>`
> 클릭 시 메일 작성 창 열림
- `<a href=“tel:01026840242”>Tel</a> 
> 모바일 환경에서 전화걸기 링크

- `<header>`와 `<footer>`는 어디에나 들어갈 수 있다.(메인, 아티클, 섹션 등등)
- 푸터는 제목이 필요 없다
- 푸터의 주소에는 `<address>` 태그 사용
- `<small>`: 주변 글자보다 작게
- `<big>`: 주변 글자보다 크게
- `&copy;` 저작권 표시

### 반응형 웹
- 마크업이 심플해야 함
- RWD(반응형) vs AWD(적응형)
- Flexible web design
- 다양한 패턴이 존재
- desk top first vs mobile first
- 디바이스의 성능저하 고려해야 함
- px 단위는 지양, %, vh 등의 비율 단위 지향
- media queries
- @ : 앳사인
- 프린트용 CSS 별도 제작 및 연결 가능
- 모바일 세로 모드: 포트레이트 / 가로 모드: 랜드스케이프
- sass(css 전처리기)  최근에는  scss를 더 많이  쓰는 편
```
img {
	max-width: 100%;
	height: auto;
 }
```

- 모바일 환경에 맞는 아트디렉션 필요(단순히 사이즈를 줄이는 게 아닌 적절한 크롭)
- `<img src=“#” srcset=“”>` , `<picture>`, `<source>` 디바이스에 따른 조정 가능
- @media screen device-pixel-ratio
- html shiv
- break point :  반응형에서 너비가 바뀌는 지점?
- padding 백분율은 가로 사이즈 기준


## 10일차(0416)
- picture, srcset 등으로 기기별 적절한 이미지 사이즈 적용 가능
- 반응형 배경이미지



# 컴퓨터 공학 기초
## 컴공 1일차(0417)
- Philip Roberts - What the heck~~
- 컴퓨터는 전압으로 0, 1을 구분
- 2진수, 10진수, 16진수? - 정수를 표현하는 방식의 차이
> 10진수: 한 자리에 올 수 있는 숫자가 10개(0~9) radix
> 2진수: 0과 1
> 16진수: 0~f  - 16개 

- JS의 단점:  number의 타입이 하나밖에 없음(double = 8byte)
->  I/O 작업을 위한 언어이기 때문에

- 정수 표현 범위가 있음. 표 참조
- 

## 컴공 2일차(0418)
- **프로그래머가 하는 일은 추상화(abstraction)**
- 함수(function, routine, procedure, subroutine)
- procedural programming =절차지향
- 객체(object)
-> OOP(object - oriented - programming) 객체지향

- 함수에서의 추상화란,
-> ‘함수 시그니처(함수이름, 매개변수, 결과값)’ 또는 ‘인터페이스’와 ‘내부구현’을 구분(seperation)하는 것

- Documentation은 함수 시그니처를 모아놓은 것
- 내부구현은 알고리즘으로 이루어져있고, 이를 테스트할 때  O(n)를 이용


### 함수를 만들 때 유의할 점
- 함수이름은, 누가 보더라도 어떤 용도인지 알 수 있도록 명확하게
- 매개변수, return 등 인터페이스를 동일하게 설계해야 함. 이를 기능명세라고 함.

### 2진수 정규화(normalization)
- 정규화: 정수부를 1자리수, 0이 아닌 자연수
- 예: 123.82 -> 1.23482 x 10 **2
- mantissa 부분은 정밀도를 의미한다.

### Epsilon

### 언어 추상화

### 파이썬
#### mutable object(변경 가능 객체)
- 리스트
- 딕셔너리
- 집합(set)
#### immutable object(변경 불가능 객체)
- 정수, 상수, 정수 
- 문자열
- 튜플


## 컴공 3일차(0419)
- 자료구조 중 BST는 꼭 알아야 함
- 파이썬은 hash로 구성됨
- 이산수학, 집합, 선형대수 > 프로그래머의 필수 수학


### 새로운 언어를 공부할 때 보는 순서
1. 자료형
2. 연산자
3. 제어문, 반복문
4. 함수 - call by ref? or call by value?
5. class(OOP)
	- 정보은닉
	- 상속지원여부 
	- 가상함수지원여부

6. expression(식)
	- “abc” , 1 : 단항식(unary expression)
	- 무언가를 반환할 수 있으면 식
	- 파이썬에서는 함수도 식

7. 기본 입력 방식
	- stdin(standard input) : keyboard
	- stdout(standard output) : monitor
	- stderr(standard error) : monitor


### 함수는 첫 글자 ‘소문자’ / 클래스는 첫 글자 ‘대문자’

### 파이썬2 와 파이썬3 의 차이
- 내부구조가 다름
- 파이썬2는 유니코드 지원 안 함
- 파이썬3에서 문자열이 편리해짐

### ASCII / UNICODE
- 신호(부호)를 문자로 바꾸는 것이 ‘인코드’ 예) 모스부호
- 문자를 신호로 바꾸는 것이 ‘디코드’
- a(character)=97(code point) 
- ASCII는 7bit까지만 지원 가능하다는 게 단점
- 

