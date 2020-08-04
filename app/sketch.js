let appSettings = {
    counter: 0,
    switcher: false
};

function customResizeCanvas() {
    const dim = Math.min(windowHeight, windowWidth) * 0.9;
    resizeCanvas(dim, dim);
}

function setup() {
    app = new Vue({
        el: '#appDiv',
        data: appSettings
    });

    // Create the canvas and put it in its div
    const myCanvas = createCanvas(400, 400);
    // customResizeCanvas();
    myCanvas.parent('canvasDiv');

    initInterface();
}

function draw() {
    let col = [100, 100, 100];
    if (appSettings.switcher) {
        col = [200, 200, 200];
    }
    appSettings.counter = (appSettings.counter + 1) % width;
    background(...col);
    fill('blue');
    ellipse(appSettings.counter, height / 2, 50);
}
