// Project Title
// Your Name
// Date
//
// Looking at unpredictability
// specifically the difference between uniformly distributed numbers and Perlin Noise

// Global Variables
let d1, d2;
let minSize = 5; let maxSize = 200;
let x1, y1, x2, y2;

// Variables for using noise()
let noiseTime = 5, noiseSpeed = 0.02;
// "noiseSpeed" controls how connected the random noise() values are



function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width*0.3; y1 = height*0.5;
  x2 = width*0.7; y2 = height*0.5;
  // frameRate(3);
}

function draw() {
  background(0);
  //randomSeed(703);   // actual value is arbitrary
  //stars();
  randomCircle();
  noiseCircle();
}

function noiseCircle(){
  // draw a fixed circle with randomly changing but smooth diameters
  fill(200, 150, 50)
  d2 = noise(noiseTime);  // yields value between 0 and 1
  d2 = map(d2, 0, 1, minSize, maxSize);
  circle(x2, y2, d2);
  noiseTime += noiseSpeed;

}

function randomCircle(){
  // draw a fixed circle with random()ly changing diameter
  fill(120, 180, 60);
  d1= random(minSize, maxSize);
  circle(x1, y1, d1);

}

function stars() {
  // use random to generate 100 stars
  fill(255);
  for (let i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(0, height);
    circle(x, y, 3);

  }

}
