// Nested Lops
// Meixi Yao
// March 6th


let bubbleSize = 30;
let bubbles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray();
}

function draw() {
  background(50);
  drawBubble();
  
}

function eDist(x1, y1, x2, y2){
  let a = x1-x2;  let b = y1-y2;
  let c = sqrt(pow(a,2) + pow(b,2));
  return c.toFixed(1); // keep one decimal place
}

function drawBubble(){
  // through through our arraw and display a bubble at each position
  // possible delete if mouse is close
  // loop by index because we want to be able to delete
  for(let i = 0; i<bubbles.length; i++){
    let b = bubbles[i];
    circle(b.x, b.y, bubbleSize);
    textAlign(CENTER, CENTER);
    text(eDist(b.x, b.y, mouseX, mouseY), b.x, b.y);
    // Where in the array is b?
    // check if we are overtop the current bubble and delete if so
    let d = eDist(b.x, b.y, mouseX, mouseY);
    if(d < bubbleSize/2){
      // to delete from array, use .splice()
      bubbles.splice(i,1);
    }
  }
}

function populateArray(){
  // Simple nested loop test to make ordered pairs
      
  for(let x = 0; x<+width; x+=bubbleSize){
    // x: 0, 30, 60
    for(let y = 0; y<=height; y+=bubbleSize){
      // y: 0, 30, 60
      let b = {x:x, y:y}
      bubbles.push(b);
    }
  }
}
