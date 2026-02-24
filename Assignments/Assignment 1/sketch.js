// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let currentX = 50;
let currentY = 120;
let x2 = 500;
let y2 = 120;
let circleD = 100

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = width/2;
  circleY = height/2;
}

function dayScene() {
  noStroke()
  fill("green");
  rect(0, (height / 3) * 2, width, height / 3);
  fill("skyblue");
  rect(0, 0, width, (height / 3) * 2);
  fill("yellow");
  circle((width / 8) * 7, (height / 8), 150);
  hillSheep();
  clouds(x2, y2);
  clouds(currentX, currentY);

}

function mouseDragged() {
  if (dist(currentX, currentY, mouseX, mouseY) < 100) {
    currentX = mouseX;
    currentY = mouseY;
  }

  else if (dist(x2, y2, mouseX, mouseY) < 100) {
    x2 = mouseX;
    y2 = mouseY;
  }


}

function nightScene() {
  noStroke()
  fill("darkgreen");
  rect(0, (height / 3) * 2, width, height / 3);
  fill("DarkBlue");
  rect(0, 0, width, (height / 3) * 2);
  fill("Moccasin");
  circle((width / 8) * 7, (height / 8), 150);
}

function hillSheep() {
  noStroke();
  fill("green");
  ellipse(width / 8, (height / 5) * 4, 300, 600);
  stroke("darkgreen");
  line(0, (height / 3) * 2, width, (height / 3) * 2);


}

function clouds(x, y) {
  noStroke();
  fill("white");
  circle(x, y, 50);
  circle(x + 40, y - 10, 70);
  circle(x + 80, y - 10, 50);
}

function charBot(){
  noStroke();
  fill("white");
  circle(circleX, circleY, circleD);
  rect(circleX - circleD/2, circleY, circleD, 100);
  triangle(circleX-50, circleY+100, circleX-25, circleY+100, circleX-37.5, circleY+133.3);
  triangle(circleX-25, circleY+100, circleX, circleY+100, circleX-12.5, circleY+133.3);
  triangle(circleX, circleY+100, circleX+25, circleY+100, circleX+12.5, circleY+133.3);
  triangle(circleX+25, circleY+100, circleX+50, circleY+100, circleX+37.5, circleY+133.3);
  fill(0);
  circle(circleX - 27, circleY, 10);
  circle(circleX + 27, circleY, 10);
  stroke(0);
  line(circleX - 20, circleY + 22, circleX + 20, circleY + 22);
}

function draw() {
  background(220);
  dayScene();
  charBot();
}
