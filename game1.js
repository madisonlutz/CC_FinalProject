// GAME 1 -- search and find the frog, click on the frog to bring up information about the frog


//virtual camera
//move the mouse around


var frame;
var leaves;
var frog;
//var frogimg;


function preload(){
 	frame = loadImage("assets/frame.png");
 	leaves = loadImage("assets/leavesbig.png");
    //frogimg = loadImage("assets/frog01.png");
    frogani = loadAnimation("assets/frog01.png", "assets/frog12.png");
}

function setup() {
  createCanvas(1200,675);
 

    frog = new Frog(); //create a new frog


/* P5.play failed to work for me, I have not figured out why yet.
  frog = createSprite(500, 500);
  frog.addAnimation("normal", "assets/frog01.png",  "assets/frog02.png");
*/
    
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

//Play Frog -- I tried using the play library to have the frog as a sprite but it wouldn't load
    
//drawSprites();
    
    
/*Vector frog -- I want to have it so that when you hover over the frog something happen. I was testing it out but I couldn't get it
to work yet */


/*
    if ((mouseX > frog.position.x || mouseX < frog.position.x + 100) && (mouseY > frog.position.y || mouseY < frog.position.y + 100)) {
        frog.display(0); //display the frog
    }

        else {
            frog.display(255);
        }
    
*/
    
frog.display();
    
camera.off(); //turn camera off so that the binoculars frame remains stationary
image(frame, 0, 0, 1200, 675);


    
 

}


function Frog (){
    
    this.position = new createVector (random(365, 1230), random(253, 542)); //create vector to store the position of the frog
    
    this.display = function (){
     animation(frogani, this.position.x, this.position.y, 50, 50); //show the frog drawing somewhere on within the leaves
    }
    
    
        
}