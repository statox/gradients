let appSettings = {};
console.clear();

const D = 25;

let cells;
let size;

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
    cells = noiseGradient();
}

let cpt = 0;
function draw() {
    background(0, 0, 0);
    fill('blue');
    noStroke();
    cpt++;

    cells = noiseGradient(cpt);
    for (let y = 0; y < D; y++) {
        for (let x = 0; x < D; x++) {
            fill(cells[y][x]);
            rect(x * size, y * size, size, size);
        }
    }
}
