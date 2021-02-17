class Raindrop{
    constructor(x,y){
        var properties={
            friction:0.1
        }
        this.body=Bodies.circle(x,y,5,properties);
        this.diameter=5;
        World.add(world,this.body);
    }
    updateY(){
        if(this.body.position.y>810){
            Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,600)});
        }
    }
    display(){
      var pos=this.body.position
      fill("blue")
      circle(pos.x,pos.y,this.diameter);
    }
}