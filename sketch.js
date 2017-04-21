//virtual camera
//move the mouse around


var bg;
var frame;
var leaves;
//the scene is twice the size of the canvas
var SCENE_W = 1600;
var SCENE_H = 800;




function preload(){
 	frame = loadImage("assets/frame.png");
 	leaves = loadImage("assets/leaves.png")

}

function setup() {
  createCanvas(800,400);
   

  
 
}

function draw() {
  background(0,81,21); 
  

  

  
  //a camera is created automatically at the beginning
  
  //.5 zoom is zooming out (50% of the normal size)
  if(mouseIsPressed)
    camera.zoom = .5;
  else
    camera.zoom = 1;
  
  //set the camera position to the mouse position
  camera.position.x = mouseX;
  camera.position.y = mouseY;
  

  
 //right now I am having the issue of the camera not staying within the confines of the leaves in the background
    
image(leaves, 0, 0);
  //I can turn on and off the camera at any point to restore
  //the normal drawing coordinates, the frame will be drawn at 
  //the absolute 0,0 (try to see what happens if you don't turn it off
  
    camera.off();

image(frame, 0, 0);
    
 

}