function blackWhiteGradient() {
    const c = [];
    let i = 0;
    for (let y = 0; y < D; y++) {
        c.push([]);
        for (let x = 0; x < D; x++) {
            c[y].push(map(i, 0, D * D, 0, 100));
            i++;
        }
    }
    return c;
}
