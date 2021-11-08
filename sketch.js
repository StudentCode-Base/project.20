var  bath;
var  brush;
var eating;
var drink;
var gym;
var move;
var sleep, astronaut;
var BG;

function preload(){
  BG= loadImage("iss.png")
  brush = loadAnimation("brush.png")
  bath=loadAnimation("bath1.png","bath2.png")
  eating = loadAnimation("eat1.png","eat2.png")
  drink = loadAnimation("drink1.png","drink2.png")
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  move = loadAnimation("move.png","move.png","move1.png","move1.png",)
  sleep = loadAnimation("sleep.png")
}

function setup() {
  createCanvas(800,400);
 
  astronaut = createSprite(400,200)
  astronaut.scale = 0.1
  astronaut.addAnimation("sleep",sleep)
}



function draw() {
  background(BG);
 
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");

  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");

  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eating);
    astronaut.changeAnimation("eating");

  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");

  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX=1
  }
  drawSprites();
}