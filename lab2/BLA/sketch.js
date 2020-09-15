function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(240);

    let x1 = 2, y1 = 2, x2 = 80, y2 = 80;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const m = dy / dx;

    fill(0, 0, 0)

    if (Math.abs(m) < 1) {
        let i;
        let p0 = 2 * dy - dx;
        beginShape();
        vertex(x1, y1);
        for (i = x1; i < x2; i++) {
            if (p0 < 0) {
                x1 += 1;
                p0 = p0 + 2 * dy
                vertex(x1, y1)
            } else {
                x1 += 1;
                y1 += 1;
                p0 = p0 + 2 * dy - 2 * dx
                vertex(x1, y1)
            }
        }
        vertex(x2, y2);
        endShape();
    } else if (Math.abs(m) >= 1) {
        let i;
        let p0 = 2 * dx - dy;
        beginShape();
        vertex(x1, y1);
        for (i = y1; i < y2; i++) {
            if (p0 < 0) {
                y1 += 1;
                p0 = p0 + 2 * dx
                vertex(x1, y1)
            } else {
                x1 += 1;
                y1 += 1;
                vertex(x1, y1)
                p0 = p0 + 2 * (dx - dy);
            }
        }
        vertex(x2, y2);
        endShape();
    }
}