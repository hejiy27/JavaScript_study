'use strict';

console.log('Hello Worl!')

// 2. Varisble, rw(read/write)
// let (added in ES6) : 변수를 선언하는 키워드
let globalName = 'global name';

{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (쓰지않기!)
// var hoisting(어디에 선언했는지는 상관없이 맨위로 선언을 끌어올려줌)
// {}(블럭)과 상관없이 선언해짐


// 3. Contants -r(read only)(한번 설정하면 값이 절대 바뀌지 않음)
// - 보안 
// - 다른 개발자가 보기 쉬움
const daysInWeek = 7;
const maxNumber = 5;


// 4. Variable types
// single item : number, string, boolean, null, undefiedn, symbl
// ogject, box container
// function, first-class function

const count = 17; //정수(integer)
const size = 17.1; // 소수(decimal number)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - 다양한 오류
const infinity = 1/0; // 무한대의 값
const negativeInfinity = -1 / 0; // - 로 나누면 나옴
const nAn = 'not a unmber' / 2; //  숫자가 아닌 값을 숫자로 나누면 나옴
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char ='c';
const brendan1 = 'berndan';
const greeting = 'hello ' + brendan1;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan1}!;`
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//5. 