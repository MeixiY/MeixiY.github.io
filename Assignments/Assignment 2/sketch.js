// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rectWidth = 5; 
let rectHeight;

// Variables for using noise()
let noiseTime = random(100); let noiseSpeed = 0.02

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function generateTerrain(){
  rectHeight = noise(noiseTime)
  rectHeight = map(rectHeight, 0, 1, 0, height*0.75);
  //using a loop, construct a number
  //of side by side rectangles of 
  //random height, to be 2D terrain
  for(let x = 0; x < width; x+=rectWidth){
    //generate random() (negative) height
    //eventually replace this with using noise()
    //let rectHeight = random(0, height*0.75);
    
    
    rect(x,height,rectWidth,-rectHeight);
    rectHeight += noiseTime + noiseSpeed;
  }
}

function draw() {
  //stabilize my random values once per frame
  //this needs to get adapted for noise() once
  //we switch out of random.
  randomSeed(25);


  background(220);
  generateTerrain();
}