// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bg, chalkboard, bubblegum, butter, chocolate, cookies, mango, mint,
strawberry, vanilla, cone, cup;

let vertices = [];
let verticesV = [];
let verticesChoco = [];
let order = [];
let correctOrder = [];
let px, py;
let scoopNum;
let coneOrCup;
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

  verticesV.push(createVector(295, 580));
  verticesV.push(createVector(520, 580));
  verticesV.push(createVector(469, 715));
  verticesV.push(createVector(215, 715));

  verticesChoco.push(createVector(555, 583));
  verticesChoco.push(createVector(770, 583));
  verticesChoco.push(createVector(769, 715));
  verticesChoco.push(createVector(500, 715));
  generateOrder();
}


function draw() {
  image(bg, 0, 0);
  image(chalkboard, -230, -200);
  writeOrder(mouseX, mouseY, 493, 360, 100, 25);
  addCone(vertices, mouseX, mouseY);
  addCup(mouseX, mouseY, width-90, height-300, 90, 200);
  addVanilla(verticesV, mouseX, mouseY);
  addChocolate(verticesChoco, mouseX,mouseY);
  drawOrder();
}

function generateOrder(){
  scoopNum = Math.round(random(0.5, 3.5));
  coneOrCup = random(["cone", "cup"]);
  correctOrder[0] = coneOrCup;

  if(scoopNum >= 1){
    let flavor1 = random(["Bubblegum", "Butter Pecan", "Chocolate", "Cookies&Cream", "Mango Sorbet", "Mint Chip", "Strawberry", "Vanilla"]);
    correctOrder[1] = flavor1;
  }
  if(scoopNum >= 2){
    let flavor2 = random(["Bubblegum", "Butter Pecan", "Chocolate", "Cookies&Cream", "Mango Sorbet", "Mint Chip", "Strawberry", "Vanilla"]);
    correctOrder[2] = flavor2;
  }
  if(scoopNum >= 3){
    let flavor3 = random(["Bubblegum", "Butter Pecan", "Chocolate", "Cookies&Cream", "Mango Sorbet", "Mint Chip", "Strawberry", "Vanilla"]);
    correctOrder[3] = flavor3;
  }
}

function drawOrder(){
  if(container === 1){
    image(cone, width/2+150, height/2-355);
    }
  else if(container === 2){
    image(cup, width/2+100, height/2-240);
  }
  for(let i = 1; i < order.length; i++){
    if(i === 1 && container === 1){
      image(order[i], width/2+195, height/2-309);
    }
    
    if(i === 2 && container === 1){
      image(order[i], width/2+195, height/2-374);
    }

    if(i === 3 && container === 1){
      image(order[i], width/2+195, height/2-435);
    }
  } 
}

function writeOrder(px, py, rx, ry, rw, rh){
  stroke(255);
  textSize(20);
  fill(255);
  text(scoopNum+" Scoop(s) in a " + coneOrCup, 410, 250);
  if(scoopNum >= 1){
    text("1. " + correctOrder[1], 440, 280);
  }
  
  if(scoopNum >= 2){
    text("2. "+ correctOrder[2], 440, 310);
  }

  if(scoopNum >= 3){
    text("3. " + correctOrder[3], 440, 340);
  }

  fill(242, 212, 215);
  rect(rx, ry, rw, rh, 4, 4, 4, 4);
  fill(222, 93, 131);
  text("Done!", 514, 380);

  if (px >= rx &&        // right of the left edge AND
      px <= rx + rw &&   // left of the right edge AND
      py >= ry &&        // below the top AND
      py <= ry + rh) {   // above the bottom
        return true;
  }
  else return false;
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

function addCup(px, py, rx, ry, rw, rh){
  noFill();
  noStroke();
  rect(rx, ry, rw, rh);
  if (px >= rx &&        // right of the left edge AND
      px <= rx + rw &&   // left of the right edge AND
      py >= ry &&        // below the top AND
      py <= ry + rh) {   // above the bottom
        return true;
  }
  else return false;
}

function addVanilla(vertices, px, py){
  noFill();
  noStroke();
  quad(295, 580, 520, 580, 469, 715, 215, 715);

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

function addChocolate(vertices, px, py){
  noFill();
  noStroke();
  quad(555, 583, 770, 583, 769, 715, 500, 715);

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
  if(addChocolate(verticesChoco, mouseX, mouseY)){
    order.push(chocolate);
  }

  if(addVanilla(verticesV, mouseX, mouseY)){
    order.push(vanilla);
  }

  if(writeOrder(mouseX, mouseY, 493, 360, 100, 25)){
    generateOrder();
  }

  if(addCone(vertices, mouseX, mouseY)){
    container = 1;
    order[0] = 1;
  }

  if(addCup(mouseX, mouseY, width-90, height-300, 90, 200)){
    container = 2;
    order[0] = 2;
  }
}