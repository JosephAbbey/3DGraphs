let Font;
function preload() {
    Font = loadFont("NotoSans-Bold.ttf");
}

var size = 100;
var theta = 0;
var textCont = "Title";
var X1 = 90,
    Y1 = 50,
    Z1 = 30;
var X2 = 30,
    Y2 = 60,
    Z2 = 30;
var X3 = 10,
    Y3 = 80,
    Z3 = 30;
var X4 = 50,
    Y4 = 30,
    Z4 = 30;
var spin = 0;
        
function setup() {
    createCanvas(window.innerWidth - 20, window.innerHeight - 20, WEBGL);
    setAttributes("antialias", true);
    createEasyCam({ distance: size * 5 });
    document.oncontextmenu = () => false;
    textFont(Font);
}

function draw() {
    if (spin) {
        rotateY(theta);
        theta += 0.5;
    }

    noStroke();
    background(200);

    push();
    textAlign(CENTER, TOP);
    fill(255);
    translate(0, -size / 2, size / 2 + 1);
    textSize(size / 3);
    text(textCont, 0, 0);
    pop();

    push();
    fill(255, 0, 0);
    translate(size / 2, 0, 0);
    line(0, 0, 0, X1, Y1, Z1);
    line(X1, Y1, Z1, X2, Y2, Z2);
    pop();

    push();
    fill(0);
    translate(0, size / 2 + 1, 0);
    angleMode(DEGREES);
    rotateX(90);
    plane(size);
    pop();
    fill(255, 30);
    box(size);
}
