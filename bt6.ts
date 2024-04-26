
abstract class Shape {
    abstract draw(): void;

    calculateArea(): void {
        console.log("Calculating area");
    }
}

class Circle extends Shape {
    draw(): void {
        console.log("Drawing a circle");
    }
}

const circle = new Circle();
circle.draw(); 
circle.calculateArea(); 
interface Shape {
    draw(): void;
}

interface Color {
    fill(color: string): void;
}

class Circle implements Shape, Color {
    draw(): void {
        console.log("Drawing a circle");
    }

    fill(color: string): void {
        console.log(`Filling circle with ${color} color`);
    }
}

const circle = new Circle();
circle.draw(); 
circle.fill("blue"); 