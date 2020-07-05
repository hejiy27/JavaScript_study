// 1. 문자 연결 (String concatenation)
console.log('my' + 'cat');
console.log( '1' + '2');
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. 숫자 연산(Numeric operators)
console.log(1 + 1); // 더하기
console.log( 1 - 1); //빼기
console.log( 1 / 1); // 나누기
console.log( 1 * 1); // 곱하기
console.log( 5 % 2); // 나머지
console.log(2 ** 3); // 지수화

// 3. 증가 및 감소 연산자
let counter = 3;

const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter ;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`preDecrement: ${postDecrement}, counter: ${counter}`);

// 4. 할당 연산자
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y; 

// 5. 비교하는 연산자
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. 논리 연산자: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or)
console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😱');
    }
    return true;
}

// &&(and)
console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😱');
    }
    return true;
}

//!(not)
console.log(!value1);

// 7. 평등화
const stringFive = '5';
const numberFive = 5;

// == 타입을 변경해서 검사(ex.stiringFive이나 numberFive는 타입은 다르지만 숫자 5가 있다)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === 타입이 다르면 다르다.(ex.stringFive랑 numberFive의 타입이 다르다)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// 8. Conditional operatots: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!') ;
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes': 'no');
//          (name이 ture면 ? 왼쪽에 문구를 실행 아니면 : 왼쪽 문구 실행 )

// 10. Switch statement
// 다중 if 검사에 사용
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('iove you!');
        break;
    default:
        console.log('same all!');
        break;    
}


// 11. 반복문
// 진실이면 코드가 반복적으로 실행됨
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// while문의 코드를 먼저 실행하고 조건을 확인함
do{
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//for loop, for(begin;(처음 한번만 실행) condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i -2) {
    //inline variable declaration( 인라인 변수 선언)
    console.log(`inline variable for: ${i}`);
}

// 중첩 루프
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <10; j ++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break(루프를 끝내다), continue(현재 코드 스킵 후 다음 코드로 넘어감)
// 퀴즈 !!
// 1. 숫자 0~ 10까지 짝수인 숫자만 프린트하시오.(use continue)

// 연습용 코드 답
for (let i = 0; i < 11
    ; i++) {
    if ( i % 2 !== 0)  {
        continue;
    }
    console.log(`q1. ${i}`);
}

// 실제 코드 답
for ( let i = 0; i < 11; i++){
    if ( i % 2 === 0) {
        console.log(`q1. ${i}`);
    }
}

// 2. 숫자 0 ~ 10 까지의 숫자를 프린트하는데 숫자 8을 만나면 멈추시오.(use break)
for (let i = 0; i < 11; i++) {
    if ( i > 8 ) {
        break;
    }
    console.log(`q2. ${i}`);
}

