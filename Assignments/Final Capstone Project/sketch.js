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
  px = mouseX;
  py = mouseY;
  //cx1 = 0;       cy1 = height/2 - 25;
  //cx2 = cx1+50; cy2 = cy1-8;
  //cx3 = cx1+105; cy3 = cy1+225;
  //cx4 = cx1;       cy4 = cy1+230;
}

function draw() {
  image(bg, 0, 0);
  addCone(cx1,cy1, cx2,cy2, cx3,cy3, cx4,cy4);
}


function addCone(x1,y1, x2,y2, x3,y3, x4,y4){
  noFill();
  //push()
  //rotate(348);
  //translate(-150,-36);
  //quad(x1,y1, x2,y2, x3,y3, x4,y4);
  //if(mouseX > x &&
   // mouseX < x+w &&
    //mouseY > y &&
    //mouseY < y+h){
      
    //}
  //pop();
  let collision = false;
  let next = 0;
  for(let current = 0; current < vertices.length; current++){
    next = current +1;
    if(next === vertices.length) next = 0;
    let vc = vertices[current];
    let vn = vertices[next];

    if(((vc.y > py) !== (vn.y > py)) && (px < (vn.x - vc.x)*(py-vc.y)/(vn.y-vc.y) + vc.x)){
      collision = !collision
    }
  }
  return collision;
}
