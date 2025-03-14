class Widget {
    draw() {
        console.log("drawing...");
    }
}

class ColorWidget extends validateWidget(Widget) {
    color() {
        console.log("coloring...");
    }
}

// closure function return class
function validateWidget(SuperClass) {
    return class extends SuperClass {
        validate() {
            console.log("validating...");
        }
    }
}

const widgetObj = new ColorWidget();
widgetObj.draw();        // drawing...
widgetObj.validate();    // coloring...
widgetObj.color();       // validating...