let MadeleinaSans;
function preload() {
    MadeleinaSans = loadFont("./MadeleinaSans.otf");
}

var textCont = "text";

var settings = QuickSettings.create();
settings.addRange("Bar 1 size", 1, 100, 10, 1, function (value) {
    amt = Math.pow(value, 3);
});
settings.addRange("Bar 2 size", 0, 100, 10, 1, function (value) {
    MAXWALLS = value;
    setup();
});
settings.addRange("Bar 3 size", 0, 100, 10, 1, function (value) {
    MINWALLS = value;
    setup();
});
settings.addRange("Bar 4 size", 6, 50, 10, 1, function (value) {
    size = value;
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
