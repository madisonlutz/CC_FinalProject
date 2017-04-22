// GAME 1 -- search and find the frog, click on the frog to bring up information about the frog


//virtual camera
//move the mouse around

var bg;
var frame;
var leaves;


function preload(){
 	frame = loadImage("assets/frame.png");
 	leaves = loadImage("assets/leavesbig.png")
}

function setup() {
  createCanvas(1200,675);
 
}

function draw() {
  background(0,81,21); 
  
  
  //a camera is created automatically at the beginning
  
  //.5 zoom is zooming out (50% of the normal size)
  //if(mouseIsPressed)
  //  camera.zoom = .5;
  //else
    camera.zoom = 1;
  
  //set the camera position to the mouse position
  camera.position.x = mouseX + 600; //by adding half of the width to the mouseX it keeps the camera focused on the leaves without going out of frame
  camera.position.y = mouseY + 300; //this is the same with mouseY except I added half of the height of the canvas
  

  
 //Right now I am having the issue of the camera not staying within the confines of the leaves in the background - FIXED
 //I fixed this issue by add half of the height and width of the canvas to the mouse position
    
image(leaves, 0, 0);
  //I can turn on and off the camera at any point to restore
  //the normal drawing coordinates, the frame will be drawn at 
  //the absolute 0,0 (try to see what happens if you don't turn it off
  
    camera.off();

image(frame, 0, 0, 1200, 675);
    
 

}