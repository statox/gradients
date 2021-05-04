function noiseGradient(time) {
    const c1 = color(110, 82, 40);
    const c2 = color(23, 82, 40);

    const c = [];
    let i = 0;
    for (let y = 0; y < D; y++) {
        c.push([]);
        for (let x = 0; x < D; x++) {
            // n = noise(i * 0.01);
            n = noise(x * 0.1, y * 0.1, time * 0.01);
            // c[y].push(n < 0.5 ? c1 : c2);

            amt = n;
            c[y].push(lerpColor(c1, c2, amt));
            i++;
        }
    }
    return c;
}
