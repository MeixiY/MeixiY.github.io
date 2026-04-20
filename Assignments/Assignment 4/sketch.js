// 2D Array Basics
// Meixi Yao
// April 15, 2026

// 0 (Black)   255 (White)
// Grid is 6 x 5

// base array
let grid = [
  [ 0 ,  0 ,  0 , 255,  0 , 255],
  [255,  0 , 255,  0 , 255,  0 ],
  [ 0 ,  0 ,  0 ,  0 ,  0 , 255],
  [255, 255, 255, 255, 255,  0 ],
  [ 0 , 255,  0 ,  0 ,  0 , 255]
];

//globals
let blackWhite = []
let rows = grid.length;
let cols = grid[0].length;
let tileSize = 60;
let tileType = 0;


function setup() {
  createCanvas(cols*tileSize, rows*tileSize);
  randomStart();
}

function draw() {
  background(220);
  renderGrid();
  gameWin();
  hover();
}


//flip the tile colors
function flip(x, y){
  if(grid[y][x] === 0){    // if black, flip to white
    grid[y][x] = 255;
  }
  else grid[y][x] = 0;   // vise versa
}


//flip when mouse clicked
function mousePressed(){
  // only do a flip if mouse is on the canvas
  if(mouseX < width && mouseY < height){

    let x = getCurrentX();
    let y = getCurrentY();

    // Flip one if shift is down
    if(keyIsDown(SHIFT)){
      flip(x,y);
    }

    // Flip square shape or flip cross shape
    else if(tileType === 1){ //square shape
      flip(x,y);

      //If these exist, flip
      if(x+1 < cols) flip(x+1, y);
      if(y+1 < rows) flip(x, y+1);
      if(x+1 < cols && y+1 < rows) flip(x+1, y+1);
    }
    else{ //cross shape
      //ALWAYS:
      flip(x,y);

    //IF THESE EXIST:
    // Flip the cardinal
      if(x-1 >= 0) flip(x-1, y);
      if(y-1 >= 0) flip(x, y-1);
      if(x+1 < cols) flip(x+1, y);
      if(y+1 < rows) flip(x, y+1);
    }
  }

}

// If space is pressed, switched between two shapes
function keyPressed(){
  if(keyCode === 32){
    tileType++;
    if(tileType > 1){    // 1 = square, 0 = cross
      tileType = 0;
    }
  }
}

function renderGrid(){
  // Interpret the data stored in 2D array (grid) and draw a matrix of squares to refelt it
  for(let y = 0; y < rows; y++){    // y: 0 1 2 3 4...
    for(let x = 0; x < cols; x++){  // x: 0 1 2 3 4...
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*tileSize, y*tileSize, tileSize);
    }
  }
}

function getCurrentX(){
  // Determine the current col position of mouse
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX/tileSize);
}

function getCurrentY(){
  // Determine the current col position of mouse
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY/tileSize);
}


// check if grid is fully black or white
function gameWin(){
  blackWhite = []; //new array to store all values of 2D array
  for(let g = 0; g < grid.length; g++){
    for(let i = 0; i < grid[0].length; i++){
      blackWhite.push(grid[g][i]);
    }
  }

  // if all past the test, display winning message
  if(blackWhite.every(checkTileBlack) === true || blackWhite.every(checkTileWhite) === true){
    stroke(3);
    fill("red");
    textSize(25);
    text("YOU WIN", width/2 -50, height/2);
  }
}

// tests for gameWin()
function checkTileBlack(num){
  return num === 0; // all black
}

function checkTileWhite(num){
  return num === 255;  // all white
}


// Generate random grid
function randomStart(){
  let num = [0, 255]; // randomly choose between 0 and 255
  for(let g = 0; g < grid.length; g++){
    for(let i = 0; i < grid[0].length; i++){
      grid[g][i] = random(num);  
    }
  }
}


// show the area affected by a click
function hover(){
  let x = getCurrentX();
  let y = getCurrentY();
  let c = color(180, 255, 180); 
  
  c.setAlpha(150);
  fill(c);
  square(x*tileSize, y*tileSize, tileSize);  // draw square instead of flip

  // follows same pattern/logic as the flip
  if(keyIsDown(SHIFT)){
    square(x*tileSize, y*tileSize, tileSize);
    }
   else if(tileType === 1){
      square(x*tileSize, y*tileSize, tileSize);

      if(x+1 <cols) square((x+1)*tileSize, y*tileSize, tileSize);
      if(y+1 < rows) square(x*tileSize, (y+1)*tileSize, tileSize);;
      if(x+1 < cols && y+1 < rows) square((x+1)*tileSize, (y+1)*tileSize, tileSize);;
    }
  else{
    //ALWAYS:
    square(x*tileSize, y*tileSize, tileSize);

    //IF THE SQAURE EXIST:
    if(x-1 >= 0) square((x-1)*tileSize, y*tileSize, tileSize);
    if(y-1 >= 0) square(x*tileSize, (y-1)*tileSize, tileSize);
    if(x+1 < cols) square((x+1)*tileSize, y*tileSize, tileSize);
    if(y+1 < rows) square(x*tileSize, (y+1)*tileSize, tileSize);
    }

}