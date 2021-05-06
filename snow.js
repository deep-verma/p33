class Snow {
    constructor(x, y, width, height) {
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.width = width;
        this.height = height;
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("snow3.webp");
   
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        //rectMode(CENTER);
       /* strokeWeight(10);
        stroke("red");
        fill("pink");*/
        imageMode(CENTER);
        image(this.image, 0,0, this.width, this.height);
       // ellipseMode(CENTER);
       // ellipse(0,0,this.width,this.height);
        pop();
      }
}