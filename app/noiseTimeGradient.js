function noiseTimeGradient(time) {
    const c = [];

    const nOffHue1 = time * 0.01;
    const nHue1 = noise(nOffHue1);
    const hue1 = map(nHue1, 0, 1, 0, 360);

    const nOffBrigthness1 = 8 * time * 0.03;
    const nBrightness1 = noise(nOffBrigthness1);
    // const brightness1 = map(nBrightness1, 0, 1, 70, 90);
    const brightness1 = 80;

    const nOffSaturation1 = 7 * time * 0.05;
    const nSaturation1 = noise(nOffSaturation1);
    const saturation1 = map(nSaturation1, 0, 1, 50, 70);

    const c1 = color(hue1, saturation1, brightness1);

    const nOff2 = (time + 1000) * 0.02;
    const n2 = noise(nOff2);
    const hueDelta = map(n2, 0, 1, -110, 110);
    let hue2 = hue1 + hueDelta;
    hue2 = hue2 < 0 ? hue2 + 360 : hue2 > 360 ? hue2 - 360 : hue2;

    const nOffBrigthness2 = 8 * (time + 1000) * 0.03;
    const nBrightness2 = noise(nOffBrigthness2);
    // const brightness2 = map(nBrightness2, 0, 1, 5, 25);
    const brightness2 = 10;

    const nOffSaturation2 = 7 * (time + 1000) * 0.05;
    const nSaturation2 = noise(nOffSaturation2);
    const saturation2 = map(nSaturation2, 0, 1, 50, 30);

    const c2 = color(hue2, saturation2, brightness2);

    let i = 0;
    for (let y = 0; y < D; y++) {
        c.push([]);
        for (let x = 0; x < D; x++) {
            n = noise(x * 0.1, y * 0.1, time * 0.02);

            amt = n;
            c[y].push(lerpColor(c1, c2, amt));
            i++;
        }
    }
    return c;
}
