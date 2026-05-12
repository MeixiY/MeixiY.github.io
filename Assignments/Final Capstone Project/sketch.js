// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bg, chalkboard, bubblegum, butter, chocolate, cookies, mango, mint,
strawberry, vanilla, cone, cup;

let coneX = 0;
//let coneY = height/2;

function preload(){
  bg = loadImage("assets/bg.png");
  chalkboard = loadImage("assets/chalkboard.png");
  bubblegum = loadImage("assets/bubblegum.png");
  butter = loadImage("assets/butter pecan.png");
  chocolate = loadImage("assets/chocolate.png");
  cookies = loadImage("assets/cookies & cream.png");
  mango = loadImage("assets/mango sorbet.png");
  mint = loadImage("assets/mint chip.png");
  strawberry = loadImage("assets/strawberry.png");
  vanilla = loadImage("assets/vanilla.png");
  cone = loadImage("assets/cone.png");
  cup = loadImage("assets/cup.png");
}

function setup() {
  createCanvas(bg.width, bg.height);
  angleMode(DEGREES);
}

function draw() {
  image(bg, 0, 0);
  addCone(0, height/2);
}


function addCone(x,y){
  noFill();
  push()
  rotate(348);
  translate(-150,-36);
  rect(x, y, 102, 230);
  pop();
}
