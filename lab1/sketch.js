function setup() {
  createCanvas(500, 600);
  smooth();
  noStroke();
}

function draw() {
  background(255,255,255);
  
  //Blue Border of Flag#############################
  fill(19,31,145);
  beginShape();
  vertex(100,100);
  vertex(400,300);
  vertex(200,300);
  vertex(400,500);
  vertex(100,500);
  endShape();
  //end of border stack
  
  //Red Area of Flag################################
  fill(206,24,13);
  beginShape();
  vertex(112,123);
  vertex(360,288);
  vertex(171,288);
  vertex(370,488);
  vertex(112,488);
  endShape();
  //end of red area stack
  
  //drawing moon with white circle stacked with red circle
  fill(255,255,255);
  ellipse(172,240,60,60);
  fill(206,24,13);
  ellipse(172,227,60,60);
  //drawing 8 triangles for moon
  fill(255,255,255);
  ellipse(172,255,30,30);
  triangle(172,240,179,247,177,234);
  triangle(172,240,165,247,166,234);
  triangle(177,242,182,248,184,236);
  triangle(167,242,160,248,161,236);
  triangle(182,244,187,252,188,240);
  triangle(162,244,158,252,156,238);
  triangle(180,252,190,256,193,243);
  triangle(164,252,155,256,151,243);
  //moon completed
  
  //Sun circle#########################################
  ellipse(172,400,44,44);
  
  let v0 = createVector(172, 400);
  let v1 = createVector(33, 0);
  
  for(var angle=0;angle<360;angle += 30){
    drawArrow(v0, v1.rotate(angle), 'white',angle);
  } 
}

function drawArrow(base, vec, myColor,radian) {
  push();
  fill(myColor);
  translate(base.x, base.y);
  rotate(radians(radian));
  translate(vec.mag() - 14, 0);
  triangle(0, 7, 0, -7, 14, 0);
  pop();
}