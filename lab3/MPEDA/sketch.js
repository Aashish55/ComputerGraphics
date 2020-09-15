function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0, 0, 0);
  midpointellipse(100, 150, 200, 200);
}

function midpointellipse(rx, ry, xc, yc) {
  var dx, dy, d1, d2, x, y;
  x = 0;
  y = ry;

  // Initial decision parameter of region 1
  d1 = ry * ry - rx * rx * ry + 0.25 * rx * rx;
  dx = 2 * ry * ry * x;
  dy = 2 * rx * rx * y;

  // For region 1
  while (dx < dy) {
    // Print points based on 4-way symmetry
    point(x + xc, y + yc);
    point(-x + xc, y + yc);
    point(x + xc, -y + yc);
    point(-x + xc, -y + yc);
    // Checking and updating value of
    // decision parameter based on algorithm
    if (d1 < 0) {
      x++;
      dx = dx + 2 * ry * ry;
      d1 = d1 + dx + ry * ry;
    } else {
      x++;
      y--;
      dx = dx + 2 * ry * ry;
      dy = dy - 2 * rx * rx;
      d1 = d1 + dx - dy + ry * ry;
    }
  }

  // Decision parameter of region 2
  d2 =
    ry * ry * ((x + 0.5) * (x + 0.5)) +
    rx * rx * ((y - 1) * (y - 1)) -
    rx * rx * ry * ry;

  // Plotting points of region 2
  while (y >= 0) {
    // Print points based on 4-way symmetry
    point(x + xc, y + yc);
    point(-x + xc, y + yc);
    point(x + xc, -y + yc);
    point(-x + xc, -y + yc);
    // Checking and updating parameter
    // value based on algorithm
    if (d2 > 0) {
      y--;
      dy = dy - 2 * rx * rx;
      d2 = d2 + rx * rx - dy;
    } else {
      y--;
      x++;
      dx = dx + 2 * ry * ry;
      dy = dy - 2 * rx * rx;
      d2 = d2 + dx - dy + rx * rx;
    }
  }
}
