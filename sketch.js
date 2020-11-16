var fixedRect, movingRect; 

function setup() { 
  createCanvas(800,400); 
  fixedRect = createSprite(600,400,50,80); 
  fixedRect.shapeColor = "green"; 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green"; 
} 

function draw() {
  background(255,255,255);
  console.log("Distance 1 : ",fixedRect.x-movingRect.x," Distance 2 : ",fixedRect.width/2+movingRect.width/2);
  console.log("Distance 5 : ",fixedRect.y-movingRect.y," Distance 6 : ",fixedRect.width/2+movingRect.width/2);
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 && 
    movingRect.y-fixedRect.y < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y-movingRect.y < fixedRect.width/2+movingRect.width/2 ){ 
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } 
  else{
    fixedRect.shapeColor = "green"; 
    movingRect.shapeColor = "green"; 
  }
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  drawSprites();


}