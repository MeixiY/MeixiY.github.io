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
let verticesStraw = [];
let verticesMint = [];
let verticesCookies = [];
let verticesButter = [];
let verticesBubble = [];
let verticesMango = [];
let order = [];
let correctOrder = [];
let orderString = [];
let restartArray = [];
let px, py;
let scoopNum;
let coneOrCup;
let currProfit;
let totalProfit;
let containerPrice;

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

  verticesStraw.push(createVector(800, 580));
  verticesStraw.push(createVector(1030, 580));
  verticesStraw.push(createVector(1065, 715));
  verticesStraw.push(createVector(800, 715));

  verticesMint.push(createVector(1050, 580));
  verticesMint.push(createVector(1275, 580));
  verticesMint.push(createVector(1360, 715));
  verticesMint.push(createVector(1095, 715));

  verticesCookies.push(createVector(180, 760));
  verticesCookies.push(createVector(454, 760));
  verticesCookies.push(createVector(396, 947));
  verticesCookies.push(createVector(145, 947));

  verticesButter.push(createVector(485, 760));
  verticesButter.push(createVector(766, 760));
  verticesButter.push(createVector(766, 947));
  verticesButter.push(createVector(435, 947));

  verticesBubble.push(createVector(800, 760));
  verticesBubble.push(createVector(1066, 760));
  verticesBubble.push(createVector(1105, 947));
  verticesBubble.push(createVector(800, 947));

  verticesMango.push(createVector(1100, 760));
  verticesMango.push(createVector(1350, 760));
  verticesMango.push(createVector(1450, 947));
  verticesMango.push(createVector(1150, 947));
  //generateOrder();
  totalProfit = 0;
  containerPrice = 0;
}

currProfit = 0;
function draw() {
  image(bg, 0, 0);
  image(chalkboard, -230, -200);
  writeOrder(mouseX, mouseY, 493, 360, 100, 25);
  addCone(vertices, mouseX, mouseY);
  addCup(mouseX, mouseY, width-90, height-300, 90, 200);
  addScoop(verticesV, mouseX, mouseY);
  addScoop(verticesChoco, mouseX,mouseY);
  addScoop(verticesStraw, mouseX, mouseY);
  addScoop(verticesMint, mouseX, mouseY);
  addScoop(verticesCookies, mouseX, mouseY);
  addScoop(verticesButter, mouseX, mouseY);
  addScoop(verticesBubble, mouseX, mouseY);
  addScoop(verticesMango, mouseX, mouseY);
  drawOrder();
  displayProfit();
  stroke(0);
  restart();
  reset(restartArray[0], restartArray[1], restartArray[2], restartArray[3]);
  //quad();
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
    image(cup, width/2+143, height/2-203);
  }
  for(let i = 0; i < order.length; i++){
    if(i === 0 && container === 1){
      image(order[i], width/2+195, height/2-309);
    }
    
    if(i === 1 && container === 1){
      image(order[i], width/2+195, height/2-374);
    }

    if(i === 2 && container === 1){
      image(order[i], width/2+195, height/2-435);
    }
 

    if(i === 0 && container === 2){
        image(order[i], width/2+195, height/2-243);
      }
    
    if(i === 1 && container === 2){
      image(order[i], width/2+195, height/2-294);
    }

    if(i === 2 && container === 2){
      image(order[i], width/2+195, height/2-345);
    }
  }
}

function writeOrder(px, py, rx, ry, rw, rh){
  stroke(255);
  strokeWeight(0);
  textSize(18);
  fill(255);
  if(correctOrder[0] !== undefined){
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
    text("Done!", 517, 379);
  }
  else{
    
    strokeWeight(0.5);
    text("Create the given order", 448, 240)
    strokeWeight(0);
    textSize(17);
    text("- Click the corresponding object to", 415, 270);
    text("add a cone, cup, or a scoop", 428, 288);
    text("- Press left arrow to undo", 415, 313);
    text("- Click 'Done!' to complete", 415, 340);

    fill(242, 212, 215);
    rect(rx, ry, rw, rh, 4, 4, 4, 4);
    fill(222, 93, 131);
    textSize(18);
    text("Start!", 520, 379);
  }
  
  if (px >= rx &&        // right of the left edge AND
      px <= rx + rw &&   // left of the right edge AND
      py >= ry &&        // below the top AND
      py <= ry + rh) {   // above the bottom
        return true;
  }
  else return false;
}


function addCone(vertices, px, py){
  //noFill();
  //noStroke();
  //quad(0, height/2-25, 50, height/2-33, 105, height/2+200, 0, height/2+205);

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
  //rect(rx, ry, rw, rh);
  if (px >= rx &&        // right of the left edge AND
      px <= rx + rw &&   // left of the right edge AND
      py >= ry &&        // below the top AND
      py <= ry + rh) {   // above the bottom
        return true;
  }
  else return false;
}

