let rot;
let a, b, c, d;

function setup() {
    createCanvas(displayWidth, displayHeight);

    rot = prompt('Enter Rotation Factor');
    if (rot == 90) {
        rot = 0;
    } else {
        rot = rot * Math.PI / 180;
    }
}

function draw() {
    noStroke();
    background(225);
    fill('black');
    textSize(20);
    text('Before Rotation', 20, 20);
    fill('gray')
    text('After Rotation', 20, 40);
    //Before Rotation
    translate(200, 100);
    a = [
        [100],
        [100],
        [1]
    ];
    b = [
        [300],
        [100],
        [1]
    ];
    c = [
        [300],
        [300],
        [1]
    ];
    d = [
        [100],
        [300],
        [1]
    ];
    fill('black');
    beginShape();
    vertex(a[0], a[1]);
    vertex(b[0], b[1]);
    vertex(c[0], c[1]);
    vertex(d[0], d[1]);
    endShape(CLOSE);

    xr = a[0];
    yr = a[1];

    //Rotation Matrix
    rotation_matrix = [
        [Math.cos(rot), -1 * Math.sin(rot), xr],
        [Math.sin(rot), Math.cos(rot), yr],
        [0, 0, 1]
    ];

    aN = matrix_multi(rotation_matrix, a, xr, yr);
    bN = matrix_multi(rotation_matrix, b, xr, yr);
    cN = matrix_multi(rotation_matrix, c, xr, yr);
    dN = matrix_multi(rotation_matrix, d, xr, yr);

    fill('gray')
    beginShape();
    vertex(aN[0], aN[1]);
    vertex(bN[0], bN[1]);
    vertex(cN[0], cN[1]);
    vertex(dN[0], dN[1])
    endShape(CLOSE);
}

function matrix_multi(a, b) {
    b = [
        [b[0] - xr],
        [b[1] - yr],
        [b[2]]
    ];
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