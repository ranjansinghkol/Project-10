var ship, shipAnim;
var sea, sea2, seaImg;
function preload(){
  shipAnim = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400, 400);
  
  sea = createSprite(417, 167, 834, 400);
  sea.addImage(seaImg);
  sea.scale = 0.255;
  sea.velocityX = -2;
  sea2 = createSprite(1668, 167, 834, 400);
  sea2.addImage(seaImg);
  sea2.scale = 0.255;
  sea2.velocityX = -2;

  ship = createSprite(80, 167, 30, 30);
  ship.addAnimation("ships", shipAnim);
  ship.scale = 0.2;
}

function draw(){
  background("white");

  if(sea2.x<=-200){
    sea.x = sea.width / 7.80;
    sea2.x = sea2.width / 7.80;
  }

  drawSprites();
}