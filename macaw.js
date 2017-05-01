// GAME 3 -- MACAW EATING HABITS

//This game is inspired by this p5.play example
//http://p5play.molleindustria.org/examples/index.html?fileName=collisions2.js#

//The user will control a macaw and have to collect the various foods that macaws eat
//after 'eating' the different foods, a pop-up will give more information about that
//specific food in relation to the macaw's diet


function birdfly() {
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


  drawSprites(bugs);
  drawSprites(collectibles);
  drawSprite(macaw);
  console.log(foodcount);
    
    if (foodcount == 0){
        scene = 6;
    }
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

