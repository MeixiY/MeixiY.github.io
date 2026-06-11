// Capstone Final Project - Ice Cream Shop
// Meixi Yao
// May 11th, 2026


//Globals - Variables for flavours
let bg, chalkboard, bubblegum, butter, chocolate, cookies, mango, mint,
strawberry, vanilla, cone, cup;

//Globals - Arrays (for click region, keeping track of orders)
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
//let px, py;

//Globals - Variables for keeping track of states and numbers
let scoopNum;
let checkRestart = false;
let currProfit;
let totalProfit;
let coneClick;
let cupClick;
let container = 0;    //0-no container, 1-cone, 2-cup
let ordersMade = -1;
let gradeLevel;

//Globals - Variable for music
let bgMusic;

//Globals - Variables for timer
let startTime = 0;
let maxTime;
let time;


// Loads images and music
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

  bgMusic = loadSound("assets/music.mp3");
}

function setup() {
  createCanvas(bg.width, bg.height);
  //angleMode(DEGREES);

  //Push in boundaries for collision test (click regions)
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

  totalProfit = 0;    // starting value of these variables
  coneClick = 0;
  cupClick = 0;

  playSound();
}

// set this to 0 so that profit displays as a number to start
currProfit = 0;

// Background music
function playSound(){
  bgMusic.play();
  bgMusic.loop();
}

function draw() {
  image(bg, 0, 0);
  image(chalkboard, -230, -200);
  labels();
  writeOrder(493, 360, 100, 25); 
  drawOrder();
  displayProfit();
  timer();
  stroke(0);
  restart();
  reset();
}


// Labels at the beginning of the game to tell users where the cup and cones are
function labels(){
  if(correctOrder[0] === undefined){
    stroke(227, 28, 121);
    textSize(20);
    rect(5, height/2 + 130, 100, 45, 5, 5, 5, 5);
    text("Cones", 25, height/2+159);
    rect(width-105, height/2 + 330, 100, 45, 5, 5, 5, 5);
    text("Cups", width-83, height/2+359);
  }
 
}


// Keeps track of time allowed for each order
function timer(){
  let elapsedTime = (millis() - startTime)/1000; 
  time = (maxTime - elapsedTime).toFixed(0);
  if(time <= 0){
    time = 0;
  }
  if(totalProfit < 0){
    maxTime = undefined;
  }
  stroke(227, 28, 121);
  rect(width-200, 100, 160, 50, 5, 5, 5, 5);
  text("Time:", width-167, 133)
  if(maxTime !== undefined){
    text(time, width-115, 133);
  }
}

//Generates random order and stores in an array
function generateOrder(){
  scoopNum = Math.round(random(0.5, 3.5));
  correctOrder[0] = random(["cone", "cup"]);
  
  if(scoopNum >= 1){
    correctOrder[1] = random(["Bubblegum", "Butter Pecan", "Chocolate", "Cookies&Cream", "Mango Sorbet", "Mint Chip", "Strawberry", "Vanilla"]);
    maxTime = 6;    //time you have to make an order with one scoop
  }

  if(scoopNum >= 2){
    correctOrder[2] = random(["Bubblegum", "Butter Pecan", "Chocolate", "Cookies&Cream", "Mango Sorbet", "Mint Chip", "Strawberry", "Vanilla"]);
    maxTime = 8;    //time you have to make an order with two scoops
  }

  if(scoopNum >= 3){
    correctOrder[3] = random(["Bubblegum", "Butter Pecan", "Chocolate", "Cookies&Cream", "Mango Sorbet", "Mint Chip", "Strawberry", "Vanilla"]);
    maxTime = 10;    //time you have to make an order with three scoops
  }
}


