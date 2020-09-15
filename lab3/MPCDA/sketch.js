function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  fill(0, 0, 0);
  midPointCircleDraw(200, 200, 100);
}

function midPointCircleDraw(x_centre, y_centre, r) {
  var x = 0,
    y = r;
  point(x + x_centre, y + y_centre);
  if (r > 0) {
    point(x + x_centre, -y + y_centre);
    point(y + x_centre, x + y_centre);
    point(-y + x_centre, x + y_centre);
  }
  var P = 1 - r;
  for (x = 0; x <= y; x++) {
    // Mid-point is inside or on the perimeter
    if (P < 0) {
      P = P + 2 * x + 1;
    }
    // Mid-point is outside the perimeter
    else {
      y--;
      P = P + 2 * x - 2 * y + 1;
    }
    point(x + x_centre, -y + y_centre);
    point(-x + x_centre, y + y_centre);
    point(x + x_centre, y + y_centre);
    point(-x + x_centre, -y + y_centre);
    point(y + x_centre, x + y_centre);
    point(-y + x_centre, x + y_centre);
    point(y + x_centre, -x + y_centre);
    point(-y + x_centre, -x + y_centre);
  }
}
