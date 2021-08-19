class Fish{
    constructor(x,y,fishPos){
        var options ={
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.fishPos = fishPos;
        this.image = loadImage("images/fish2.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       imageMode(CENTER);
       image(this.image,0,this.fishPos,this.width,this.height);
       pop();
        
    }
    
}