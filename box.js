class Box {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.25,
            'friction':0.8,
            'density':1.0,
            'isStatic': false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER)
          rect(0,0,this.width, this.height);
          pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.visiblity = this.visiblity - 5;
           tint(255,this.visiblity);
           image(this.image, this.body.position.x, this.body.position.y, 50, 50);
           pop();
         }
      }
}
  