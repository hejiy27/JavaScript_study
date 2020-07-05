'use strict';

// class : template
// object: instance of a class

// 1. Class 선언
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

// methods
speak() {
    console.log(`${this.name}: hello!`);
    }
}

//object 생성
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
        //          velue가 0보다 작으면 0을 사용하고 아니면 velue를 사용;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// 3. 상속 & 다양성
// 한 클래스가 다른 클레스로 확장하는 방법
class Shape {
    construstor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
}

// extends 라는 키워드로 상속
class Rectangle extends Shape{}
class Triangle extends Shape{
    draw() {
        super.draw(); // 부모(Shape)의 함수 사용
        console.log('🔺'); // Triangle에서 draw의 함수를 재정의
    }
    getArea() {
        return (this.width * this.height) / 2;
        }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 4. Class 체크 : instanceof 
// (왼쪽의 odject가 오른쪽의 class를 이용해서 만들어진 것인지 아닌지 확인)
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof object);


