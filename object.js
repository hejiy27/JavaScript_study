//Objects

// 1. literal and properties
// object = { key : value };

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object consturctor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4};
print(ellie);


// 2. Computed properties
console.log(ellie.name);
console.log(ellie['name'] ); // Computed properties
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj [key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30)
console.log(person4);


// 4. Costuctor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator :  키가 있는지 없는지 확인
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);


// 6. for..in  VS for..of

for (key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(valye of array) {
    console.log(valye);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old wey(다른 object 복제)
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4)

const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({},fruit1, fruit2);
console.log(mixed.color); // 뒤에 있는 변수의 값이 덮어쓰여져서 마지막 변수의 값이 나옴
console.log(mixed.size); 

