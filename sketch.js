var car
var wall
var speed
var weight
var deformation


function setup() {
  createCanvas(1600,400);
  speed = random(55,70)
  weight = random(400,1500)

  car = createSprite(50,200,50,50)
  car.velocityX = speed
  car.shapeColor = "white"

  wall = createSprite(1500,200,60,200);
  wall.shapeColor = "white"


}

function draw() {
background(0)
if(car.isTouching(wall)){

  car.velocityX = 0
  deformation = (0.5*weight*speed*speed)/22500
if(deformation>180){
car.shapeColor = color(255, 0, 0)
}

if(deformation<180 && deformation>100){

car.shapeColor = color(230, 230, 0)

}


if(deformation<100){

  car.shapeColor = color(0, 255, 0)
  
  }




}


 
  drawSprites();
}