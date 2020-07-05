'use strict';

// Funtion
// - 프로그램의 기본 구성요소
// - 서브 프로그램이라고도 불리며 여러번 재사용이 가능함
// - 한가지의 문제나 값을 계산하기위해 쓰여짐

// 1. Funtion 선언
// function name(param1,param2) { boody ... return; }
// 하나의 Funtion === 한가지의 일만하도록 만들어야함
// 자바스크립트에서 Funtion은 object 임

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rets parameters(added in ES6)
function printAll(...args) {
    for ( let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for ( const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; 
function printMessage() {
    let message = 'hello';
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

// 6. 반환 값

function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. 빠른 리턴, 빠른 출력 
// 조건이 맞지 않을 경우 return 으로 빨리 종료항 후 조건이 맞을때만 
// 힐요한 로직을 실행하는 경우가 좋음
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // 필요한 로직
}


// 1. Function expression
// function declaration - 함수가 선언되기 이전에 호출해도 호출가능 
// function expression - 할당된 다음부터 호출이 가능
const print = function () { // 함tn에 이름이 없음
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


//2. callback - 상황에 따라 함수를 전달
function randomQuiz(answer, printYes, printNo) {
    //             (정답, 정답이 맞을때 함수, 정답이 틀릴때 함수)
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
};

// anonumous function(이름이 없는 함수)
const printYes = function() {
    console.log('Yes!');
};

// nemed function (이름이 있는 함수)
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// arrow function
// anonumous function(이름이 없는 함수)
const simplePint = function() {
    console.log('simpePint!');
};
// 위의 함수를 arrow function 으로 변경하면 아래 함수가 됨
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;


//Fun quiz time
//function calculate(command, a,b)
//command: add, substract, divide, multipiy, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multipiy':
            return a * b;
        case 'remainder':
            return a % b;
        default :
        throw Error('unkonwn command');
    }
}
console.log(calculatr('add', 2, 3));