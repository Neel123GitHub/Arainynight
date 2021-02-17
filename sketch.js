const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy,boy_walking,rain=[],maxdrops=70,thunderimg1,thunderimg2,thunderimg3,thunder1,thunder2,thunder3,thun1G,thun2G,thun3G;
function preload(){
    boy_walking=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    thunderimg1=loadImage("2.png");
    thunderimg2=loadImage("3.png");
    thunderimg3=loadImage("4.png");
}

function setup(){
   createCanvas(600,800)
   engine = Engine.create();
   world = engine.world;
   thun1G=new Group();
   thun2G=new Group();
   thun3G=new Group();
   boy=createSprite(200,590,20,20);
   boy.addAnimation("walking",boy_walking);
   boy.scale=0.5
  if(frameCount%150===0){
    for(var i=0;i<maxdrops;i++){
        rain.push(new Raindrop(random(0,600),random(-30,600)));
    }
  }
    
}

function draw(){
    background(0);
    Engine.update(engine);
    drawSprites();

    if(frameCount%165===0){
        thunder1=createSprite(random(0,570),random(0,50),20,20);
        thunder1.addImage("thun",thunderimg1);
        thun1G.add(thunder1);
        thunder1.scale=0.5;
    }
    if(frameCount%395===0){
        thunder2=createSprite(random(0,570),random(0,50),20,20);
        thunder2.addImage("thund",thunderimg2);
        thun2G.add(thunder2);
        thunder2.scale=0.5;
    }
    if(frameCount%525===0){
        thunder3=createSprite(random(0,570),random(0,50),20,20);
        thunder3.addImage("thunde",thunderimg3);
        thun3G.add(thunder3);
        thunder3.scale=0.5;
    }

    if(frameCount%175===0){
        thun1G.destroyEach();
    }

    if(frameCount%405===0){
        thun2G.destroyEach();
    }

    if(frameCount%535===0){
        thun3G.destroyEach();
    }

    for(var i = 0; i<maxdrops; i++){
        rain[i].display();
        rain[i].updateY()
        
    }
}   

