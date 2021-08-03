var ship, shipAnim;
var sea, seaImg;
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

  ship = createSprite(80, 167, 30, 30);
  ship.addAnimation("ships", shipAnim);
  ship.scale = 0.2;
}

function draw(){
  background("white");

  if(sea.x<=-200){
    sea.x = sea.width / 7.80;
  }

  drawSprites();
}
