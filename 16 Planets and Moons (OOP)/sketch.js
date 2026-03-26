// Planets and Moons (OOP)
// Meixi Yao
// March 26th, 2026

// Globals
let myPlanet;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(0, 0, 30, 40);
  myPlanet.display();
}

function mousePressed(){
  //regular click -> Add moon
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(width/2, height/2);
  }
  else myPlanet.createMoon();
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
  }
}

class Planet{
  // Constructor
  constructor(x, y){
    this.x = x;   this.y = y;   this.s = 100;
    this.moons = [];
  }

  // Class methods
  createMoon(){
    this.moons.push(new Moon());
  }
  
  display(){
    //draw the planet plus all of its moons
    fill("orange");
    circle(this.x, this.y, this.s);

    //for the moons
    for(let m of this.moons){
      m.update(this.x, this.y);
    }

  }
}

class Moon{
  // constructor
  constructor(){
    this.speed = random(1, 3);  //angular speed
    this.angle = 0;
    this.orbitRadius = random(150, 300);
    this.s = random(10, 40);
    this.color = random(255);
    this.color2 = random(255);
    this.color3 = random(255);
  }

  //class methods
  move(){
    this.angle += this.speed;
  }

  display(x, y){
    push();
    translate(x, y);
    rotate(this.angle);
    fill(this.color, this.color2, this.color3);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }

  update(x, y){
    // helper to handle all internal method calls
    this.move();
    this.display(x, y);
  }
}