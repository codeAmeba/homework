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
	- ``.clearfix::after {content: “”; display: block; clear: both;}``


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
	- *  [https://keycode.info/](https://keycode.info/) 
	

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
		* disc, circle, square, decimal, decimal-leading-zero, lower-roman, upper-roman, lower-greek, lower-latin, upper-latin, armenian, georgian, lower-alpha, upper-alpha, or none.

