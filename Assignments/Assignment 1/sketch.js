// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function dayScene(){
  noStroke()
  fill("green");
  rect(0, (height/3)*2, width, height/3);
  fill("skyblue");
  rect(0, 0, width, (height/3)*2);
  fill("yellow");
  circle((width/8)*7, (height/8), 150);

}

function nightScene(){
  noStroke()
  fill("darkgreen");
  rect(0, (height/3)*2, width, height/3);
  fill("DarkBlue");
  rect(0, 0, width, (height/3)*2);
  fill("Moccasin");
  circle((width/8)*7, (height/8), 150);
}

function hillSheep(){
  noStroke();
  fill("green");
  rect(0, (height/3)*2, width, height/3);
  fill("skyblue");
  rect(0, 0, width, (height/3)*2);
  fill("yellow");
  stroke("orange");
  circle((width/8)*7, (height/8), 150);
  fill("green");
  noStroke();
  ellipse(width/8, (height/5)*4, 300, 600);
  stroke("darkgreen");
  line(0, (height/3)*2, width, (height/3)*2);


}

function clouds(){
  noStroke();
  fill("white");
  
}
function draw() {
  background(220);
  hillSheep();
}
