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



# 컴공 4일차(0422)
### 함수
- Namespace : 변수가 출력될 때 본인과 가까운 순서로 실행되며 그 영역을 namespace라고 함. 변수가 저장된 공간.
```
a=10
def f():
    t=10
    def g():
        b=20
        def h():
            nonlocal b #다른 지역 변수 b를 선택
            b=30
            print(b,'in h')
        h()
        print(b, 'in g')
    g()
f()
```
- Stack frame: 함수가 실행될 때 쌓이는 메모리 공간(자바스크립트의 call stack)

### 인자 전달 방식에 따른 함수의 구분
- call by value  :  값을 가져와서 스택을 쌓음. 스택 밖으로 넘어갈 수는 없음.
- call by reference  : 주소값을 가져와서(참조하여) 스택을 쌓음. 스택을 넘어서 값을 가져오거나 수정이 가능함.
- call by object reference

- immutable object는 함수 내부에서 값을 변경할 수 없다.

### First - Class Function
- 프로그래밍 언어 중 함수를 다른 변수와 동일하게 다루는 언어를 함수우선순위(First-class function)를 가졌다고 표현합니다. 예를 들어 함수를 다른 함수의 전달인자(Argument)로 사용하고, 함수에서 함수를 리턴하거나 변수의 값으로 함수를 할당할 수 있습니다.  [First-class Function - 용어 사전 | MDN](https://developer.mozilla.org/ko/docs/Glossary/First-class_Function)

### First-Class function은…
- 함수를 인자(argument)로 전달
- 함수를 리턴(return) 값으로 전달
- 함수를 변수에 전달

### 익명 함수
- 이름이 없는 함수
- 몇 번 사용 안 할 때 주로 씀
```
def func(a, b):
    return a + b

# 람다는 반드시 리턴이라서 return 생략
f = lambda a, b: a + b

li=[3, 2, 5, 6, 1, 8]
li2=li.copy()

li2.sort(reverse=True)

li2.sort(key=lambda x: x%2==2, reverse=True)
```


### list comprehension
```
li2=[i*2 for i in range(1, 101)]
```

### map, filter, reduce
- lazy evaluation(게으른 연산)
- map : for와의 차이점은 연산의 실행 시점을 주도적으로 정할 수 있다는 점. 
```
li=[1, 2, 3, 4]
m=map(lambda x: x**2, li)
next(m)
```

- filter: 기준을 정하여 원하는 값만 걸러냄
```
li=[5, -4, 3, -2, 6]
f=filter(lambda x: x > 0, li)
next(f)
```

**filter와 map 동시 사용**
```
li=[4, -2, 5, 3]
list(map(lambda x: x**2 ,filter(lambda x: x > 0, li)))
```

- reduce: 원하는 값이 나올 때까지 리스트를 줄여줌
```
# 최대값 구하기
li=[5, 2, 7, 13, 2, 6, 10]
reduce(lambda a, b: a if a > b else b, li)
```


### 삼항 연산자(python)
```
a=10
# 참일 때 값 if 조건문 else 거짓일 때 값
string='big' if a > 7 else 'small'
```


### 문제
```
li=['a', 'b', 'c', 'd', 'a', 'a', 'a', 'b', 'c']

#result
#dic={'a' : 4, 'b' : 2, 'c' : 2, 'd' : 1}

#use
#dic.get()
#dic.update() or dic

reduce(lambda dic, ch: dic.update({ch : dic.get(ch, 0)+1}) or dic, li, {})
```
- reduce는 내장함수가 아니라서 `from functools import reduce`  추가해야 함


### closure
- 함수 내부에 상태 정보를 저장해두고, 함수 결과가 이 내부의 상태 정보에 따라 출력 결과가 달라짐.
- 일반적인 함수(function)은 하나의 input에 대해 하나의 output만을 가짐. 하지만 method, closure부터는 이 법칙이 깨짐.
- (과거에)OOP를 쓸 수 없을 때 울며 겨자 먹기로 썼다.

**지역변수(local variable)가 필요한 이유**
- 함수가 실행 도중에 결과 데이터를 저장하기 위해서
- 상태정보: 특정한 데이터의 현재 상태

**스택프레임 존재의 이유**
- 어떤 함수가 실행될 때 필요한 상태정보를 저장하기 위해
-> 상태정보는 지역변수가 지정

**계좌 클로저 함수**
- 상태값에 따라 결과값이 달라짐?
```
def account(cus_name, balance):
    def inner(money):
        nonlocal balance
        balance+=money
        return cus_name, balance
    return inner

my_acnt = account('greg', 5000)
your_acnt = account('john', 300)

my_acnt(500)
#('greg', 5500)
your_acnt(500)
#('john', 800)
```


### 선형 탐색(Linear Search)
```
li=[5, 4, 3, 1, 2, 10, 25]
target = 3
def linear_search(li, target):
    for idx in range(len(li)):
        if li[idx] == target:
            return idx
    return None
linear_search(li, target)
```

### 알고리즘 성능 평가
- 절대 시간  X 
- 상대 시간으로 측정: 연산 횟수, 최악의 경우
- 선형탐색의 소요 시간은 n에 비례

### 이진 탐색(Binary Search)
- 데이터가 정렬되어 있어 함(필수)

```
def binary_search(li, target):
    """
    binary_search(li, target) -> idx
    타겟을 찾았다면 인덱스 반환
    찾기 못 하면 None
    """
    pass
```



# 컴공 5일차(0423)
0. Binary search, big O
1. Compiler vs interpreter
2. Process / thread -> multi thread -> race condition -> mural exclubion
3. 절차지향
4. OOP
5. Network
6. 알고리즘/자료구조

### Binary Search
- 데이터가 정렬되어 있어야 함(필수)
```
def binary_search(li, target):
    start=0
    end=len(li)-1
    while start <= end:
        mid=(start+end)//2
        if target == li[mid]:
            return mid
        elif target < li[mid]:
            end=mid-1
        elif target > li[mid]:
            start=mid+1
    return None

li=[1, 3, 5, 7, 9, 15, 17]
target = 7
binary_search(li, target)
```

- linear search : T(n) = n
- binary search : T(n) = log2**n

- ccpcon 2016 - Nicholas ormrod(youtube)

### 속도가 빠른 순서
1. O(1) : 상수시간 



###  OS
1. Job scheduling 
	- scheduler -> context switching
	- process status(프로세스 상태) -> thread -> multithreading
		- [Process state - Wikipedia](https://en.wikipedia.org/wiki/Process_state)
		- [운영 체제 - 위키백과, 우리 모두의 백과사전](https://ko.wikipedia.org/wiki/%EC%9A%B4%EC%98%81_%EC%B2%B4%EC%A0%9C)
		- [Scheduling Priorities - Windows applications | Microsoft Docs](https://docs.microsoft.com/en-us/windows/desktop/procthread/scheduling-priorities)
		- [Scheduler -3- (Preemption & Context Switch) – 문c 블로그](http://jake.dothome.co.kr/preemption/)
		- 선점형(새치기, pre-emptive) 스케쥴링 / 비선점형(non-preemptive) 스케쥴링
		- pre-emptive -> multitasking
			1. Priority algorithm
			2. Round-Robin algorithm -> 정해진 시간 동안 실행
				- time slice / quantum

2. Concurrency programming(동시성 프로그래밍)
	- 논리적인 용어로 동시에 실행되는 것처럼 보이는 것입니다. 싱글 코어(멀티 코어에서도 가능)에서 멀티스레드를 동작시키기 위한 방식으로 멀티 태스킹을 위해 여러 개의 스레드가 번갈아 가면서 실행되는 방식입니다. 동시성을 이용한 싱글 코어의 멀티 태스킹은 각 스레드들이 병렬적으로 실행되는 것처럼 보이지만 사실은 서로 번갈아 가면서 실행되고 있는 방식입니다. (출처: [1) 동시성 프로그래밍과 비동기 프로그래밍 > 부스트코스 iOS 프로그래밍 : edwith](https://www.edwith.org/boostcourse-ios/lecture/16866/))
	- 과거엔 주로 multithreading
	- race-condition / dead-lock
	- ::Asynchronous I/O -> IO Bound -> javascript 핵심개념 꼭 공부할 것!::
		- 프로그램의 주 실행 흐름을 멈추어서 기다리는 부분 없이 바로 다음 작업을 실행할 수 있게 하는 방식입니다. 즉, 코드의 실행 결과 처리를 별도의 공간에 맡겨둔 뒤 결과를 기다리지 않고 바로 다음 코드를 실행하는 병렬처리 방식입니다. 비동기 프로그래밍은 언어 및 프레임워크에서 지원하는 여러 방법으로 구현할 수 있습니다.(출처: [1) 동시성 프로그래밍과 비동기 프로그래밍 > 부스트코스 iOS 프로그래밍 : edwith](https://www.edwith.org/boostcourse-ios/lecture/16866/))

### program
- **하드디스크**에 저장되어 있는 하나의 이미지(code, data)

### process
- **메인 메모리**에 올라와서 실행을 시작한 프로그램
- 실행된 프로그램마다 P(process)ID 발급
- 프로세서는 하드웨어적인 측면에서 컴퓨터 내에서 프로그램을 수행하는 하드웨어 유닛입니다. 대표적으로 중앙처리장치(Central Processing Unit - CPU)가 이에 속합니다. 한 컴퓨터가 여러 개의 프로세서를 갖는다면 멀티 프로세서라고 말합니다. 듀얼 프로세서라고 한다면 한 컴퓨터에 두 개의 프로세서가 운용된다고 할 수 있습니다. (출처:  [https://www.edwith.org/boostcourse-ios/lecture/16866/](https://www.edwith.org/boostcourse-ios/lecture/16866/) )

### 프로그램과 프로세스
- 프로그램은 일반적으로 보조기억 장치에 저장된 실행코드 즉, 생명이 없는 상태를 말합니다. 프로세스는 프로그램을 구동하여 프로그램 자체와 프로그램의 상태가 메모리상에서 실행되는 작업 단위를 말합니다. 동시에 여러 개의 프로세스를 운용하는 시분할 방식을 멀티태스킹이라고 합니다. 이러한 프로세스 관리는 운영체제에서 담당합니다. (출처: [1) 동시성 프로그래밍과 비동기 프로그래밍 > 부스트코스 iOS 프로그래밍 : edwith](https://www.edwith.org/boostcourse-ios/lecture/16866/))

### Context Switching
- instruction 
- PCB(process controls block)
- context switching은 느려서 자주 하면 안 좋지만, 안 할 수는 없음
- [문맥 교환 - 위키백과, 우리 모두의 백과사전](https://ko.wikipedia.org/wiki/%EB%AC%B8%EB%A7%A5_%EA%B5%90%ED%99%98)
- [Process (computing) - Wikipedia](https://en.wikipedia.org/wiki/Process_(computing))

### Process vs Thread
- Process
	- 실행흐름

- Thread
	- 스레드는 하나의 프로세스 내에서 실행되는 작업흐름의 단위를 말합니다. 보통 한 프로세스는 하나의 스레드를 가지고 있지만, 프로세스 환경에 따라 둘 이상의 스레드를 동시에 실행할 수 있습니다. 이러한 방식을 멀티스레딩이라고 합니다. 그리고 프로그램 실행이 시작될 때부터 동작하는 스레드를 메인 스레드라 하고 그 외에 나중에 생성된 스레드를 서브 스레드 또는 세컨더리 스레드라고 합니다. (출처: [1) 동시성 프로그래밍과 비동기 프로그래밍 > 부스트코스 iOS 프로그래밍 : edwith](https://www.edwith.org/boostcourse-ios/lecture/16866/))
	- 인스트럭션의 나열
	- process에 포함됨                    
	- GIL(global interpreter lock)
	- multi-thread exam
```
*import* threading

n=1000
offset=n//4

def thread_main(*li*, *i*):
    *for* idx in range(offset*i, offset*(1+1)):
        li[idx]*=2
        
li=[i *for* i in range(1, 1001)]
threads=[]

*#스레드를 생성*
*for* i in range(4):
    th=threading.Thread(
        *target*=thread_main, *args*=(li, i))
    threads.append(th)

*#멀티스레딩*
*for* th in threads:
    th.start()

*#메인 스레드에서 나머지 스레드들이 모든 실행을 끝날 때까지 기다림.*
*for* th in threads:
    th.join()

print(li)
```
	
- 동시성(Concurrency) 프로그래밍/ 병렬(Parallelism) 프로그래밍
	- 둘은 다른 개념
	- 동시성 프로그래밍은 하드웨어적으로도 나누어져야 함
  
- 공유자원(shared resource)에 같이 접근하면 멀티스레딩의 효율(race condition)이 좋지 않음
- 공유자원 대표적인 건 ‘전역 변수’ 
- race-condition exam
```
*import* threading

*# 공유 자원*
*# 모든 스레드에서 접근이 가능한 자원*
*# 전역 변수*
g_num=0
*# Lock 객체*
lock=threading.Lock()

def thread_main():
    global g_num

    *# critical section*
    *# 임계 영역*
    *# 어떤 스레드에서 공유 자원에 접근한 후*
    *# 수정, 변경 하려는 코드*
    lock.acquire()
    *for* _ in range(1000000):
        g_num+=1
    lock.release()

threads=[]

*for* _ in range(50):
            th=threading.Thread(*target*=thread_main)
            threads.append(th)

*for* th in threads:
    th.start()

*for* th in threads:
    th.join()

print(g_num)

```                                                                                                                                                                                                                                                                                                                                                                                                           


### 재귀함수(Recursion)
- 함수 호출 도중에 자기 자신을 다시 호출하는 것
- base case(기저 조건, 종료 조건, 탈출 조건)
```
def func(n):
    # bace case
    if n <= 0:
        return
    func(n-1)

func(5)
```

### 재귀함수를 만드는 방법
- 패턴을 찾는 -> 점화식을 만든다!
- 기저 조건을 만든다

**예제**
	- factorial(계승) : 3! = 3 * 2 * 1 = 3 * 2!
	- 점화식: fac(n) = fac(n-1) * n
	- 기저조건: n==1 or n==0 return 1
```
def factorial(n):
    if n==0 or n==1:
        return 1
    
    return factorial(n-1) * n

for i in range(1, 6):
    print(factorial(i))
```


### 피보나치 수열(Fibonacci Series)

**예제**
- 점화식: fibo(n-2)+fibo(n-1)
- 기저조건: if n==1 then 0
		if n==2 then 1
```
def fibonacci(n):
    if n==1:
        return 0
    elif n==2:
        return 1
    return fibonacci(n-2) + fibonacci(n-1)

for i in range(1, 11):
    print(fibonacci(i), end=' ')
```

#### 참고자료
- edwith
- wikipedia
