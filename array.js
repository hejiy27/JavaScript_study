'use strict';

// Array

// 1. 배열 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index 
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits[0]);

// 3. Looping over an array

// 배열 값 출력하기 
//for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// for of
for (let i of fruits) {
    console.log(i);
}
// forEach
fruits.forEach((fruit) => console.log(fruit));


// 4. 배열의 추가, 삭제, 복사
// push: 배열의 뒤에 값을 추가
fruits.push('🍓','🍑');
console.log(fruits);

// pop: 배열의 뒤에 있는 값을 지움
fruits.pop();
console.log(fruits);

// unshift: 배열의 앞에 값을 넣음
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: 배열의 앞에 값을 지움
fruits.shift();
console.log(fruits);

 // shift,unshift는 pop,push 보다 느리다

 // splice: 값을 지정된 포지션에서 지우기
 fruits.push('🍓', '🍑', '🍋');
 console.log(fruits);
 fruits.splice(1, 1);
 console.log(fruits);
 fruits.splice(1, 1, '🍏', '🍉');
 console.log(fruits);

 // 두개의 배열을 합치기
 const fruits2 = ['🍐', '🥥'];
 const newFruits = fruits.concat(fruits2);
 console.log(newFruits);


 // 5. 검색
 console.log(fruits);
 console.log(fruits.indexOf('🍎')); // 사과의 인덱스는?(없으면 -1 출력)
 console.log(fruits.includes('🍉')); // 수박이 있는가?

 // 6. 마지막의 값 검색
 console.log(fruits.lastUndexof('🍎'));// 배열에 사과들 중 제일 마지막 위치를 알려줌

