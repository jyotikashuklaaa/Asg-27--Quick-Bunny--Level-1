var player;
var target;
var edges;

function setup() {
createCanvas(600,700);

edges=createEdgeSprites();
player = createSprite(40,590,30,30); 
target = createSprite(560,40,30,30);
obs1 = createSprite(10,320,100,20);
obs1.velocityX = -5;
obs2 = createSprite(170,320,100,20);
obs2.velocityX = -5;
obs3 = createSprite(320,320,100,20);
obs3.velocityX = -5;
target.shapeColor = "white"
obs3.shapeColor = "yellow"
obs2.shapeColor = "blue"
obs1.shapeColor = "red"

obs4 = createSprite(10,120,100,20);
obs4.velocityX = -5;
obs5 = createSprite(170,120,100,20);
obs5.velocityX = -5;
obs6 = createSprite(320,120,100,20);
obs6.velocityX = -5;
obs6.shapeColor = "yellow"
obs5.shapeColor = "blue"
obs4.shapeColor = "red"
}

function draw() {
background("green");  

player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);
obs3.bounceOff(edges[1]);
obs3.bounceOff(edges[0]);

obs4.bounceOff(edges[1]);
obs4.bounceOff(edges[0]);
obs5.bounceOff(edges[1]);
obs5.bounceOff(edges[0]);
obs6.bounceOff(edges[1]);
obs6.bounceOff(edges[0]);

if(keyDown("up")){
  player.y=player.y-3;
}
if(keyDown("down")){
  player.y=player.y+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}
if(keyDown("right")){
  player.x=player.x+3;
}
if(player.isTouching(target)){
  text("YOU WIN",200,200);
}
if(player.isTouching(obs1)){
  obs1.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs2)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}

if(player.isTouching(obs3)){
  obs3.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs4)){
  obs4.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs5)){
  obs5.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs6)){
  obs6.velocityX=0;
  text("YOU LOSE",200,200);
}

  drawSprites();
}