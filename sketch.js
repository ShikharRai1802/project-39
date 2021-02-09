var tiger, tigerImage;
  var man, manImage;
  var farm, farmImage;
  var ground;

function preload(){
  
  tigerImage = loadImage("tiger.png");
  manImage = loadImage("man.png");
  farmImage = loadImage("farm.png");

}

function setup() {
  createCanvas(800,600);
  
  farm = createSprite(200,200,20,20);
  farm.addImage(farmImage);
  farm.velocityX = -7;
  farm.scale = 1;
  
  
  man = createSprite(90,260,50,50);
  man.addImage(manImage);
  man.scale = 0.09;
  
  ground = createSprite(200,332,4100,20);
  ground.velocityX = -7;
  ground.visible = false;
  
  tiger = createSprite(720,315,20,20);
  tiger.addImage(tigerImage);
  tiger.velocityX = -9;
  tiger.scale = 0.1;
  
}

function draw() {
  
  if(keyDown("space") && man.y<= 300) {
  man.velocityY = -12;
} 
  
  man.velocityY = man.velocityY + 1;
  
  if (ground.x < 0){
  ground.x = ground.width/2;
}
  
  if (farm.x < 0){
  farm.x = farm.width/2;
}
  
  if(man.isTouching(tiger)){  
  tiger.velocityX = 0;
  farm.velocityX = 0;
}
  man.setCollider("circle",0,0,400);
  //man.debug = true;
  
  tiger.setCollider("circle",0,0,200);
  //tiger.debug = true;
  
  
  man.collide(ground);
  
  spawntiger();
  drawSprites();
}

function spawntiger(){
  if (frameCount % 100 === 0) {
  tiger = createSprite(720,315,20,20);
  tiger.addImage(tigerImage);
  tiger.velocityX = -9;
  tiger.scale = 0.1;
  
  }
}



