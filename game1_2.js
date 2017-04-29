//Changing the sprites' animations
//position and transformations: rotation, scale, mirror
//move the mouse and click
//press and hold the up and down keys

var frog;

function setup() {
  createCanvas(800,800);
  
  //create a sprite and add the 3 animations
  frog = createSprite(400, 150, 400, 400);
  
  //label, first frame, last frame
  //the addAnimation method returns the added animation
  //that can be store in a temporary variable to change parameters
  var myAnimation = frog.addAnimation("normal", "assets/frog01.png", "assets/frog12.png");
  //offX and offY is the distance of animation from the center of the sprite
  //in this case since the animations have different heights i want to adjust
  //the vertical offset to make the transition between floating and moving look better
  myAnimation.offY = 18;
  
  
}

function draw() {
  background(255,255,255);  
  

  
  //draw the sprite
  drawSprites();
}