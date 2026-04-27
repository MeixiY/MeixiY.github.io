// Image Manipulation Exercise
// Meixi Yao
// April 24, 2026

let image1, image2, image3, image4;

function preload(){
  image1 = loadImage("assets/chip.jpg");
  image2 = loadImage("assets/race.jpg");
  image3 = loadImage("assets/nuit.jpg");
  image4 = loadImage("assets/hand.jpg");

 
}

function setup() {
  createCanvas(image1.width, image1.height);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  image(image1, 0, 0);
  //image(image2, 0, 0);
  //image(image3, 0, 0);
  //image(image4, 0, 0);

  loadPixels();
  setColor();
  //noGreen();
  //fiveColor(); 
  //grabHalf();
  updatePixels();
}


function setColor(){
    for(let x = 0; x < width; x++){
      for(let y = 0; y < height; y++){
        let i = ((y*width + x))*4;
        let r = pixels[i];
        let g = pixels[i+1];
        let b = pixels[i+2];

        if(r >= g && r >= b){
          pixels[i] = 255;
          pixels[i+1] = 0;
          pixels[i+2] = 0;
        }
        else if(g > r && g >= b){
          pixels[i] = 0;
          pixels[i+1] = 255;
          pixels[i+2] = 0;
        }
        else if(b > r && b > g){
          pixels[i] = 0;
          pixels[i+1] = 0;
          pixels[i+2] = 255;
        }
    }
  }
}


function noGreen(){
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let i = ((y*width + x))*4;
      if(x >= width/2){
        pixels[i+1] = 0;
      }
    }
  }
}


function fiveColor(){
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let i = ((y*width + x))*4;
      let r = pixels[i];
      let g = pixels[i+1];
      let b = pixels[i+2];
      let avg = (r+g+b)/3;

      if(avg >= 205 && avg <= 255){
        pixels[i] = 170;
        pixels[i+1] = 230;
        pixels[i+2] = 220;
      }

      if(avg >= 155 && avg <= 204){
        pixels[i] = 105;
        pixels[i+1] = 150;
        pixels[i+2] = 210;
      }

      if(avg >= 105 && avg <= 154){
        pixels[i] = 120;
        pixels[i+1] = 180;
        pixels[i+2] = 60;
      }

      if(avg >= 55 && avg <= 104){
        pixels[i] = 130;
        pixels[i+1] = 30;
        pixels[i+2] = 130;
      }

      if(avg >= 0 && avg <= 54){
        pixels[i] = 90;
        pixels[i+1] = 10;
        pixels[i+2] = 50;
      }
    }
  }
}


function grabHalf(){
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let i = ((y*width + x))*4;
      let r = pixels[i];
      let g = pixels[i+1];
      let b = pixels[i+2];

      if(x > width/2){
        let target = ((y*width + (width-1-x)))*4;
        pixels[target] = r;
        pixels[target+1] = g;
        pixels[target+2] = b;
      }
    }
  }
}