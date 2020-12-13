let shear;
let a, b, c, d;

function setup() {
    createCanvas(displayWidth, displayHeight);
    shear = prompt('Enter Shearing Factor');
}

function draw() {
    noStroke();
    fill('black');
    textSize(20);
    text('Before Shearing', 20, 20);
    fill('gray')
    text('After Shearing', 20, 40);
    //Before Shearing
    translate(200, 100);
    a = [[10], [10], [1]];
    b = [[50], [10], [1]];
    c = [[50], [50], [1]];
    d = [[10], [50], [1]];
    fill('black');
    beginShape();
    vertex(a[0], a[1]);
    vertex(b[0], b[1]);
    vertex(c[0], c[1]);
    vertex(d[0], d[1]);
    endShape(CLOSE);

    //Shearing Matrix
    shear_matrix = [
        [1, shear, 0],
        [0, 1, 0],
        [0, 0, 1]
    ];

    y = [
        [-1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ];
    resultant = matrix_multi(y, shear_matrix)

    aN = matrix_multi(resultant, a);
    bN = matrix_multi(resultant, b);
    cN = matrix_multi(resultant, c);
    dN = matrix_multi(resultant, d);


    translate(400, 100);
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
    let res = new Array(aRows);
    if (aCols == bRows) {
        for (var i = 0; i < aRows; ++i) {
            res[i] = new Array(bCols);
            for (var j = 0; j < bCols; ++j) {
                res[i][j] = 0;
                for (var k = 0; k < aCols; ++k) {
                    res[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return res;
    }
}