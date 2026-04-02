// Cars Cars Cars!
// Meixi Yao
// March 27th, 2026


// Globals
let lineX;
let vehicle;
let lightColor;
let eastbound = [];
let westbound = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  //vehicle = new Vehicle();
  for(let i = 0; i < 20; i++){
    westbound.push(new Vehicle(1));
  }
  for(let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(0));
  }
}

function draw() {
  background(220);
  road();
  //vehicle.action();
  for(let w of westbound){
    w.action();
  }
  for(let e of eastbound){
    e.action();
  }
 
}

function road(){
  fill(0);
  rect(0, height/5, width, height-height*2/5);
  stroke(255);
  strokeWeight(5);
  for(let i = 0; i < width; i+=60){
    line(i, height/2, i+35, height/2)
  }
}

function mousePressed(){
  if(keyIsDown(SHIFT)){
    westbound.push(new Vehicle(1));
  }
  else{
    eastbound.push(new Vehicle(0));
  }
}


class Vehicle{
  constructor(direction){
    this.type = Math.round(random(0,1));  
    this.color = color(random(255), random(255), random(255));
    this.x = 0;
    this.y = random(height/5 + 10, height/2 - 40);
    this.d = direction;
    this.xSpeed = random(5);
    this.timeShift = 0.01;
    this.time = random(100);

  }

  display(){
    noStroke();
    fill(this.color);
    push();
    if(this.d === 1){
      translate(width, height);
      rotate(180);
    }
    if(this.type === 0){
      rect(this.x, this.y, 60, 18);
      fill(255);
      rect(this.x + 5, this.y + 19, 10, 3);
      rect(this.x + 5, this.y - 3, 10, 3);
      rect(this.x + 45, this.y + 19, 10, 3);
      rect(this.x + 45, this.y - 3, 10, 3);
    }

    else if(this.type = 1){
      rect(this.x, this.y, 40, 25);
      rect(this.x + 42, this.y, 15, 25);
    }
    fill(this.color);
    pop();
  }

  move(){
    this.x += this.xSpeed;
    if(this.x > width){
      this.x = 0;
    }
    if(this.x < 0){
      this.x = width;
    }
    
    if(this.xSpeed > 15){
      this.xSpeed = 15;
    }
  }

  speedUp(){
    let speedInc = noise(this.time);
    speedInc = map(speedInc, 0, 1, 0, 10);
    this.time += this.timeShift;
    this.xSpeed += speedInc;
  }

  speedDown(){
    let speedDec = noise(this.time);
    speedDec = map(speedDec, 0, 1, 0, 10);
    this.time += this.timeShift;
    if(speedDec > this.xSpeed){
      speedDec = this.xSpeed;
    }
    this.xSpeed -= speedDec;
  }

  changeColor(){
    this.color = color(random(255), random(255), random(255));
  }

  action(){
    this.display();
    this.move();
    let choice = Math.round(random(100));
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

function keyPressed(){
  if(keyCode === 32){
    if(frameCount <= 120){

     }   
  }
}

class TrafficLight{
  constructor(){
    this.light = lightColor;
  }

  redGreen(){
    
    }
  }