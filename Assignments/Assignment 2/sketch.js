// Perlin Noise Project (Terrain Generation)
// Meixi Yao
// March 4th, 2026



// Global Variables
let rectWidth = 5; 
let rectHeight;
let highestX; let highestY = 0;
let offset = 0;
let totalHeight = 0
let rectNumber = 0

// Variables for using noise()
let noiseTime = 12; let noiseSpeed = 0.01;



function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}



// Main function for terrain pattern
function generateTerrain(){
  totalHeight = 0;
  rectNumber = 0;
  noiseTime = 12 + offset;   // For panning effect
  offset += 0.015;
  
  highestX = 0; highestY = 0;   // set low starting value to keep track of highest peak

  // Generate rectangles of different heights
  for(let x = 0; x <= width; x+=rectWidth){
    rectHeight = noise(noiseTime)    
    rectHeight = map(rectHeight, 0, 1, 0, height*0.75);
    rect(x,height,rectWidth,-rectHeight);
    noiseTime += noiseSpeed;

    if(rectHeight > highestY){   // If rectangle is higher than previously stored value, update highestY
    highestY = rectHeight;
    highestX = x     // store x position of that rectangle    
    }

    totalHeight += (height - rectHeight);  // Average = total/n
    rectNumber += 1
  }

  // call to draw line
  aveHeight();

  // draw flag at highest point
  drawFlag(highestX, height-highestY);
  

  // Change width with left and right arrows
  if(keyIsDown(LEFT_ARROW)){
    rectWidth -= 0.5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    rectWidth += 0.5;
  }
  rectWidth = constrain(rectWidth, 1, 50); // width must be between 1 and 50
}


// Function for calculating average and drawing line
function aveHeight(){
  let yPos = totalHeight/rectNumber;
  stroke("green");
  line(0, yPos, width, yPos);
  stroke(0);
}


// Function to draw flag
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