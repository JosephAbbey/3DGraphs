let Font;
function preload() {
    data = loadJSON("sample_data.json");
}

var size;
var thickness;
var theta = 0;
// var textCont = "Title";
var spin = 0;

var settings = QuickSettings.create();
// settings.addText("Title", "Title", function (value) {
//     textCont = value;
// });
settings.addText("Data URL", "sample_data.json", function (value) {
    data = loadJSON(value);
    size = data.size;
});
settings.addBoolean("Rotate", 0, function (value) {
    spin = value;
});
settings.addButton("Reset angle", () => {
    theta = 0;
});

function setup() {
    size = data.size;
    thickness = data.thickness;
    createCanvas(window.innerWidth - 20, window.innerHeight - 20, WEBGL);
    setAttributes("antialias", true);
    createEasyCam({ distance: size * 5 });
    document.oncontextmenu = () => false;
}

function draw() {
    noStroke();
    background(200);
    pointLight(255, 255, 255, size / 2 + 10, size / 2 + 10, size / 2 + 10);
    angleMode(DEGREES);

    rotateY(theta);
    if (spin) {
        theta += 0.3;
    }

    var prevAngle = 0;
    fill(255, 0, 0);
    translate(-50, -50, -thickness / 2);
    push();
    for (var i = 0; i < (thickness / 2) * 100; i++) {
        // for (var j = 0; j < Object.keys(data).length - 3; j++) {
        //     if (data[i]) {
        //         var slice = data[i];
        //         fill(slice.colour);
        //         arc(50, 50, 80, 80, prevAngle, slice.angle, PIE);
        //         prevAngle = slice.angle;
        //     }
        // }

        var slice = {
            angle: 20,
            colour: 0,
        };
        fill(slice.colour);
        arc(50, 50, 80, 80, prevAngle, slice.angle, PIE);
        prevAngle = slice.angle;
        slice = {
            angle: 45,
            colour: 120,
        };
        fill(slice.colour);
        arc(50, 50, 80, 80, prevAngle, slice.angle, PIE);
        prevAngle = slice.angle;
        slice = {
            angle: 295,
            colour: 80,
        };
        fill(slice.colour);
        arc(50, 50, 80, 80, prevAngle, slice.angle, PIE);
        prevAngle = slice.angle;

        translate(0, 0, 0.05);
    }
    pop();
}
