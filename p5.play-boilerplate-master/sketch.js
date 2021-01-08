var fixedRect, movingRect
function setup() {
  createCanvas(800,400);
  

 fixedRect = createSprite(200,200,50,50);
fixedRect.shapeColor = "green"
 movingRect = createSprite(400,200,80,50);
 movingRect.shapeColor = 'blue'

movingRect.velocityX = -3
fixedRect.velocityX = +3
}

function draw() {
  background(255,255,255);  



//movingRect.x = mouseX;
//movingRect.y = mouseY;

if(movingRect.x-fixedRect.x < (movingRect.width + fixedRect.width)/2 && fixedRect.x-movingRect.x < (fixedRect.width + movingRect.width)/2)
 {

  fixedRect.shapeColor = "red"
  movingRect.shapeColor = "red"

movingRect.velocityX = movingRect.velocityX * (-1);  
fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if(movingRect.y-fixedRect.y <(movingRect.height + fixedRect.height)/2 && fixedRect.y-movingRect.y < (fixedRect.height + movingRect.height)/2){

  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);

}
//else{
  //fixedRect.shapeColor = "green"
  //movingRect.shapeColor = "blue"
//}





console.log(movingRect.x)
  drawSprites();
}