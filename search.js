// GAME 1 -- search and find the frog, click on the frog to bring up information about the frog


function search() {
  background(0,81,21); 
  
  
  camera.zoom = 1;
  
  //set the camera position to the mouse position
  camera.position.x = mouseX + 600; //by adding half of the width to the mouseX it keeps the camera focused on the leaves without going out of frame
  camera.position.y = mouseY + 300; //this is the same with mouseY except I added half of the height of the canvas
  

  
 //Right now I am having the issue of the camera not staying within the confines of the leaves in the background - FIXED 04/22/17
 //I fixed this issue by add half of the height and width of the canvas to the mouse position
    
 image(leaves, 0, 0);


    
 drawSprite(frog);
 info();

    
 camera.off(); //turn camera off so that the binoculars frame remains stationary
 image(frame, 0, 0, 1200, 675);

 drawSprite(exitpress);
    
if(scene==4); {
    exitpress.onMousePressed = function(){
        game2=false;
    }
}
   


}//end search loop


function info(){
    fill(255);
    image(speech, frogx-230, frogy-200); 
        
}



