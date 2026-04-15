// 2D Array Basics
// Meixi Yao
// April 15, 2026

// 0 (Black)   255 (White)
// Grid is 6 x 5

let grid = [
  [ 0 ,  0 ,  0 , 255,  0 , 255],
  [255,  0 , 255,  0 , 255,  0 ],
  [ 0 ,  0 ,  0 ,  0 ,  0 , 255],
  [255, 255, 255, 255, 255,  0 ],
  [ 0 , 255,  0 ,  0 ,  0 , 255]
];

let rows = grid.length;
let cols = grid[0].length;
let tileSize = 60;


function setup() {
  createCanvas(cols*tileSize, rows*tileSize);
}

function draw() {
  background(220);
  renderGrid();
  textSize(20);
  fill(255, 0, 0);
  text(getCurrentX() + "," + getCurrentY(), mouseX, mouseY);
}

function flip(x, y){
  if(grid[y][x] === 0){
    grid[y][x] = 255;
  }
  else grid[y][x] = 0;
}

function mousePressed(){
  flip(getCurrentX(), getCurrentY());
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