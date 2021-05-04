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

    const nOff1 = time * 0.01;
    const n1 = noise(nOff1);
    const hue1 = map(n1, 0, 1, 0, 360);
    c1 = color(hue1, 82, 40);

    const nOff2 = (time + 100) * 0.02;
    const n2 = noise(nOff2);
    const hue2 = map(n2, 0, 1, 0, 360);
    c2 = color(hue2, 82, 40);

    cells = noiseTimeGradient(c1, c2, time);
    // cells = noiseTimeGradient(c1, c2, 1);
    for (let y = 0; y < D; y++) {
        for (let x = 0; x < D; x++) {
            fill(cells[y][x]);
            rect(x * size, y * size, size, size);
        }
    }
}
