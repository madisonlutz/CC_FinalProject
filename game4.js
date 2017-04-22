// GAME 4 -- Decay Rates 

//set the initial modes to false showing that nothing has been
//selected yet
var canopymode = false;
var forestmode = false;

function setup() { 
  createCanvas(640, 360);
} 

function draw() { 
  background(255); //background is white
  board (0, 0); // create the blue back board set up

  
  if (mouseIsPressed && mouseX<265 && mouseX>116 && mouseY<139 && mouseY>97) {
    canopymode = true; //canopy button has been selected
    forestmode = false;
  }
  
  if (mouseIsPressed && mouseX<265 && mouseX>116 && mouseY<262 && mouseY>212) {
    forestmode = true; //forest button has been selected
    canopymode = false;
    
  }
  
  //decay values takes from a study that can be found here:
  //http://onlinelibrary.wiley.com/store/10.1111/j.1744-7429.2009.00590.x/asset/j.1744-7429.2009.00590.x.pdf;jsessionid=D334DD3131489A77DAAA21F8B528B0B5.f03t02?v=1&t=j1s966ye&s=b9baadfd7fca4131b2cc9de7334b594d7efdc154
  
  
  if (canopymode == true) {
    canopy (0, 0, color(66, 244, 86)); //set the background of the canopy button to green 
    textSize(30);
    text ('40% Decayed', 340, 210); //display how much as decayed
  }
  
  if (canopymode == false) {
    canopy (0, 0, 255); //keep the other one white
  }
  
  if (forestmode == true) {
    forest (0, 0, color(66, 244, 86)); //set the background of the button to green
    textSize(30);
    text ('98% Decayed', 340, 210); //display decay amount 
  }
  
  if (forestmode == false) {
    forest (0, 0, 255);
  }
  
  console.log(mouseX, mouseY);
}

function board (x, y){
  rectMode (CENTER);
  strokeWeight (3);
  
  //main board
  fill('blue');
  rect (width/2 + x, height/2 +y, 500, 300);
  
  strokeWeight (1);
	//output display box
  fill(255);
  rect (430 + x, 200 + y, 200, 87);
  
  textSize(20);
  fill(255);
  text ('Decay After 300 Days', 330 + x, 124 + y);
  
}

function forest (x, y, c){
  rectMode(CENTER);
  
  //Forest Floor Button
  fill(c);
  rect(190+x, 235+y, 150, 50);
  fill (0);
  textSize(20);
  text ('Forest Floor', 138+x, 240+y);
  
  
}

function canopy (x, y, c){
  rectMode(CENTER);
	
  //Canopy button
  fill(c);
  rect(190+x, 120+y, 150, 50);
  fill(0);
  textSize(20);
  text ('Canopy', 151+x, 125+y);
  
}

