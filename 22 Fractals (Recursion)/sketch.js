// Visual Recurssion
// Meixi Yao
// April 29, 2026


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  //centerCircle(width/2, height/2, width);
  //circleFractal(width/2, height/2, 500);
  luckySquare(width/2, height/2, 400);
}

function centerCircle(x, y, d){
  // recursively draw concentric circles

  // Base Case...implicit
  if(d > 10){
    //recursive case
    circle(x,y,d);
    centerCircle(x,y,d*0.95);
  }
  else return;

  // If the recursive case is skipped,
  // we unravel one level (base case)
}

function circleFractal(x,y,d){
  noFill();
  if(d > 1){
    circle(x,y,d);
    circleFractal(x-d/2, y, d/2);
    circleFractal(x + d/2, y, d/2);
    circleFractal(x, y + d/2, d/2);
  }
}

function luckySquare(x,y,s){
  rectMode(CENTER); noFill();

  if(s > 10){
    let r = map(x, 0, width, 0, 255);
    let g = map(y, 0, height, 0, 255);
    let b = map(x, 0, width, 255, 0);
    stroke(r,g,b);

    if(dist(x,y, mouseX, mouseY) <= s/2){
      strokeWeight(5);
    }
    else strokeWeight(2);

    push();
    translate(x,y);
    rotate(radians(frameCount));
    square(0,0,s);
    pop();

    square(x,y,s);
    luckySquare(x - s/2, y - s/2, s*0.45);
    luckySquare(x + s/2, y + s/2, s*0.45);
    luckySquare(x - s/2, y + s/2, s*0.45);
    luckySquare(x + s/2, y - s/2, s*0.45);
  }
}