var car;
var wall;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50,150,20,20);

  wall = createSprite(1000,150,20,50);
  
  wall.shapeColor = "black";
  
  speed = random(55,90);
  weight = random(100,400);
}
  
  function draw() {
  background("brown");

 car.velocityX = speed;
  damage();
  drawSprites();
}

function damage(){
  if(wall.x - car.x < (wall.width/2 + car.width/2)){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500 ; 
   
    if(deformation < 100 ){
      car.shapeColor = "green";
    }
    if(deformation > 180){
      car.shapeColor = "red";
    }
    if(deformation > 100 && deformation < 180){
      car.shapeColor = "orange";
    }
   }
}