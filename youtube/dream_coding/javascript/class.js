'use strict';

class Person {
    constructor (name, age) {

        this.name = name;
        this.age = age;

    }

    speak() {
        console.log(`${this.name} : Hello`)
    }
}

const min = new Person('min', 40);

console.log(min.name, min.age);
min.speak();

// 2. Getter , Setters

class User {
    constructor( firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    set age(value) {

        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);

console.log(user1.age);

// 3. public, private

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. static  --  공통적으로 클래스에서 사용할때 , 메모리 사용을 줄려중 
//  프로토타입으로 속석, 메소드 빼놓은 느낌
class Article {
    static publisher = 'Coding';
    constructor( articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();


// 5. 상속 , 다형성 !!!!

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height)/2;
    }
}

const rectangle = new Rectangle( 20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea())

const triangle = new Triangle( 20, 20, 'red');
triangle.draw();
console.log(triangle.getArea())


// 6. class checking : instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);