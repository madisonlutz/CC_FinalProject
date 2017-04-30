// GAME 1 -- search and find the frog, click on the frog to bring up information about the frog


//virtual camera
//move the mouse around


var frame;
var leaves;
var frog;
var frogx;
var frogy;
var speech;
//var frogimg; //variable for frog image
//var frogani; //variable for the frog animation


function preload(){
 	frame = loadImage("assets/frame.png");
 	leaves = loadImage("assets/leavesbig.png");
    speech = loadImage("assets/frogbubble.png");
    //frogimg = loadImage("assets/frog01.png");
    //frogani = loadAnimation("assets/frog01.png", "assets/frog12.png");
}

function setup() {
  frogx = random(365, 1230); 
  frogy = random(253, 542);    
    
  createCanvas(1200,675);
 

//    frog = new Frog(); //create a new frog


  frog = createSprite(frogx, frogy, 400, 400);
  var frogani = frog.addAnimation('normal', "assets/frog01.png", "assets/frog12.png");
  frogani.offY = 18;
    
      
}

function draw() {
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





    
//frog.display();
    
camera.off(); //turn camera off so that the binoculars frame remains stationary
image(frame, 0, 0, 1200, 675);
    


////Future functionality/////
/* I want to make it so that whenever the user finds the frog and hovers over it 
there is a pop-up to give more information about the red-eyed tree frog.
*/
 
    

}//end draw loop


function info(){
    fill(255);
    image(speech, frogx-230, frogy-200);
     
        
}



