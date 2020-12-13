//using homogeneous coordinates
let translationX;
let translationY;
let a, b, c, d;

function setup() {
    createCanvas(windowWidth, windowHeight);

    translationX = prompt('Enter translation Factor for X');
    translationY = prompt('Enter translation Factor for Y');
}

function draw() {
    noStroke();
    background(250);
    fill('black');
    textSize(20);
    text('Before Translation', 20, 20);
    fill('gray')
    text('After Translation', 20, 40);
    //Before translation
    translate(200, 100);
    a = [
        [100],
        [100],
        [1]
    ];
    b = [
        [150],
        [100],
        [1]
    ];
    c = [
        [150],
        [150],
        [1]
    ];
    d = [
        [100],
        [150],
        [1]
    ];
    fill('black');
    beginShape();
    vertex(a[0], a[1]);
    vertex(b[0], b[1]);
    vertex(c[0], c[1]);
    vertex(d[0], d[1]);
    endShape(CLOSE);

    //translation Matrix
    translation_matrix = [
        [1, 0, translationX],
        [0, 1, translationY],
        [0, 0, 1]
    ];
    aN = matrix_multi(translation_matrix, a);
    bN = matrix_multi(translation_matrix, b);
    cN = matrix_multi(translation_matrix, c);
    dN = matrix_multi(translation_matrix, d);

    translate(200, 0);
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