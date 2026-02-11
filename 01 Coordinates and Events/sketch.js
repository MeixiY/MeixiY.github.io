// Project Title
// Your Name
// Date
//
// Extra for Experts:
// Basics of Coordinate Systems
// In Python, we wrote "run to completion" programs
// In p5.js/ we write "interactive"
// setup() -> runs once, at the start
// draw() -> runs over and over (after setup)
//             targeting 60 times per second
//           Screen is updated at bottem of draw


// ---- Gloabal Variable Section -------
// We can DECLARE variables here
//We can initialize variables with simple data types
// Don't have access to system variable

let circleX = 200

function setup() {
  createCanvas(500, 400);
}

function draw() {
  //Repeats over and over automatically
  background(200);
 // drawTwoCircles();
 fiveCircles();>
}

function drawTwoCircles(){
  fill(200, 100, 50);
  stroke("#00FF00");
  circle(circleX, 100, 50); //x position, y position, diameter

  // Second circle
  fill("red");
  circle(width/2, height/2, 200);
}


// Challenge
function fiveCircles(){

  stroke(0, 0, 0)
  circle(width/8, height/8, 50);
  circle((width/8)*7, (height/8)*7, 50);
  circle((width/8)*7, height/8, 50);
  circle(width/8, (height/8)*7, 50);
  circle(width/2, height/2, 50);

}