let scale;
let a = [[0], [150], [150], [1]];
let b = [[150], [150], [150], [1]];
let c = [[150], [0], [150], [1]];
let d = [[0], [0], [150], [1]];
let e = [[0], [150], [0], [1]];
let f = [[150], [150], [0], [1]];
let g = [[150], [0], [0], [1]];
let h = [[0], [0], [0], [1]];


function setup() {
    createCanvas(screen.width, screen.height, WEBGL);
    scale = 1.5
}

function draw() {
    translate(200, 100);
    fill(200, 200, 200);

    beginShape();

    vertex(a[0], a[1], a[2]);
    vertex(b[0], b[1], b[2]);
    vertex(c[0], c[1], c[2]);
    vertex(d[0], d[1], d[2]);

    endShape(CLOSE);

    beginShape();

    vertex(e[0], e[1], e[2]);
    vertex(f[0], f[1], f[2]);
    vertex(g[0], g[1], g[2]);
    vertex(h[0], h[1], h[2]);

    endShape(CLOSE);

    beginShape();

    vertex(a[0], a[1], a[2]);
    vertex(e[0], e[1], e[2]);
    vertex(f[0], f[1], f[2]);
    vertex(b[0], b[1], b[2]);

    endShape(CLOSE);

    beginShape();

    vertex(d[0], d[1], d[2]);
    vertex(h[0], h[1], h[2]);
    vertex(g[0], g[1], g[2]);
    vertex(c[0], c[1], c[2]);

    endShape(CLOSE);

    beginShape();

    vertex(b[0], b[1], b[2]);
    vertex(f[0], f[1], f[2]);
    vertex(g[0], g[1], g[2]);
    vertex(c[0], c[1], c[2]);

    endShape(CLOSE);

    beginShape();

    vertex(a[0], a[1], a[2]);
    vertex(e[0], e[1], e[2]);
    vertex(h[0], h[1], h[2]);
    vertex(d[0], d[1], d[2]);

    endShape(CLOSE);

    scale_mat = [
        [scale, 0, 0, 0],
        [0, scale, 0, 0],
        [0, 0, scale, 0],
        [0, 0, 0, 1]
    ];

    a1 = mat_multi(scale_mat, a);
    b1 = mat_multi(scale_mat, b);
    c1 = mat_multi(scale_mat, c);
    d1 = mat_multi(scale_mat, d);
    e1 = mat_multi(scale_mat, e);
    f1 = mat_multi(scale_mat, f);
    g1 = mat_multi(scale_mat, g);
    h1 = mat_multi(scale_mat, h);

    fill(0, 0, 153, 51);

    beginShape();

    vertex(a1[0], a1[1], a1[2]);
    vertex(b1[0], b1[1], b1[2]);
    vertex(c1[0], c1[1], c1[2]);
    vertex(d1[0], d1[1], d1[2]);

    endShape(CLOSE);

    beginShape();

    vertex(e1[0], e1[1], e1[2]);
    vertex(f1[0], f1[1], f1[2]);
    vertex(g1[0], g1[1], g1[2]);
    vertex(h1[0], h1[1], h1[2]);

    endShape(CLOSE);

    beginShape();

    vertex(a1[0], a1[1], a1[2]);
    vertex(e1[0], e1[1], e1[2]);
    vertex(f1[0], f1[1], f1[2]);
    vertex(b1[0], b1[1], b1[2]);

    endShape(CLOSE);

    beginShape();

    vertex(d1[0], d1[1], d1[2]);
    vertex(h1[0], h1[1], h1[2]);
    vertex(g1[0], g1[1], g1[2]);
    vertex(c1[0], c1[1], c1[2]);

    endShape(CLOSE);

    beginShape();

    vertex(b1[0], b1[1], b1[2]);
    vertex(f1[0], f1[1], f1[2]);
    vertex(g1[0], g1[1], g1[2]);
    vertex(c1[0], c1[1], c1[2]);

    endShape(CLOSE);

    beginShape();

    vertex(a1[0], a1[1], a1[2]);
    vertex(e1[0], e1[1], e1[2]);
    vertex(h1[0], h1[1], h1[2]);
    vertex(d1[0], d1[1], d1[2]);

    endShape(CLOSE);
}

function mat_multi(a, b) {
    let a_rows = a.length;
    let a_cols = a[0].length;
    let b_rows = b.length;
    let b_cols = b[0].length;
    let res = new Array(a_rows);
    if (a_cols == b_rows) {
        for (var i = 0; i < a_rows; ++i) {
            res[i] = new Array(b_cols);
            for (var j = 0; j < b_cols; ++j) {
                res[i][j] = 0;
                for (var k = 0; k < a_cols; ++k) {
                    res[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return res;
    }
}