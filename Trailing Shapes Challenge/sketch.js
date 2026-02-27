// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y;
let a, b;
let v, w;
let diameter = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2; y = height/2;
  v = width/2; w = height/2;
  a = width/2; b = height/2;
  noFill();
  strokeWeight(3);
}

function draw() {
  background(220);
  x = lerp(x, mouseX, 0.15); // (start, end, percentage of way in between)
  y = lerp(y, mouseY, 0.15);
  a = lerp(a, mouseX, 0.05);
  b = lerp(b, mouseY, 0.25);
  v = lerp(v, mouseX, 0.10);
  w = lerp(w, mouseY, 0.3);

  let r = map(x, 0, width, 0, 255);
  let g = map(y, 0, height, 0, 255);
  let b = 120;
  stroke(r, g, b);
     
  circle(x, y, diameter);
  square(a, b, diameter);
  rect(v, w, diameter, 100);
}
