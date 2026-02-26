// Mousewheel, Map, Lerp
// Meixi
// Feb 26, 2026

let x, y;
let diameter = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2; y = height/2;
  noFill();
  strokeWeight(3);
}

function draw() {
  //background(220);
  x = lerp(x, mouseX, 0.15); // (start, end, percentage of way in between)
  y = lerp(y, mouseY, 0.15);
  //line(x, y, mouseX, mouseY);

  let r = map(x, 0, width, 0, 255);
  let g = map(y, 0, height, 0, 255);
  let b = 120;
  stroke(r, g, b);
     
  circle(x, y, diameter);

}

function mouseWheel(event){
  print(event.delta);
  if(event.delta < 0){   // UP
    diameter += 5;
  }
  else{   // DOWN
    diameter = max(10, diameter-5);
  }
}