// Cars Cars Cars!
// Meixi Yao
// March 27th, 2026


// Globals
let lineX;
let lightColor;
let eastbound = [];
let westbound = [];
let traffic;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for(let i = 0; i < 20; i++){          // Push 20 vehicles to west direction and east direction
    westbound.push(new Vehicle(1));
  }
  for(let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(0));
  }

  traffic = new TrafficLight();    // Create object for traffic light
}

function draw() {     
  background(220);
  road();
  for(let w of westbound){   // Movement for cars
    w.action();
  }
  for(let e of eastbound){
    e.action();
  }
  traffic.checkLight();   // call checkLight function
  traffic.display();      // display light
  
}


// Display road
function road(){
  fill(0);
  rect(0, height/5, width, height-height*2/5);
  stroke(255);
  strokeWeight(5);
  for(let i = 0; i < width; i+=60){
    line(i, height/2, i+35, height/2)
  }
}


// Add a new vehical each time mouse is pressed
function mousePressed(){
  if(keyIsDown(SHIFT)){    //westbound if shift key is down
    westbound.push(new Vehicle(1));
  }
  else{
    eastbound.push(new Vehicle(0));
  }
}




// Class to create the cars
class Vehicle{
  constructor(direction){
    this.type = Math.round(random(0,1));   // 0 = car  1 = truck
    this.color = color(random(255), random(255), random(255));
    this.x = 0;
    this.y = random(height/5 + 10, height/2 - 40);
    this.d = direction;     // 0 = east    1 = west
    this.xSpeed = random(5);
    this.timeShift = 0.01;    // for perlin noise (speed up and down)
    this.time = random(100);

  }

  //draw the car
  display(){
    noStroke();
    fill(this.color);
    push();
    if(this.d === 1){    // if direction is west, rotate the canvas (everything the opposite direction)
      translate(width, height);
      rotate(180);
    }
    if(this.type === 0){   // type 0 car, facing east
      rect(this.x, this.y, 60, 18);
      fill(255);
      rect(this.x + 5, this.y + 19, 10, 3);
      rect(this.x + 5, this.y - 3, 10, 3);
      rect(this.x + 45, this.y + 19, 10, 3);
      rect(this.x + 45, this.y - 3, 10, 3);
    }

    else if(this.type = 1){  // type 1 truck, facing east
      rect(this.x, this.y, 40, 25);
      rect(this.x + 42, this.y, 15, 25);
    }
    fill(this.color);
    pop();
    }
  
  //move the cars
  move(){
    this.x += this.xSpeed;   // boundary restrictions
    if(this.x > width){
      this.x = 0;
    }
    if(this.x < 0){
      this.x = width;
    }
    
    if(this.xSpeed > 15){   // max speed 15
      this.xSpeed = 15;
    }
  }

  //acceleration
  speedUp(){
    let speedInc = noise(this.time);
    speedInc = map(speedInc, 0, 1, 0, 10);
    this.time += this.timeShift;
    this.xSpeed += speedInc;
  }

  //deccerleration
  speedDown(){
    let speedDec = noise(this.time);
    speedDec = map(speedDec, 0, 1, 0, 10);
    this.time += this.timeShift;
    if(speedDec > this.xSpeed){
      speedDec = this.xSpeed;
    }
    this.xSpeed -= speedDec;   //cannot go below 0
  }

  // update new color
  changeColor(){
    this.color = color(random(255), random(255), random(255));
  }

  //put actions together
  action(){
    this.display();   // always display vehicles
    if(traffic.light === 0){   // if light is green, move
      this.move();
    }
    let choice = Math.round(random(100));  // 1/100 chance for each of the following methods
    if(choice === 1){
      this.changeColor();
    }
    else if(choice === 2){
      this.speedDown();
    }
    else if(choice === 3){
      this.speedUp();
    }
  }
}


//switch light color with space key press
function keyPressed(){
  if(keyCode === 32){
    if(traffic.light === 0){
        traffic.turnRed();
     }   
  }
}


// traffic lights
class TrafficLight{
  constructor(){
    this.light = 0;     //default to green
    this.counter = 0;
  }

  // draw light
  display(){
    if(this.light === 0){
      fill("green");
    }
    else if(this.light === 1){
      fill("red");
    }
    stroke(0);
    strokeWeight(5);
    circle(100, 100, 60);
    

  }

  // when space key pressed, chance color to red and set counter
  turnRed(){
    this.light = 1;
    this.counter = 120;
    }

  // if color is red, count down, if countdown is over, chance color to green
  checkLight(){
    if(this.light === 1)
        this.counter -= 1;
    if(this.counter === 0)
      this.light =  0;
    }
  }