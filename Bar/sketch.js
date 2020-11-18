let MadeleinaSans;
function preload() {
    MadeleinaSans = loadFont("./MadeleinaSans.otf");
}

var textCont = "text";

var settings = QuickSettings.create();
settings.addButton("Run");
settings.addButton("Step");
settings.addButton("Re-Generate", setup);
settings.addBoolean("Draw gizmo", true, function (value) {
    gizmo = value;
});
settings.addBoolean("Draw empty space", false, function (value) {
    drawEmpty = value;
});
settings.addRange(
    "Run speed <br> (ms bettween steps)",
    1,
    2000,
    100,
    1,
    function (value) {
        interval = value;
    }
);
settings.addRange("Map size", 1, 20, 10, 1, function (value) {
    amt = Math.pow(value, 3);
    xs = ~~Math.cbrt(amt);
    ys = xs;
    zs = xs;
    setup();
});
settings.addRange("Max Walls", 0, 100, 10, 1, function (value) {
    MAXWALLS = value;
    setup();
});
settings.addRange("Min Walls", 0, 100, 10, 1, function (value) {
    MINWALLS = value;
    setup();
});
settings.addRange("Size <br> (drawn at, not shown at)", 6, 50, 10, 1, function (
    value
) {
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
