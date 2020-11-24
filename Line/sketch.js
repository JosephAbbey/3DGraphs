let Font;
function preload() {
    data = loadJSON("sample_data.json");
    Font = loadFont("https://josephabbey.github.io/Assets/NotoSans-Bold.ttf");
}
var size;
var curve = true;
var theta = 0;
var textCont = "Title";
var spin = 0;

var settings = QuickSettings.create();
settings.addText("Title", "Title", function (value) {
    textCont = value;
});
settings.addText("Data URL", "sample_data.json", function (value) {
    data = loadJSON(value);
    size = data.size;
});
settings.addBoolean("Curve", 1, function (value) {
    curve = value;
});
settings.addBoolean("Rotate", 0, function (value) {
    spin = value;
});
settings.addButton("Reset angle", () => {
    theta = 0;
});

function setup() {
    size = data.size;
    createCanvas(window.innerWidth - 20, window.innerHeight - 20, WEBGL);
    setAttributes("antialias", true);
    createEasyCam({ distance: size * 5 });
    document.oncontextmenu = () => false;
    textFont(Font);
    curveDetail(100);
}

function draw() {
    rotateY(theta);
    if (spin) {
        theta += 0.2;
    }

    noStroke();
    noFill();
    background(200);

    push();
    stroke(255, 0, 0);
    translate(-size / 2, 0, 0);
    var point = data[0];
    beginShape();
    if (curve) {
        curveVertex(point.x, point.y, point.z);
        for (var i = 0; i < Object.keys(data).length - 1; i++) {
            point = data[i];
            if (!point.x) {
                point.x = (size / (Object.keys(data).length - 2)) * i;
            }
            curveVertex(point.x, point.y, point.z);
        }
        curveVertex(point.x, point.y, point.z);
    } else {
        for (var i = 0; i < Object.keys(data).length - 1; i++) {
            point = data[i];
            if (!point.x) {
                point.x = (size / (Object.keys(data).length - 2)) * i;
            }
            vertex(point.x, point.y, point.z);
        }
    }
    endShape();
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
