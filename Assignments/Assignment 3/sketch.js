// Cars Cars Cars!
// Meixi Yao
// March 27th, 2026


// Globals
let lineX;
let vehicle;


function setup() {
  createCanvas(windowWidth, windowHeight);
  vehicle = new Vehicle();
}

function draw() {
  background(220);
  road();
  vehicle.action();
 
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

class Vehicle{
  constructor(){
    this.type = Math.round(random(0,1));  
    this.color = color(random(255), random(255), random(255));
    this.x = 50;
    this.y = random(height/5 + 10, height-height*2/5 - 10);
    this.d = Math.round(random(0, 1));
    this.xSpeed = random(5);
    this.timeShift = 0.01;
    this.time = random(100);

  }

  display(){
    noStroke();
    fill(this.color);
    if(this.type === 0){
      rect(this.x, this.y, 70, 20);
      fill(255);
      rect(this.x + 7, this.y + 21, 10, 3);
      rect(this.x + 7, this.y - 3.5, 10, 3);
      rect(this.x + 50, this.y + 21, 10, 3);
      rect(this.x + 50, this.y - 3.5, 10, 3);
    }

    else if(this.type = 1){
      rect(this.x, this.y, 50, 30);
      rect(this.x + 52, this.y, 20, 30);
    }
    fill(this.color);
  }

  move(){
    this.x += this.xSpeed;
    if(this.x > width){
      this.x = 0;
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