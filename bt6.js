"use strict";
class Shape {
    calculateArea() {
        console.log("Calculating area");
    }
}
class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}
const circle = new Circle();
circle.draw();
circle.calculateArea(); 
class Circle {
    draw() {
        console.log("Drawing a circle");
    }
    fill(color) {
        console.log(`Filling circle with ${color} color`);
    }
}
const circle = new Circle();
circle.draw(); 
circle.fill("blue"); 