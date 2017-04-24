// GAME 2 -- QUIZ AT THE END 

//Glitch with Question 3 see line 87

var mode;
var correct;
var letter;
var A;
var B;
var C;
var D;
var OKbutton;
var answer;

function setup() { 
  createCanvas(640, 360);
  mode = 0;
  OKbutton = false;
} 

function draw() { 
  background(255);
  remote(0, 0);
  signal(0,0, 'red');
  button(281, 180, 'blue', 'A');
  button(361, 180, 'yellow', 'B');
  button(281, 230, 'orange', 'C');
  button(361, 230, 'green', 'D');
  ok(320, 300);
  
  
  if (mode === 0){
    intro(320, 77);
  }
  
  if (mode === 0 && OKbutton===true){ //is the OK button clicked
    mode = 1;
  }
  
  //QUESTION 1///
  
  if (mode === 1 && C===1){ //correct answer for Q1
    mode = 5;
    //OKbutton = false;
  }
  
  if (mode === 1 && C===2){ //wrong answer for Q1
    mode = 4;
    //OKbutton = false;
    
  }
  
  
  if (mode === 4 && OKbutton===true) { //wrong answer for Q1 redirect to retry
    mode = 1;
    C = 0;
  }
    
  if (mode === 5 && OKbutton===true) { //correct answer for Q1 redirect to Q2
    mode = 2;
  }
    
   ////QUESTION 2/////
    
    if (mode === 2 && A===1){ //correct answer for Q2
    mode = 5;
    //OKbutton = false;
  }
  
  if (mode === 2 && A===2){ //wrong answer for Q2
    mode = 4;
    //OKbutton = false;
    
  }
  
  
  if (mode === 4 && OKbutton===true) { //wrong answer for Q2 redirect to retry
    mode = 2;
    A=0;
  }
    
  if (mode === 5 && OKbutton===true) { //correct answer for Q2 redirect to Q3
    mode = 3;
  }
  
    
       ////QUESTION 3///// -- There is a glitch with Q3. If you get it wrong instead
                            //of taking you back to Q3 it takes you to Q1
    
    if (mode === 3 && D===1){ //correct answer for Q2
    mode = 5;
    //OKbutton = false;
  }
  
  if (mode === 3 && D===2){ //wrong answer for Q2
    mode = 4;
    //OKbutton = false;
    
  }
  
  
  if (mode === 4 && OKbutton===true) { //wrong answer for Q2 redirect to retry
    mode = 3;
    D = 0;
  }
    

  if (mode === 5 && OKbutton===true) { //wrong answer for Q2 redirect to retry
    mode = 6;
  }
  

    ///////////////   END OF QUESTIONS   //////////////////
    
       
    
    
    
  if (mode === 1){ //display Q1
    quest1(240, 73);
  }
    
  if (mode === 2){ //display Q2
    quest2(240, 73);
  }
  
  if (mode === 3){ //display Q3
    quest3(240, 73);
  }
    
  if (mode === 4){ //display wrong answer screen
    wrong(0, 0);
  }
  
  if (mode === 5){ //display correct answer screen
    correct(0, 0);
  }
  

  if (mode === 6){ //display correct answer screen
    endScreen(0, 0);
    signal(0,0, 'red');
  }
  
  
  if (mouseIsPressed && mouseX<300 && mouseX>263 && mouseY<194 && mouseY>167){ //is A clicked
    A = 1;
    B = 2;
    C = 2;
    D = 2;
  }
    
  if (mouseIsPressed && mouseX<379 && mouseX>341 && mouseY<194 && mouseY>167){ //is B clicked
    A = 2;
    B = 1;
    C = 2;
    D = 2;
  }
  
  if (mouseIsPressed && mouseX<300 && mouseX>263 && mouseY<245 && mouseY>216){ //is C clicked
    A = 2;
    B = 2;
    C = 1;
    D = 2;
  }
  
  if (mouseIsPressed && mouseX<379 && mouseX>341 && mouseY<245 && mouseY>216){ //is D clicked
    A = 2;
    B = 2;
    C = 2;
    D = 1;
  }

  
  if (mouseIsPressed && OKbutton==false && mouseX<376 && mouseX>264 && mouseY<325 && mouseY>276){
    OKbutton = true;
  } else {
      OKbutton = false;
  }
    

 
  
  
  console.log(mouseX, mouseY);
  console.log(OKbutton);
}

function remote(x, y){
  rectMode(CENTER);
  fill(160);
  stroke(0);
  strokeWeight(4);
  rect(320+x, 200+y, 200, 300);
  
  
  //question display
  fill(255);
  strokeWeight(2);
  rect(320+x, 100+y, 170, 80);
}

function signal(x, y, c){
  fill(0);
  rect(320+x, 40+y, 10, 20);
  
  ellipseMode (CENTER);
  fill(c);
  ellipse (320+x, 20+y, 30, 30);
}

function intro(x, y) {
  noStroke();
      textSize(9);
      textAlign (CENTER);
      fill(0);
      text('Answer the following questions to', x, y);
      text('reveal the code needed to signal', x, y+15);
      text('the mothership that you have', x, y+30);
  		text('successfully completed your mission.', x, y+45);
}
    

function quest1(x, y){
  noStroke();
  textSize(10);
  textAlign (LEFT);
  fill(0);
  text('Which of the follow is NOT', x, y);
  text('eaten by the Macaw?', x, y+10);
  text('A: Fruit', x, y+25);
  text('B: Nuts', x, y+37);
  text('C: Small Bugs', x, y+49);
  text('D: Seeds', x, y+61);
}

function quest2(x, y){
  noStroke();
  textSize(10);
  textAlign (LEFT);
  fill(0);
  text('Where do things decay faster?', x, y);
  text('A: The Forest Floor', x, y+25);
  text('B: The Canopy', x, y+37);
  
}

function quest3(x, y){
  noStroke();
  textSize(10);
  textAlign (LEFT);
  fill(0);
  text('What type of frog did YOU find', x, y);
  text('in the understory layer?', x, y+10);
  text('A: Poison Dart Frog', x, y+25);
  text('B: Bull Frog', x, y+37);
  text('C: Northern Leopard Frog', x, y+49);
  text('D: Red-Eyed Tree Frog', x, y+61);
}


function endScreen (x, y){
  fill(255);
  strokeWeight(2);
  rect(320+x, 100+y, 170, 80);
  
  fill(0);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text('SIGNAL SENT.', 320, 108);
  text('MISSION COMPLETE!', 320, 128);
}

function button (x, y, c, t){
  	rectMode(CENTER);
    fill (c);
    rect(x, y, 40, 30);
  
  	fill (255);
    textAlign(CENTER);
  	textSize(30);
    text(t, x, y+11);

} //button end

function ok (x, y){
  	rectMode(CENTER);
    fill (23, 239, 77);
    rect(x, y, 115, 50);  
  
  	fill (0);
    textAlign(CENTER);
  	textSize(30);
    text('OK', x, y+11);
}

function wrong (x, y){
	fill(255);
  strokeWeight(2);
  rect(320+x, 100+y, 170, 80);
  
  noStroke();
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text('Oops, that is not it.', 320, 90);
  text('Try again!', 320, y+120);
}

function correct (x, y){
	fill(255);
  strokeWeight(2);
  rect(320+x, 100+y, 170, 80);
  
  fill(0);
	noStroke();
  textSize(20);
  textAlign(CENTER);
  text('You got it right!', 320, 108);
}





