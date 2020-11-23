let Font;
function preload() {
    data = loadJSON("sample_data.json");
    Font = loadFont("https://josephabbey.github.io/Assets/NotoSans-Bold.ttf");
}

var size = 100;
var theta = 0;
var textCont = "Title";
var spin = 0;

var settings = QuickSettings.create();
settings.addText("Title", "Title", function (value) {
    textCont = value;
});
settings.addText("Data URL", "sample_data.json", function (value) {
    data = loadJSON(value);
});
settings.addRange("Size", 0, 1000, 100, 1, function (value) {
    size = value;
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
    translate(-size / 2, 0, 0);
    for (var i = 0; i < Object.keys(data).length - 1; i++) {
        var point = data[i];
        if (!point.x) {
            point.x = (size / (Object.keys(data).length - 1)) * i;
        }
        var nextPoint = data[i + 1];
        if (!nextPoint.x) {
            nextPoint.x = (size / (Object.keys(data).length - 1)) * (i + 1);
        }
        line(point.x, point.y, point.z, nextPoint.x, nextPoint.y, nextPoint.z);
    }
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
