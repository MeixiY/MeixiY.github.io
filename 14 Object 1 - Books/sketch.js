// Object 1 - Books
// Meixi Yao
// March 24, 2026
//

// Global Variable
let myBook; // CAN'T INIT OBJECTS HERE


function setup() {
  createCanvas(windowWidth, windowHeight);

  //create a single book
  myBook = new Book("CS30 Textbook", "Mr. Scott", 1234567891011,
    "leatherbound", 500, width*0.3);

  secondBook = new Book("Textbook", "Mr. Scott", 1234567891011,
    "softcover", 200, width*0.7);

  thirdBook = new Book("Funbook", "Mr. Scott", 1234567891011,
    "hardcover", 300, width*0.5);
}

function draw() {
  background(220);
  myBook.display();
  secondBook.display();
  thirdBook.display();
}

class Book{
  // 1. Constructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }

  // 2. Class Methods
  //    since we're in a class, we omit function keyword
  display(){
    //render our book object on Canvas
    rectMode(CENTER); textAlign(CENTER, CENTER);
    textSize(20);

    //set fill color based on covertype
    switch(this.cover){
      case "softcover":
        fill("lightblue"); break;

      case "hardcover":
        fill("pink"); break;

      case "leatherbound":
        fill("yellow"); break;
    }

    //now draw the book
    push();
    translate(this.x, height/2);
    rect(0, 0, this.pages/10, 150);
    fill(0);
    text(this.title[0], 0, -50);
    pop();
  }
}