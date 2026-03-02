// Object Notation, Noise Recap
// Meixi Yao
// March 2, 2025


// GLobal Variables Section
let ball, ball2; //objects can't be created before set up


function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = { // Object notation. Inside the brackets set up a bunch of property, value pairs
    x: 300, y: 400, size: 20, c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100), timeOff: 0.08}
    
  ball2 = { x: 150, y: 670, size: 40, c: color(random(255), random(255), random(255)),
    timeX: random(100), timeY: random(100), timeOff: 0.08}
}

function moveBall(b){
  // b -> ball type object
  // update the position and draw the ball

  // Generate how to change x and y positions (noise)
  let dx = noise(b.timeX); //0-1
  dx = map(dx, 0, 1, -5, 5); // dx: -5 to 5
  let dy = noise(b.timeY); //0-1
  dy = map(dy, 0, 1, -5, 5); // dy: -5 to 5

  // Advance our noise graph "cursors"
  b.timeX += b.timeOff; b.timeY += b.timeOff;

  // Update the position
  b.x += dx; b.y += dy;

  // Corrections(wrap around)
  if(b.x < 0) b.x = width;
  else if(b.x > width) b.x = 0;

  if(b.y < 0) b.y = height;
  else if(b.y > height) b.y = 0;

  // Render the circles
  fill(b.c);
  circle(b.x, b.y, b.size);

}


function draw() {
  //background(220);
  moveBall(ball);
  moveBall(ball2);
}
