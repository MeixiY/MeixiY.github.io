// Find the Smallest Circle
// Meixi
// March 5th, 2026


let NUM_CIRCLES = 10;
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeCircles();
}

function makeCircles(){
  let count = 0;
  while(count < NUM_CIRCLES){
    let x_ = random(0, width);
    let y_ = random(0, height);
    let s_ = random(10, 150);
    let c = {x:x_, y:y_, s:s_};
    circles.push(c);
    count++
  }

}

function renderCircles(){
  let smallest = Infinity;
  let smallestY = circles[0].y;
  for (let c of circles){
    circle(c.x, c.y, c.s);
    // check if it is the smallest
    if(c.s < smallest){
      smallest = c.s;
      smallestY = c.y;
    }
  }
  fill(0);
  stroke(0, 255, 255); strokeWeight(5);
  line(0, smallestY, width, smallestY);
  text(smallest, width/2, height/2);
  stroke(0); strokeWeight(1);
}

function draw() {
  background(220);
  renderCircles()
}
