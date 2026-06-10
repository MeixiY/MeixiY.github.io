// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages = [];

//Gorilla
let gorillaState = 0;   //0 - idle, 1 - swipe
let idleIndex = 0;
let swipeIndex = 0;
let gorillaX = 200;


//Spirals
let spirals = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  //Spiral
  for(let i = 0; i< 16; i++){
    if(i<10){
      spiralImages.push(await loadImage("assets/Circle/circle0"+i+".png"));
    }
    else{
      spiralImages.push(await loadImage("assets/Circle/circle"+i+".png"));
    }
  }

  // Gorilla
  for(let i = 1; i < 7; i++){
    gorillaIdle.push(await loadImage("assets/Gorilla/idle"+i+".png"));
    gorillaSwipe.push(await loadImage("assets/Gorilla/swipe"+i+".png"));
  }
}

function draw() {
  background(0);

  // Gorilla Code
  if(gorillaState === 0){
    image(gorillaIdle[idleIndex], gorillaX, 200);
    if(frameCount %10 === 0){
      idleIndex += 1;
      if(idleIndex > 5){
        idleIndex = 0;
      }
    }
    
  }
  else if(gorillaState === 1){
    image(gorillaIdle[swipeIndex], gorillaX, 200);
    if(frameCount %10 === 0){
      swipeIndex += 1;
      if(swipeIndex > 5){
        swipeIndex = 0;
      }
    }
  }

  //Smooth movement
  if(keyIsPressed && keyCode === 39){
    gorillaX += 5;
  }

  //Spiral code
  //for(let s of spirals){
  //  s.display();
  //}
  for(let i = 0; i < spirals.length; i++){
    let s = spirals[i];
    s.display();

    if(s.active === false){  //marks this object for deletion
      spirals.splice(i, 1);
      i--;   //rewind i one step to follow shifting items
    }
  }
}

function mousePressed(){
  spirals.push(new Spiral(mouseX, mouseY));
}

function keyPressed(){
  if(keyCode === 37){
    gorillaX -= 5;
  }
}


class Spiral{   //frames from 0-15
  constructor(x, y){
    this.pos = createVector(x, y);
    this.frame = 0;
    this.active = true;    //for deletion purposes
  }

  //class methods
  display(){
    if(this.frame > 15){
      this.active = false;
    }
    else{
      image(spiralImages[this.frame], this.pos.x, this.pos.y);
      if(frameCount % 3 === 0){
        this.frame++;
      }
    }
  }

}