function addScoop(vertices, px, py){
  //noFill();
 // noStroke();
  //quad(295, 580, 520, 580, 469, 715, 215, 715);

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

function checkOrder(){
  if(orderString[0] === correctOrder[0]){
    if(orderString[1] === correctOrder[1]){
      if(orderString[2] === correctOrder[2]){
        if(orderString[3] === correctOrder[3]){
          return true;
        }
      }
    }
  }
  else return false;
}

function displayProfit(){
  fill("pink");
  strokeWeight(2);
  stroke(227, 28, 121);
  rect(width-200, 40, 160, 50, 5, 5, 5, 5);
  text("Profit: $ " + totalProfit, width-170, 70);
}

function keyPressed(){
  if(keyCode === LEFT_ARROW && order.length > 0){
    order.pop();
    orderString.pop();
    currProfit -= 2;
  }
}

function reset(x, y, w, h){
   if(totalProfit < 0 && restartArray[0] !== undefined){
      fill("pink");
      textSize(60);
      stroke(227, 28, 121);
      rect(x, y, w, h, 10, 10, 10, 10);
      strokeWeight(3);
      text("GAME OVER", 607, 390);
      textSize(20);
      text("Click to Restart", 720, 430)
    }
}

function restart(){
  if(totalProfit < 0){
    restartArray[0] = width/2-175;
    restartArray[1] = height/2-200;
    restartArray[2] = 400;
    restartArray[3] = 150;
  }
}

function mousePressed(){
  if(writeOrder(mouseX, mouseY, width/2-200, height/2-200, 400, 150)){
    order.length = 0;
    orderString.length = 0;
    correctOrder.length = 0;
    restartArray.length = 0;
    container = 0;
    currProfit = 0;
    totalProfit = 0;
    containerPrice = 0;
  }

  if(addScoop(verticesMango, mouseX, mouseY) && container !== 0 && totalProfit >= 0){
    order.push(mango);
    orderString.push("Mango Sorbet");
    currProfit += 2;
  }

  if(addScoop(verticesBubble, mouseX, mouseY) && container !== 0 && totalProfit >= 0){
    order.push(bubblegum);
    orderString.push("Bubblegum");
    currProfit += 2;
  }
  
  if(addScoop(verticesButter, mouseX, mouseY) && container !== 0 && totalProfit >= 0){
    order.push(butter);
    orderString.push("Butter Pecan");
    currProfit += 2;
  }

  if(addScoop(verticesCookies, mouseX, mouseY) && container !== 0 && totalProfit >= 0){
    order.push(cookies);
    orderString.push("Cookies&Cream");
    currProfit += 2;
  }
  
  if(addScoop(verticesMint, mouseX, mouseY) && container !== 0 && totalProfit >= 0){
    order.push(mint);
    orderString.push("Mint Chip");
    currProfit += 2;
  }

  if(addScoop(verticesStraw, mouseX, mouseY) && container !== 0 && totalProfit >= 0){
    order.push(strawberry);
    orderString.push("Strawberry");
    currProfit += 2;
  }

  if(addScoop(verticesChoco, mouseX, mouseY) && container !== 0 && totalProfit >= 0){
    order.push(chocolate);
    orderString.push("Chocolate");
    currProfit += 2;
  }

  if(addScoop(verticesV, mouseX, mouseY) && container !== 0 && totalProfit >= 0){
    order.push(vanilla);
    orderString.push("Vanilla");
    currProfit += 2;
  }

  if(writeOrder(mouseX, mouseY, 493, 360, 100, 25) && checkOrder()){
    order.length = 0;
    orderString.length = 0;
    correctOrder.length = 0;
    container = 0;
    totalProfit = totalProfit + currProfit;
    currProfit = 0;
    containerPrice = 0;
    generateOrder();
  }
  else if(writeOrder(mouseX, mouseY, 493, 360, 100, 25) && !checkOrder()){
    totalProfit -= 50;
  }

  if(addCone(vertices, mouseX, mouseY) && correctOrder[0] !== undefined && totalProfit >= 0){
    container = 1;
    orderString[0] = "cone";
    containerPrice += 1;
    if(containerPrice > 1){
      currProfit = currProfit + 1 - (containerPrice - 1)*0.5;
    }
    else{
      currProfit += 1;
    }
    
  }

  if(addCup(mouseX, mouseY, width-90, height-300, 90, 200) && correctOrder[0] !== undefined && totalProfit >= 0){
    container = 2;
    orderString[0] = "cup";
    containerPrice += 1;
    if(containerPrice > 1){
      currProfit = currProfit + 0.5 - (containerPrice - 1);
    }
    else{
      currProfit += 0.5;
    }
  }
}