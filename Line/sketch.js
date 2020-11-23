let Font;
function preload() {
    Font = loadFont("NotoSans-Bold.ttf");
}

var size = 100;
var theta = 0;
var textCont = "Title";
var X1 = 0,
    Y1 = 50,
    Z1 = 30;
var X2 = 25,
    Y2 = 60,
    Z2 = 30;
var X3 = 50,
    Y3 = 80,
    Z3 = 30;
var X4 = 75,
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
    line(X1, Y1, Z1, X2, Y2, Z2);
    line(X2, Y2, Z2, X3, Y3, Z3);
    line(X3, Y3, Z3, X4, Y4, Z4);
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
