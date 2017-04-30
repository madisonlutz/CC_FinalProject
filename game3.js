// GAME 3 -- MACAW EATING HABITS

//This game is inspired by this p5.play example
//http://p5play.molleindustria.org/examples/index.html?fileName=collisions2.js#

//The user will control a macaw and have to collect the various foods that macaws eat
//after 'eating' the different foods, a pop-up will give more information about that
//specific food in relation to the macaw's diet

//I am still having issues with sprites within p5.play but I have made arrangements for 
//Kelly to help me with this during Tuesday's 



var collectibles;
//var seeds;
//var nuts;
var bugs;
var macaw;
var acai;
var foodcount;
var canopy;
var seed;

function preload(){
    acai = loadImage("assets/fruit.png");
    worm = loadImage ("assets/worm.png");
    canopy = loadImage("assets/canopy.png");
    seed = loadImage ("assets/seeds.png");
    
}

function setup() {
  createCanvas(1200,675); 
  foodcount = 10;
  //create a user controlled sprite
  macaw = createSprite(400, 400);
  macaw.addAnimation("flying", "assets/macaw01.png", "assets/macaw06.png");
  
  
  collectibles = new Group();
  bugs = new Group();  

  
  for(var i=0; i<5; i++)
    {
    var worms = createSprite(random(0, width), random(0,height));
    worms.addImage(worm);
    bugs.add(worms);
    
    }
    
  for(var i=0; i<10; i++)
    {
    var berries = createSprite(random(0, width), random(0,height));
    berries.addImage(acai);
    var seeds = createSprite(random(0, width), random(0,height));
    seeds.addImage(seed);
    collectibles.add(seeds);
    collectibles.add(berries);
    
    }

  
  
   
}//setup end



function draw() {
  background(canopy);  
  
 macaw.velocity.x = (mouseX-macaw.position.x)/10;
 macaw.velocity.y = (mouseY-macaw.position.y)/10; 
    
    //if mouse is to the left
  if(mouseX < macaw.position.x - 10) {
    //flip horizontally
    macaw.mirrorX(-1);
    //negative x velocity: move left
    
  }
  else if(mouseX > macaw.position.x + 10) {
    //unflip 
    macaw.mirrorX(1);
    
  }


  

  //asterisk collides against all the sprites in the group bugs
  macaw.displace(bugs);
  macaw.overlap(collectibles, collect);


  
  drawSprites();
  console.log(foodcount);
}

//the first parameter will be the sprite (individual or from a group) 
//calling the function
//the second parameter will be the sprite (individual or from a group)
//against which the overlap, collide, bounce, or displace is checked
function collect(collector, collected)
{
  collected.remove();
  foodcount -= 1;
}

