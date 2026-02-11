// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function checkMulti(){
  // A function to demonstrate how we can check if multiple keyboard buttons are pressed at once
  
  // Check for multiple keypresses (3 simultaneouslu)
  strokeWeight(mouseX / 10);
  stroke(255, 0, 0);

  let a = keyIsDown(65);  //a
  let b = keyIsDown(66);  //b
  let c = keyIsDown(67);  //c

  let str = "a: " + a + " b: " + b + " c: " + c;
  textSize(40);
  text(str, 100, 300);
}

function draw() {
  background(220);
  //checkMulti();
}
