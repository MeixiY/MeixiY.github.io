// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rectWidth = 5; 
let rectHeight;
let highestX; let highestY = 0;


// Variables for using noise()
let noiseTime = 12; let noiseSpeed = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function generateTerrain(){
  
highestX =0; highestY = 0;
  for(let x = 0; x <= width; x+=rectWidth){
  
    rectHeight = noise(noiseTime)
    rectHeight = map(rectHeight, 0, 1, 0, height*0.75);
    
    
    rect(x,height,rectWidth,-rectHeight);
    noiseTime += noiseSpeed;

    if(rectHeight > highestY){
    highestY = rectHeight;
    highestX = x
    
    }
  }

  if(keyIsDown(LEFT_ARROW)){
    rectWidth -= 0.5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    rectWidth += 0.5;
  }
  rectWidth = constrain(rectWidth, 1, 50);
  
  drawFlag(highestX, height-highestY);
}



function drawFlag(x_,y){
  stroke("red")
  strokeWeight(3);
  line(x_, y, x_, y-20);
  triangle(x_, y-20, x_+6, y-16, x_, y-12);
  stroke(0);
}



function draw() {
  noiseTime = 12


  background(220);
  generateTerrain();
}