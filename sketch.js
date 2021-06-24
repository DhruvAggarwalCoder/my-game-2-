

var dragon,dragon1,dragon2, dragonImage,dragonImage1;
var rocket , rocketImage,backgroundImg,bkground,fireball,fireballImage;
var bullet,bulletImage;
function preload(){
 
 dragonImage = loadImage("images/dragon.png");
 rocketImage = loadImage("images/rocket.png");
 backgroundImg = loadImage("images/background.png");
 fireballImage = loadImage("images/fireball.png");
 bulletImage = loadImage("images/bullet.png")
}

function setup() {
  createCanvas(displayWidth, displayHeight-100);

  bkground = createSprite(0,0,displayWidth,displayHeight);
  bkground.addImage("background",backgroundImg);
  bkground.velocityY = -1;
  bkground.y = displayHeight/2;
  bkground.scale = 10;

  dragon = createSprite(displayWidth/2+30,20,50);
  dragon.addImage("dragon",dragonImage);
  dragon.scale=0.5;
  dragon.velocityY = 0.1;
                                         
  dragon1 = createSprite(displayWidth/2+-70,20,50);
  dragon1.addImage("dragon1",dragonImage);
  dragon1.scale=0.5;
  dragon1.velocityY = 0.1;

  dragon2 = createSprite(displayWidth/2+130,20,50);
  dragon2.addImage("dragon2",dragonImage);
  dragon2.scale=0.5;
  dragon2.velocityY = 0.1;

  rocket = createSprite(displayWidth/2 , displayHeight-200 , 100 , 200);
  rocket.addImage("rocket", rocketImage);
  rocket.scale=0.5;
  rocket.velocityY = 0.1;
  
  bullet = createSprite(displayWidth/2 , displayHeight-200);
  bullet.visible = false;
  bullet.addImage("bullet",bulletImage);
}

function draw() {
  background(0);
   if (bkground.y<=300){
    bkground.y = displayHeight/2;
   }

   if(keyDown("space")){
    bullet.visible = true;
    bullet.x = rocket.x;
    bullet.y = rocket.y;
    bullet.velocityY = -1;
    bullet.scale = 0.1;
    
   }
  spawnFireballs();
   
  drawSprites();
}

function spawnFireballs(){
  if (frameCount%60===0){
    fireball = createSprite(Math.round(random(displayWidth/2-70,displayWidth/2+130)),50);
    fireball.addImage ("fireball",fireballImage)
    fireball.scale = 0.2;
    fireball.velocityY = 2;
  }
}

function spawnBullets(){
  if (frameCount%60===0){
    //bullets = createSprite(Math.round(random(displayWidth/2-70,displayWidth/2+130)),50);
    fireballs.addImage ("fireball",fireballImage)
    fireballs.scale = 0.2;
    fireballs.velocityY = 2;
  }
}


