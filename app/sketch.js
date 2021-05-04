let appSettings = {};
console.clear();

const D = 100;
// const D = 25;

let cells;
let size;

let c1;
let c2;

function setup() {
    app = new Vue({
        el: '#appDiv',
        data: appSettings
    });

    // Create the canvas and put it in its div
    const myCanvas = createCanvas(800, 800);
    myCanvas.parent('canvasDiv');
    colorMode(HSB);
    // initInterface();

    size = width / D;

    c1 = color(110, 82, 30);
    c2 = color(23, 42, 30);
}

let time = 0;
function draw() {
    background(0, 0, 0);
    fill('blue');
    noStroke();
    time++;

    cells = noiseTimeGradient(time);
    for (let y = 0; y < D; y++) {
        for (let x = 0; x < D; x++) {
            fill(cells[y][x]);
            rect(x * size, y * size, size, size);
        }
    }
}
