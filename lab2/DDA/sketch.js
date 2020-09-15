function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(230);

    let x1 = 50, y1 = 50, x2 = 200, y2 = 300;

    const m = (y2 - y1) / (x2 - x1)

    fill(0, 0, 0)

    if (Math.abs(m) <= 1) {
        let i;
        beginShape();
        vertex(x1, y1);
        for (i = x1; i < x2; i++) {
            if (x1 < x2) {
                x1 = x1 + 1;
                y1 = y1 + m;
                vertex(x1, y1)
            }
        }
        vertex(x2, y2);
        endShape();
    } else if (Math.abs(m) > 1) {
        let i;
        beginShape();
        vertex(x1, y1);
        for (i = y1; i < y2; i++) {
            if (y1 < y2) {
                y1 = y1 + 1;
                x1 = x1 + 1 / m;
              vertex(x1, y1);
            }
        }
        vertex(x2, y2);
        endShape();
    }
}