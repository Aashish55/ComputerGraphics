let a, b, c, d;

function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {
    noStroke();
    fill('black');
    textSize(20);
    text('Before Reflection', 20, 20);
    fill('gray')
    text('After Reflection', 20, 40);
    //Before translation
    translate(300, 300);
    a = [[100], [100], [1]];
    b = [[200], [100], [1]];
    c = [[200], [200], [1]];
    d = [[100], [200], [1]];
    fill('black');
    beginShape();
    vertex(a[0], a[1]);
    vertex(b[0], b[1]);
    vertex(c[0], c[1]);
    vertex(d[0], d[1]);
    endShape(CLOSE);

    reflection_matrix = [
        [-1, 0, 0],
        [0, -1, 0],
        [0, 0, 1]
    ];

    aN = matrix_multi(reflection_matrix, a);
    bN = matrix_multi(reflection_matrix, b);
    cN = matrix_multi(reflection_matrix, c);
    dN = matrix_multi(reflection_matrix, d);

    fill('gray')
    beginShape();
    vertex(aN[0], aN[1]);
    vertex(bN[0], bN[1]);
    vertex(cN[0], cN[1]);
    vertex(dN[0], dN[1])
    endShape(CLOSE);
}

function matrix_multi(a, b) {
    let aRows = a.length;
    let aCols = a[0].length;
    let bRows = b.length;
    let bCols = b[0].length;
    let result = new Array(aRows);
    if (aCols == bRows) {
        for (var i = 0; i < aRows; ++i) {
            result[i] = new Array(bCols);
            for (var j = 0; j < bCols; ++j) {
                result[i][j] = 0;
                for (var k = 0; k < aCols; ++k) {
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return result;
    }
}