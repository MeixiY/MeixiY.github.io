// Project Title
// Your Name
// Date
//
// Global Variable Section
let textShade = 255;
let textScale = 40;
let bgcolor = "grey";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function displayMouse(){
  // this function will report some system variables related to mouse onto the screen via text
 
  // mouseX, mouseY - store current mouse pos
  // mouseIsPressed - boolean: is button pressed?
  //     good for mouseHELD events

  // Try using mouseIsPressed to change size
  // Because draw() runs 60 times/s, usually mousIsPressed will be checked 1-10 times per click event

  if(mouseIsPressed){
    textScale = int(random(10,100)); // Random between 10 and 99
  }
 
  textSize(textScale);
  fill(textShade);
  text(mouseX + ", " + mouseY + ", " + mouseIsPressed + ", " + mouseButton, mouseX, mouseY);
}

function mousePressed(){
  textShade = int(random(0, 255));

}

function displayKeyboard(){
  // We'll use this function to inspect some of p5's keybpard capabilities
  // keyIsPressed - is a keyboard button pressed?
  // key - last pressed key
  // keyCode - last pressed coded key
  
  if(keyIsPressed){
    // something was pressed. Next, check which key/keycode
    if(key === " "){
      bgcolor = color(random(255), random(255), random(255));

    }
  }
  textSize(30);
  textAlign(CENTER, CENTER);
  let t = keyIsPressed + ", " + key + ", " + keyCode;
  text(t, width/2, height/2);
}

function keyPressed(){
  // Called automatically ONCE per keyboard event
  if(keyCode === 65){
    bgcolour = color(random(255), random(255), random(255))
  }
}
function draw() {
  // Keeping draw() tidy
  background(220);
  //displayMouse();
  displayKeyboard();
}
