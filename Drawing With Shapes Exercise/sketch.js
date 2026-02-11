// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let circleX;
  let circleY;
  let circleD = 100
function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = width/2;
  circleY = height/2;
}

function shapeBot(){
  
  noStroke()
  fill("paleGreen");
  circle(circleX, circleY, circleD);
  rect(circleX - circleD/2, circleY, circleD, circleD/2);
  rect(circleX - circleD/2, circleY + circleD/2, circleD/20, circleD/5);
  rect(circleX + 45, circleY + 50, 5, 20);
  fill(0);
  circle(circleX - 27, circleY, 10);
  circle(circleX + 27, circleY, 10);
  stroke(0);
  line(circleX - 20, circleY + 22, circleX + 20, circleY + 22);

}

function moveBot(){
  if (keyIsDown(LEFT_ARROW)){
    circleX -= 10;
  }

  else if (keyIsDown(RIGHT_ARROW)){
    circleX += 10;
  }
}

function draw() {
  background(220);
  shapeBot();
  moveBot();
}
