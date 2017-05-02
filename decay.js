// GAME 4 -- Decay Rates 

//set the initial modes to false showing that nothing has been
//selected yet
var canopymode = false;
var forestmode = false;

function decay(){
  background(255, 70);
   
  if (computercount == 1){
      computersound.playMode('restart');
      computersound.setVolume(0.4);
      computersound.play();
  }
  
    
  board (280, 160); // create the blue back board set up
  
  
  if (mouseIsPressed && mouseX<546 && mouseX>399 && mouseY<303 && mouseY>257) {
    canopymode = true; //canopy button has been selected
    forestmode = false;
  }
  
  if (mouseIsPressed && mouseX<546 && mouseX>399 && mouseY<419 && mouseY>373) {
    forestmode = true; //forest button has been selected
    canopymode = false;
    
  }
    

  
  //decay values takes from a study that can be found here:
  //http://onlinelibrary.wiley.com/store/10.1111/j.1744-7429.2009.00590.x/asset/j.1744-7429.2009.00590.x.pdf;jsessionid=D334DD3131489A77DAAA21F8B528B0B5.f03t02?v=1&t=j1s966ye&s=b9baadfd7fca4131b2cc9de7334b594d7efdc154
  
  
  if (canopymode == true) {
    canopyt (280, 160, color(66, 244, 86)); //set the background of the canopy button to green 
    textSize(30);
    text ('40% Decayed', 340+280, 210+160); //display how much as decayed
  }
  
  if (canopymode == false) {
    canopyt (280, 160, 255); //keep the other one white
  }
  
  if (forestmode == true) {
    forest (280, 160, color(66, 244, 86)); //set the background of the button to green
    textSize(30);
    text ('98% Decayed', 340+280, 210+160); //display decay amount 
  }
  
  if (forestmode == false) {
    forest (280, 160, 255);
  }
  
    
    drawSprite(exitpress);
    
if(scene==3); {
    exitpress.onMousePressed = function(){
        game1=false;
    }
}
    

} //decay end
    
    

function board (x, y){
  rectMode (CENTER);
  strokeWeight (3);
  
  //main board
  fill('blue');
  rect (width/2 , height/2 , 500, 300);
  
  strokeWeight (1);
	//output display box
  fill(255);
  rect (430 + x, 200 + y, 200, 87);
  
  textSize(20);
  fill(255);
  text ('Decay After 300 Days', 330 + x, 124 + y);
    

  
}//board end

function forest (x, y, c){
  rectMode(CENTER);
  
  //Forest Floor Button
  fill(c);
  rect(190+x, 235+y, 150, 50);
  fill (0);
  textSize(20);
  text ('Forest Floor', 138+x, 240+y);
} //forest end

function canopyt (x, y, c){
  rectMode(CENTER);
	
  //Canopy button
  fill(c);
  rect(190+x, 120+y, 150, 50);
  fill(0);
  textSize(20);
  text ('Canopy', 151+x, 125+y);
} //canopy end

