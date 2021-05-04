function twoColorsGradient() {
    const c1 = color(110, 82, 40);
    const c2 = color(23, 82, 40);

    const c = [];
    let i = 0;
    for (let y = 0; y < D; y++) {
        c.push([]);
        for (let x = 0; x < D; x++) {
            amt = map(i, 0, D * D, 0, 1);
            c[y].push(lerpColor(c1, c2, amt));
            i++;
        }
    }
    return c;
}