// Displays what the user clicks/creates
function drawOrder(){
  if(container === 1){
    image(cone, width/2+150, height/2-355);
    }
  else if(container === 2){
    image(cup, width/2+143, height/2-203);
  }

  // loop through each item of what the user clicked
  for(let i = 0; i < order.length; i++){

    //if the container is a cone, use these coordinates
    if(i === 0 && container === 1){
      image(order[i], width/2+195, height/2-309);
    }
    
    if(i === 1 && container === 1){
      image(order[i], width/2+195, height/2-374);
    }

    if(i === 2 && container === 1){
      image(order[i], width/2+195, height/2-435);
    }
 
    //if the container is a cup, use these coordinates
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


// Display the generated order (generateOrder()) on the board
function writeOrder(rx, ry, rw, rh){
  stroke(255);
  strokeWeight(0);
  textSize(18);
  fill(255);

  //second display after generateOrder() has been activated
  if(correctOrder[0] !== undefined){
    text(scoopNum+" Scoop(s) in a " + correctOrder[0], 410, 250);
    
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

  //first display (instructions page) at the start when no order has been generated
  else{  
    strokeWeight(0.5);
    text("Create the given order", 448, 240)
    strokeWeight(0);
    textSize(17);
    text("- Click the corresponding object to", 410, 270);
    text("add a cone, cup, or a scoop", 423, 288);
    text("- Press left arrow to undo", 410, 313);
    text("- (-$50) per incorrect try, stay above 0!", 410, 340);

    fill(242, 212, 215);
    rect(rx, ry, rw, rh, 4, 4, 4, 4);
    fill(222, 93, 131);
    textSize(18);
    text("Start!", 520, 379);
  }
}


// Collision test for rectangle shapes (to create click region)
// for adding a cups and button clicks
function inRectangle(px, py, rx, ry, rw, rh){
  if(px >= rx &&       // Check if mouse is: right of the left edge AND
    px <= rx + rw &&                      // left of the right edge AND
    py >= ry &&                           // below the top AND
    py <= ry + rh){                       // above the bottom
      return true;
    }
  else return false;
}



// function create a quad click region
// for adding cone and scoops
function inQuad(vertices, px, py){
  //Uses quad-point collision
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
  return collision;
}


// compares what the user clicked (orderString) to the correct order
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


// Displays what the user has made on the top right corner
function displayProfit(){
  fill("pink");
  strokeWeight(2);
  stroke(227, 28, 121);
  rect(width-200, 40, 160, 50, 5, 5, 5, 5);
  text("Profit: $ " + totalProfit, width-170, 70);
}


//Undo a scoop by clicking the left arrow
function keyPressed(){
  if(keyCode === LEFT_ARROW && order.length > 0){
    order.pop();
    orderString.pop();
    currProfit -= 2;
  }
}


// Display GAME OVER/Restart button when user's profit hits below 0
function reset(){
   if(checkRestart === true){
      fill("pink");
      textSize(60);
      stroke(227, 28, 121);
      rect(width/2-165, height/2-300, 400, 350, 10, 10, 10, 10);
      strokeWeight(3);
      text("GAME OVER", 617, 290);

      //Different displays depending on the reason for GAME OVER
      if(totalProfit < 0){
        textSize(20);
        text("Profit hit below zero!", 710, 330);
      }
      else if(time <= 0){
        textSize(20);
        text("Time has ran out!", 720, 330);
      }

      //Reports performance
      text("Profit: $" + totalProfit, 730, 380);
      text("Orders Completed: " + ordersMade, 730, 420);
      text("Grade Level: " + gradeLevel, 730, 460);
      textSize(20);
      fill(213, 134, 157);
      rect(723, 510, 150, 40, 4, 4, 4, 4);
      fill("pink");
      text("Click to Restart", 730, 535);
    }
}


// Controls state to activate the restart button, calculates grade level
function restart(){
  if(totalProfit < 0 || time === 0){
    if(ordersMade > 20) gradeLevel = "A";
    else if(ordersMade > 15) gradeLevel = "B";
    else if(ordersMade > 10) gradeLevel = "C";
    else if(ordersMade > 5) gradeLevel = "D";
    else if(ordersMade > 0) gradeLevel = "E";
    else if(ordersMade === 0) gradeLevel = "F";

    checkRestart = true;
  }
}


// Tests if each click region has been clicked
function mousePressed(){

  // Restart button
  if(inRectangle(mouseX, mouseY, 723, 510, 150, 40) && checkRestart === true){
    //Resets all values to its starting state
    order.length = 0;
    orderString.length = 0;
    correctOrder.length = 0;
    restartArray.length = 0;
    container = 0;
    currProfit = 0;
    totalProfit = 0;
    coneClick = 0;
    cupClick = 0;
    ordersMade = -1;
    maxTime = undefined;
    checkRestart = false;
  }

  // Add Mango flavor
  if(inQuad(verticesMango, mouseX, mouseY) && container !== 0 && checkRestart === false){
    order.push(mango);
    orderString.push("Mango Sorbet");
    currProfit += 2;
  }

  // Add bubblegum flavor
  if(inQuad(verticesBubble, mouseX, mouseY) && container !== 0 && checkRestart === false){
    order.push(bubblegum);
    orderString.push("Bubblegum");
    currProfit += 2;
  }
  
  // Add Butter Pecan flavor
  if(inQuad(verticesButter, mouseX, mouseY) && container !== 0 && checkRestart === false){
    order.push(butter);
    orderString.push("Butter Pecan");
    currProfit += 2;
  }

  // Add Cookies & cream flavor
  if(inQuad(verticesCookies, mouseX, mouseY) && container !== 0 && checkRestart === false){
    order.push(cookies);
    orderString.push("Cookies&Cream");
    currProfit += 2;
  }
  
  // Add mint chip flavor
  if(inQuad(verticesMint, mouseX, mouseY) && container !== 0 && checkRestart === false){
    order.push(mint);
    orderString.push("Mint Chip");
    currProfit += 2;
  }

  // Add strawberry flavor
  if(inQuad(verticesStraw, mouseX, mouseY) && container !== 0 && checkRestart === false){
    order.push(strawberry);
    orderString.push("Strawberry");
    currProfit += 2;
  }

  // Add chocolate flavor
  if(inQuad(verticesChoco, mouseX, mouseY) && container !== 0 && checkRestart === false){
    order.push(chocolate);
    orderString.push("Chocolate");
    currProfit += 2;
  }

  // Add Vanilla flavor
  if(inQuad(verticesV, mouseX, mouseY) && container !== 0 && checkRestart === false){
    order.push(vanilla);
    orderString.push("Vanilla");
    currProfit += 2;
  }

  // Done button to procede to next order if the user is correct
  if(checkOrder() && inRectangle(mouseX, mouseY, 493, 360, 100, 25) && checkRestart === false ){
    //Resets temporary variables (only holds informations for the current order)
    order.length = 0;
    orderString.length = 0;
    correctOrder.length = 0;
    container = 0;
    startTime = millis();
    totalProfit = totalProfit + currProfit;
    currProfit = 0;
    coneClick = 0;
    cupClick = 0;
    generateOrder();
    ordersMade += 1;
  }
  // If the user is wrong, -$50 from profit
  else if(inRectangle(mouseX, mouseY, 493, 360, 100, 25) && !checkOrder() && checkRestart === false){
    totalProfit -= 50;
  }

  // Adds a cone
  if(inQuad(vertices, mouseX, mouseY) && correctOrder[0] !== undefined && checkRestart === false){
    container = 1;
    orderString[0] = "cone";
    
    //logic to make sure the profit for cup and cone switches when changes and not
    //added on top of each other
    coneClick += 1;
    if(cupClick > 0){                  
      currProfit = currProfit + 1 - 0.5; 
    }
    else{
      currProfit += 1;
    } 
  }

  // Adds a cup
  if(inRectangle(mouseX, mouseY, width-90, height-300, 90, 200) && correctOrder[0] !== undefined && checkRestart === false){
    container = 2;
    orderString[0] = "cup";

    //logic to make sure the profit for cup and cone switches when changes and not
    //added on top of each other
    cupClick += 1;
    if(coneClick > 0){                    
      currProfit = currProfit + 0.5 - 1;  
      coneClick = 0;
    }
    else{
      currProfit += 0.5;
    }
  }
}