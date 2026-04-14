// Working With Images
// Meixi Yao
// April 14th, 2026
//

let lionL, lionR;
let dir = "left";
let pinImages = [];
let current = 0;  //pinwheel current index

async function loadAssets(){
  //load lions
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  //pinwheel images
  
  for(let i = 0; i <=8; i++){
  pinImages.push(loadImage("assets/pin-0"+i+".png"))
  }
}


async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
  imageMode(CENTER); //center reference
}

function draw() {
  background(220);
  lion();
  pinwheel();
  
}

function pinwheel(){
  // ERROR - Cannot animate with a FOR loop
  //for(let i = 0; i <= 8; i++){
  //  image(pinImages[i], width/2, height*0.7)
  //}

  image(pinImages[current], width/2, height*0.7);
  //current++;
  //if(current > 7){
  //  current = 0;
  //}
  if(frameCount%3===0){
    current = (current + 1) % 9;
  }
}

function lion(){
  //update state variable based on movement
  if(movedX < 0){
    dir = "left";
  }
  else if(movedX > 0){
    dir = "right";
  }
  
  if(dir === "left"){
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }

  else{
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
  }
}