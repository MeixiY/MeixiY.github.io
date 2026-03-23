// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let items = [];
let provinces = new Map();
let currentProv = "SK"
let totalPrice

function setup() {
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  createCanvas(windowWidth, windowHeight);
  for(let i = 1; i < 21; i++){
    let info = {x: random(0, width), y:random(0, width),
      speedY: random(1,4), basePrice: random(10, 101), name: "Item 2"+ i
    }
    items.push(info);
  }

  provinces.set("SK", {tax: 1.11});
  provinces.set("AB", {tax: 1.05});
  provinces.set("ON", {tax: 1.13});
}

function draw() {
  background(220);
  
  let rules = provinces.get(currentProv);
  for(let i = 0; i < items.length; i++){
    items[i].y += items[i].speedY;
    if(items[i].y > height){
      items[i].y = 0
    }
    rect(items[i].x, items[i].y, 120, 60)
    text(items[i].name, items[i].x - 50, items[i].y)
    text("Total Price: " + "$" + (items[i].basePrice*rules.tax).toFixed(2), items[i].x - 50, items[i].y + 15)
  }
}

function keyPressed(){
  if(key === "1"){
    currentProv = "SK";
  }
  else if(key === "2"){
    currentProv = "AB";
  }
  else if(key === "3"){
    currentProv = "ON";
  }
}

