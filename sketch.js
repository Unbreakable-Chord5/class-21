var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(200,200,40,40);
  car.shapeColor = "blue";
  wall = createSprite(800,200,80,100);
  wall.shapeColor = "brown";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(car,wall)){
  car.shapeColor = "brown";
}
  drawSprites();
}
function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < fobj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
 return true;
}
else {
 return false;
}
}

funtion bounceOff(obj1,obj2){
  if (obj1.x - obj2.x < fobj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2){
    obj1.velocityX = obj1.velocityX*(-1);
    obj2.velocityX = obj2.velocityX*(-1);
    }
    if( obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
        obj1.velocityY = obj1.velocityY*(-1);
        obj2.velocityY = obj2.velocityY*(-1);
      }
}
