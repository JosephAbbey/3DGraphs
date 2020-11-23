let Font;
function preload() {
    Font = loadFont("https://josephabbey.github.io/Assets/NotoSans-Bold.ttf");
}

var size = 100;
var theta = 0;
var textCont = "Title";
var X1 = 0,
    Y1 = 50,
    Z1 = 30;
var X2 = 25,
    Y2 = 60,
    Z2 = -10;
var X3 = 50,
    Y3 = 80,
    Z3 = 30;
var X4 = 75,
    Y4 = 30,
    Z4 = 20;
var spin = 0;

var settings = QuickSettings.create();
settings.addText("Title", "Title", function (value) {
    textCont = value;
});
settings.addRange("Size", 0, 1000, 100, 1, function (value) {
    size = value;
    if (B1 <= value) {
        settings.setRangeParameters("Bar 1 size", 0, value, B1, 1);
    } else {
        settings.setRangeParameters("Bar 1 size", 0, value, 10, 1);
    }
    if (B2 <= value) {
        settings.setRangeParameters("Bar 2 size", 0, value, B2, 1);
    } else {
        settings.setRangeParameters("Bar 2 size", 0, value, 10, 1);
    }
    if (B3 <= value) {
        settings.setRangeParameters("Bar 3 size", 0, value, B3, 1);
    } else {
        settings.setRangeParameters("Bar 3 size", 0, value, 10, 1);
    }
    if (B4 <= value) {
        settings.setRangeParameters("Bar 4 size", 0, value, B4, 1);
    } else {
        settings.setRangeParameters("Bar 4 size", 0, value, 10, 1);
    }
});
settings.addRange("Bar 1 size", 0, size, 90, 1, function (value) {
    B1 = value;
});
settings.addRange("Bar 2 size", 0, size, 50, 1, function (value) {
    B2 = value;
});
settings.addRange("Bar 3 size", 0, size, 30, 1, function (value) {
    B3 = value;
});
settings.addRange("Bar 4 size", 0, size, 10, 1, function (value) {
    B4 = value;
});
settings.addBoolean("Rotate", 0, function (value) {
    spin = value;
});
settings.addButton("Reset angle", () => {
    theta = 0;
});

function setup() {
    createCanvas(window.innerWidth - 20, window.innerHeight - 20, WEBGL);
    setAttributes("antialias", true);
    createEasyCam({ distance: size * 5 });
    document.oncontextmenu = () => false;
    textFont(Font);
}

function draw() {
    rotateY(theta);
    if (spin) {
        theta += 0.5;
    }

    noStroke();
    background(200);

    push();
    stroke(255, 0, 0);
    translate(0, -size / 2, 0);
    line(X1, Y1, Z1, X2, Y2, Z2);
    line(X2, Y2, Z2, X3, Y3, Z3);
    line(X3, Y3, Z3, X4, Y4, Z4);
    pop();

    noStroke();

    push();
    fill(0);
    translate(0, size / 2 + 1, 0);
    angleMode(DEGREES);
    rotateX(90);
    plane(size);
    pop();
    fill(255, 30);
    box(size);

    push();
    textAlign(CENTER, TOP);
    fill(255);
    translate(0, -size / 2, size / 2 + 1);
    textSize(size / 3);
    text(textCont, 0, 0);
    pop();
}
