let MadeleinaSans;
function preload() {
    MadeleinaSans = loadFont("./MadeleinaSans.otf");
}

var textCont = "text";
var B1 = 10,
    B2 = 10,
    B3 = 10,
    B4 = 10;

var settings = QuickSettings.create();
settings.addText("Text", "Text", function (value) {
    textCont = value;
});
settings.addRange("Bar 1 size", 1, 100, 10, 1, function (value) {
    B1 = value;
});
settings.addRange("Bar 2 size", 0, 100, 10, 1, function (value) {
    B2 = value;
});
settings.addRange("Bar 3 size", 0, 100, 10, 1, function (value) {
    B3 = value;
});
settings.addRange("Bar 4 size", 6, 50, 10, 1, function (value) {
    B4 = value;
});

function setup() {
    createCanvas(window.innerWidth - 20, window.innerHeight - 20, WEBGL);
    setAttributes("antialias", true);
    createEasyCam({ distance: 100 });
    document.oncontextmenu = () => false;
    textFont(MadeleinaSans);
}

function draw() {
    background(200);

    push();
    textAlign(CENTER, CENTER);
    translate(0, 0, 11);
    text(textCont, 0, 0);
    pop();

    noStroke();
    fill(255, 100);
    box(20);
}
