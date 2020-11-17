var fixedRect, movingRect; 

function setup() { 
  createCanvas(1200,800); 
  fixedRect =  createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green"; 
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green"; 
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
} 

function draw() {
  background("black");
  if (isTouching(movingRect,fixedRect) ){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
 bounceOff(movingRect,fixedRect);
 
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  drawSprites();


}



