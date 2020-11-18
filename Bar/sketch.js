let Font;
function preload() {
    Font = loadFont("NotoSans-Bold.ttf");
}

var size = 100;
var textCont = "Title";
var B1 = 10,
    B2 = 10,
    B3 = 10,
    B4 = 10;
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
settings.addRange("Bar 1 size", 0, size, 10, 1, function (value) {
    B1 = value;
});
settings.addRange("Bar 2 size", 0, size, 10, 1, function (value) {
    B2 = value;
});
settings.addRange("Bar 3 size", 0, size, 10, 1, function (value) {
    B3 = value;
});
settings.addRange("Bar 4 size", 0, size, 10, 1, function (value) {
    B4 = value;
});
settings.addBoolean("Rotate", 0, function (value) {
    spin = value;
});

function setup() {
    createCanvas(window.innerWidth - 20, window.innerHeight - 20, WEBGL);
    setAttributes("antialias", true);
    createEasyCam({ distance: size * 5 });
    document.oncontextmenu = () => false;
    textFont(Font);
}

function draw() {
    if (spin) {
        rotateY(radians(millis() / 100));
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
    translate(size / 4, size / 2 - B1 / 2, size / 4);
    box(size / 4, B1, size / 4);
    pop();

    push();
    fill(255, 255, 0);
    translate(size / 4, size / 2 - B2 / 2, -size / 4);
    box(size / 4, B2, size / 4);
    pop();

    push();
    fill(0, 255, 0);
    translate(-size / 4, size / 2 - B3 / 2, -size / 4);
    box(size / 4, B3, size / 4);
    pop();

    push();
    fill(0, 0, 255);
    translate(-size / 4, size / 2 - B4 / 2, size / 4);
    box(size / 4, B4, size / 4);
    pop();

    fill(255, 30);
    box(size);
}
