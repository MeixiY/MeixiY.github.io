// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Global Variable Section
let currentX = 50;
let currentY = 120;
let x2 = 500;
let y2 = 120;
let circleD = 100;
let backNum = 0;
document.onmousedown = click;


function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = width/2;
  circleY = height/2;
  
}


// Scene #1 - Daytime
function dayScene() {
  noStroke()
  fill("green");
  rect(0, (height / 3) * 2, width, height / 3);
  fill("skyblue");
  rect(0, 0, width, (height / 3) * 2);
  fill("yellow");
  circle((width / 8) * 7, (height / 8), 150);
  noStroke();
  fill("green");
  ellipse(width / 8, (height / 5) * 4, 300, 600);
  stroke("darkgreen");
  line(0, (height / 3) * 2, width, (height / 3) * 2);
  clouds(x2, y2);                // Calling function to draw clouds
  clouds(currentX, currentY);
}

// Clouds added to the sky
function clouds(x, y) {
  noStroke();
  fill("white");
  circle(x, y, 50);
  circle(x + 40, y - 10, 70);
  circle(x + 80, y - 10, 50);
}

// Move the clouds by dragging
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



//Scene #2 - Nighttime
function nightScene() {
  noStroke()
  fill("darkgreen");
  rect(0, (height / 3) * 2, width, height / 3);
  fill("DarkBlue");
  rect(0, 0, width, (height / 3) * 2);
  fill("Moccasin");
  circle((width / 8) * 7, (height / 8), 150);
  stars(); // Called function for drawing stars
}

// Add random stars to the sky
function stars(){
  randomSeed(0);
  for(i = 0; i <= 25; i++){
    let x = random(width);
    let y = random(height/2);
    noStroke();
    fill(255);
    quad(x, y, x+2, y+4, x, y+8, x-2, y+4);
  }
}



// Scene #3 - Desert
function desert(){
noStroke()
fill("Goldenrod");
rect(0, (height / 3) * 2, width, height / 3);
fill("Khaki");
rect(0, 0, width, (height / 3) * 2);
fill(255, 140, 0);
circle((width / 8) * 7, (height / 8), 150);
pyramid();
}

// Draws the two pyramids
function pyramid(){
  fill("peru");
  stroke(139, 69, 19);
  triangle(0, (height/3)*2, 400, (height/3)*2, 200, (height/5)*2);
  triangle(200, (height/3)*2, 500, (height/3)*2, 350, (height/4)*2);
}



// Scene #4 - At Sea
function atSea(){
  noStroke()
  fill("darkblue");
  rect(0, (height / 3) * 2, width, height / 3);
  fill("skyblue");
  rect(0, 0, width, (height / 3) * 2);
  fill("yellow");
  circle((width / 8) * 7, (height / 8), 150);

}



// Change colour of ghost bot depending on where the mouse is
function botColor(){
  let c1 = mouseX; let c2 = mouseY;
  c1 = map(c1, 0, width, 0, 255)     // Map the coordinates so it covers the entire canvas
  c2 = map(c2, 0, height, 0, 255);

  if(keyIsDown(82)){     // Turn ghost white when "r" is held down
    fill("white");
  }
  else fill(c1, c2, 20); // Otherwise dependent on mouse location

}




// Draw character
function charBot(){
  noStroke();
  botColor();
  circle(circleX, circleY, circleD);
  rect(circleX - circleD/2, circleY, circleD, 100);
  triangle(circleX-50, circleY+99.5, circleX-25, circleY+99.5, circleX-37.5, circleY+133.3);
  triangle(circleX-25, circleY+99.5, circleX, circleY+99.5, circleX-12.5, circleY+133.3);
  triangle(circleX, circleY+99.5, circleX+25, circleY+99.5, circleX+12.5, circleY+133.3);
  triangle(circleX+25, circleY+99.5, circleX+50, circleY+99.5, circleX+37.5, circleY+133.3);
  fill(0);
  circle(circleX - 27, circleY, 10);
  circle(circleX + 27, circleY, 10);
  stroke(0);
  line(circleX - 20, circleY + 22, circleX + 20, circleY + 22); 
}



// Move bot with left and right arrows
function moveBot(){
  if (keyIsDown(LEFT_ARROW)){
    circleX -= 10;
  }
  else if (keyIsDown(RIGHT_ARROW)){
    circleX += 10;
  }
}



// State variable to control background
function currentBack(){
  switch(backNum){
    case 0:
      dayScene();
      break;
    case 1:
      nightScene();
      break;
    case 2:
      desert();

  }
}


// Call changeBack() when middle button pressed (returns 1)
function click(event){
  if(event.button == 1) {
    changeBack();
  }    
  }


// Update backNum by 1 when called, wrap back to 0 if over 3
function changeBack(){
  backNum += 1; 
  if(backNum > 2){
    backNum = 0;
  }
}


function draw() {
  atSea();
  //currentBack();
  charBot();
  moveBot();
}
