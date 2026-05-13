//child class #2 - Line
class LineObject extends AnimatedObject{
    constructor(){
        super(random(width), random(height));
    }

    move(){ //Combo override, but build on parent
        super.move(); //run the parent's move()
        this.x -= 5;
        if(this.x < 0) this.x = width;

    }

    display(){  //full override (no reference to parent)
        if(mouseIsPressed){
            strokeWeight(12);
        }
        else strokeWeight(2);

        line(this.x, this.y, this.x + 15, this.y);

    }
}