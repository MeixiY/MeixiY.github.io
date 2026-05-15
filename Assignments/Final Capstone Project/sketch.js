// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bg, chalkboard, bubblegum, butter, chocolate, cookies, mango, mint,
strawberry, vanilla, cone, cup;

let vertices = [];
let px, py;
let container = 0;    //0-no container, 1-cone, 2-cup

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
  vertices.push(createVector(0, height/2-25));
  vertices.push(createVector(50, height/2-33));
  vertices.push(createVector(105, height/2+200));
  vertices.push(createVector(0, height/2+205));
  
}


function draw() {
  image(bg, 0, 0);
  image(chalkboard, -230, -200);
  addCone(vertices, mouseX, mouseY);
  if(container === 1){
    image(cone, width/2+150, height/2-355);
  }
  
}


function addCone(vertices, px, py){
  noFill();
  noStroke();
  quad(0, height/2-25, 50, height/2-33, 105, height/2+200, 0, height/2+205);

  let collision = false;
  let next = 0;
  for(let current = 0; current < vertices.length; current++){
    next = current +1;
    if(next === vertices.length) next = 0;
    let vc = vertices[current];
    let vn = vertices[next];

    if(((vc.y >= py && vn.y < py) || (vc.y < py && vn.y >= py)) && (px < (vn.x - vc.x)*(py-vc.y)/(vn.y-vc.y) + vc.x)){
      collision = !collision;
    }
  }
  //print(collision);
  return collision;
}




function mousePressed(){
  if(addCone(vertices, mouseX, mouseY)){
    container = 1;
  }
}