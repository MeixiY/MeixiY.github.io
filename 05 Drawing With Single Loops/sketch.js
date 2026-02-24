// Drawing With Single Loops
// Meixi Yao
// Feb. 24, 2026

// Global Variables
let cX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function movingBall(){
  cX += 5;
  if(cX > width) cX = 0;  // Wraps around
  circle(cX, 50, 25);
}

function circleLine(y, size){
  // Use this function to draw a line of circles
  // y -> number       height at which to draw the line
  // size -> number    diameter of the circles
  let xstart = width * 0.1   // 10% position from the left
  let xEnd = width * 0.9     // 90% position from the left

  for(let x = xstart; x < xEnd; x += size){

    circle(x, y, size);
  }
}

function gradientBackground(){
  // Create a gradient to use as a background
  let h = 1;   // Height of each rectangle

  // Use a loop (doesn't have to be WHILE) to draw vertical tack of rectangles
  let y = 0;
  noStroke();
  while (y < height){
    let value = map(y, 0, height, 0, 255);
    fill(value);
    rect(0, y, width, h)
    y += h;
  }

}

function draw() {
  background(220);
  gradientBackground();
  movingBall();
  circleLine(height*0.35, 30);
  circleLine(height/2, 50);
  circleLine(height*0.65, 80);
}
