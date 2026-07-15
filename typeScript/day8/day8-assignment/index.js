import { add, multiply } from "./math.js";
import { Point2D } from "./point2D.js";
import { Point3D } from "./point3D.js";
import { Library } from "./bookStore.js";
// types
let firstName = "Youssef";
let age = 24;
let isStudent = true;
console.log(firstName);
console.log(age);
console.log(isStudent);
// union types
let id;
id = 10;
console.log(`${id} ${typeof id}`);
id = "A100";
console.log(`${id} ${typeof id}`);
// // function with type argumnents and return type
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
let result = add(5, 7);
console.log(`${result} ${typeof result}`);
// enums
var Days;
(function (Days) {
    Days[Days["Saturday"] = 0] = "Saturday";
    Days[Days["Sunday"] = 1] = "Sunday";
    Days[Days["Monday"] = 2] = "Monday";
    Days[Days["Tuesday"] = 3] = "Tuesday";
    Days[Days["Wednesday"] = 4] = "Wednesday";
    Days[Days["Thursday"] = 5] = "Thursday";
    Days[Days["Friday"] = 6] = "Friday";
})(Days || (Days = {}));
;
let today = Days.Monday;
console.log(`${today} ${typeof today}`);
console.log(`${Days[today]} ${typeof Days[today]}`);
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`${this.name}\n${this.age}`);
    }
}
let student = new Student("Yusuf", 24);
student.display();
// inheritance
class Animal {
    eat() {
        console.log("an animal is eating");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}
let dog = new Dog();
dog.eat();
dog.bark();
// generics
// without generics
let numbers = [1, 2, 3];
// with generics
function printValue(value) {
    console.log(value);
}
printValue(100);
printValue("Hello");
printValue(true);
// modules
console.log(multiply(4, 5));
let point2d_1 = new Point2D(4, 5);
let point2d_2 = new Point2D(7, 9);
console.log(point2d_1.distance(point2d_2));
let point3d_1 = new Point3D(1, 2, 3);
let point3d_2 = new Point3D(4, 6, 8);
console.log(point3d_1.distance(point3d_2));
let listOfBooks = new Library();
listOfBooks.add('Python Crash Course');
listOfBooks.add('Java The Definitive Guide');
listOfBooks.add('Calculus 9E');
console.log(listOfBooks.getAll());
//# sourceMappingURL=index.js.map