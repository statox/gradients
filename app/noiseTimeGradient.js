function noiseTimeGradient(time) {
    const c = [];

    const nOff1 = time * 0.01;
    const n1 = noise(nOff1);
    const hue1 = map(n1, 0, 1, 0, 360);
    const c1 = color(hue1, 82, 40);

    const nOff2 = (time + 1000) * 0.02;
    const n2 = noise(nOff2);
    const hueDelta = map(n2, 0, 1, -110, 110);
    let hue2 = hue1 + hueDelta;
    hue2 = hue2 < 0 ? hue2 + 360 : hue2 > 360 ? hue2 - 360 : hue2;
    const c2 = color(hue2, 42, 40);

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
