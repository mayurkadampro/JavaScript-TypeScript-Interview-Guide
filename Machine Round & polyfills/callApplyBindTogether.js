class Shape {
    constructor(width, height, radius, side) {
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.side = side;
    }

    reactangle(){
        const result = calcRectangeArea.bind(this, "area is");
        result();
    }

    circle(){
        calCircleArea.call(this, 3.14);
    }

    sqaure(){
        calcSquareArea.apply(this, ["area is"])
    }


}

function calcRectangeArea (msg) {
    console.log(`${msg} ${this.width * this.height}`);
}

function calcSquareArea (msg) {
    console.log(`${msg} ${this.side * this.side}`);
}

function calCircleArea(pi) {
    console.log(pi * this.radius);
}

const shape = new Shape(20,40, 5, 10);
shape.reactangle();
shape.circle();
shape.sqaure();