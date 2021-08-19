const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var heartImg,heart1,heart2,heart3;

var ground,platform;
var cat;

var fish1,fish2,fish3,fish4;
var slingshot;
var dragged = false;

var score = 0;

var gameState = "start";



function preload(){
  bg1 = loadImage("images/underwater.png");
  start = loadImage("images/start.png");
  bg2 = loadImage("images/background.jpg");
  heartImg = loadImage("images/life.png");

}




function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  playButton = createSprite(600,300,100,50);
  playButton.addImage(start);
  playButton.scale = 0.3
  playButton.visible = false;

  ground = new Ground(600,height-1,1200,10);
  platform = new Ground(100,300,300,100);

  cat = new Cat(200,60);

  slingshot = new Slingshot(cat.body,{x : 200, y : 60 });

  fish1 = new Fish(300,380,0)
  fish2 = new Fish(400,380,-20)
  fish3 = new Fish(600,380,-20)
  fish4 = new Fish(800,380,-30)

 /* heart1 = createSprite(30,20,20,20);
  heart1.addImage(heartImg);
  heart1.scale = 0*/



}

function draw() {
  background(bg1); 

  Engine.update(engine);


  if(gameState === "start"){
    push()
    textSize(45);
    fill("green");
    strokeWeight("10")
    textFont("forte") 
    text("Welcome to FISH HUNT",400,50);
    pop();
 
    push()
    textSize(25);
    fill("red");
    textFont("kristen itc");
    text("There is  a cat named Rio and he is very hungry.",100,100);
    text("After a long search he finds a pond in which there were many fishes.",100,140);
    text("He thinks that he’ll take the help of a catapult to eat the fishes ",100,180);
    text("But if he fails to eat the fish his one of his lives will be reduced!!! &" ,100,220);
    text("he will get less chances to satisfy his hunger" ,100,260);
    pop();

    playButton.visible = true;

    if(mousePressedOver(playButton)){
      gameState = "play";
      
    }
      
  }

  if (gameState === "play"){
      background(bg2)
      playButton.visible = false;

      textSize(30);
      fill("black");
      text("Score " + score,width-250, 50);


      ground.display();
      platform.display();


      cat.display();
      slingshot.display();


      fish1.display();
      Matter.Body.setVelocity(fish1.body,{x:1.9 , y:0})

      fish2.display();
      Matter.Body.setVelocity(fish2.body,{x:1.9 , y:0})

      fish3.display();
      Matter.Body.setVelocity(fish3.body,{x:1.9 , y:0})

      fish4.display();
      Matter.Body.setVelocity(fish4.body,{x:1.9 , y:0})

      if(fish1.body.position.x > 1200){
          Matter.Body.setPosition(fish1.body,{x:300,y:380})

      }

      if(fish2.body.position.x > 1200){
        Matter.Body.setPosition(fish2.body,{x:300,y:380})

    }

    if(fish3.body.position.x > 1200){
      Matter.Body.setPosition(fish3.body,{x:300,y:380})

  }

  if(fish4.body.position.x > 1200){
    Matter.Body.setPosition(fish4.body,{x:300,y:380})

}

      
  }




  drawSprites();
}

function mouseDragged(){
    if(gameState === "play"){
      Matter.Body.setPosition(cat.body,{x : mouseX, y : mouseY})
      dragged = true;
    }
}

function mouseReleased(){
  if(gameState === "play" && dragged === true){
    slingshot.fly();
  }
  
  
  

  }
