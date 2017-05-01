//This is where the main navigation will be coded which allows the user to move from one
//game or quiz to the other. It will also be where the main narrative will happen. As I
// am still having issues with the sprites in p5.play I have held off creating this section
//until I meet with Kelly (see comment in game3.js)


var collidecount;
var ship;
var ship0;
var emergent;
var spaceship;
var spaceship0;
var ffloor;
var scene;
var alien_walk;
var alien_stand;
var alien;
var sci;
var sci_walk;
var sci_stand;
var table;
var computer;
//var game;
var exitbutton;
var ladder;
var ladderpic;
var canopy;
var housefloor;
var bubble3_1;
var bubble4_1;
var stool;
var binoculars;
var frame;
var leaves;
var frog;
var frogx;
var frogy;
var speech;
var frogani;
var game1 = false;
var game2 = false;
var game3 = false;
var game4 = false;
var exitpress;


function preload(){
    emergent = loadImage("assets/emergent.png");
    ship = loadImage ("assets/spaceship.png");
    ffloor = loadImage ("assets/floor.png");
    ship0 = loadImage ("assets/spaceship0.png");
    bubble3_1 = loadImage ("assets/collide/collide1_1.png");
    computer = loadImage ("assets/computertable.png");
    exitbutton = loadImage ("assets/exit.png");
    ladderpic = loadImage ("assets/ladder.png");
    canopy = loadImage ("assets/canopy.png");
    housefloor = loadImage ("assets/housefloor.png");
    bubble4_1 = loadImage ("assets/collide/collide4_1.png");
    binoculars = loadImage ("assets/binoculars.png");
    frame = loadImage("assets/frame.png");
 	leaves = loadImage("assets/leavesbig.png");
    speech = loadImage("assets/frogbubble.png");
    
    alien_walk = loadAnimation("assets/walking/walking01.png", "assets/walking/walking08.png");
    
    alien_stand = loadAnimation("assets/standing/standing01.png", "assets/standing/standing08.png");
    
    sci_walk = loadAnimation("assets/walking/sciwalk01.png", "assets/walking/sciwalk08.png");
    
    sci_stand = loadAnimation("assets/standing/scistand01.png", "assets/standing/scistand06.png");
    
    frogani = loadAnimation("assets/frog01.png", "assets/frog12.png");
    
    
    

}

function setup(){
    createCanvas(1200,675);
    scene = 1;
    collidecount = 0;
    game = 0;
    
    ////FROG LOCATION/////
    frogx = random(365, 1230); 
    frogy = random(253, 542);
    //-------------------///
    
//////EXIT SPRITE///////
    exitpress = createSprite (1136, 35);
    exitpress.addImage(exitbutton);
    exitpress.setCollider('rectangle',0,0,100,100);
//---------------------------////
    
//////SPACESHIP SPRITE///////
    spaceship = createSprite (0,0);
    spaceship.addImage(ship);
    spaceship.setVelocity(3,3);
//---------------------------////
    
//////SPACESHIP0 SPRITE///////
    spaceship0 = createSprite (320, 450);
    spaceship0.addImage(ship0);
//---------------------------////
    
//////ALIEN SPRITE///////
    alien = createSprite (0, 550);
    alien.addAnimation('walk', alien_walk);
    alien.addAnimation('stand', alien_stand);
//-----------------------////
    
//////SCIENTIST SPRITE///////
    sci = createSprite (1000, 550);
    //sci.addAnimation('sciwalk', sci_walk);
    sci.addAnimation('scistand', sci_stand);
    
//-----------------------////
    
//////COMPUTER TABLE SPRITE///////
    table = createSprite (300,530);
    table.addImage(computer);
    table.setCollider('rectangle',0,0,300,200);
//---------------------------////
    
//////LADDER SPRITE///////
    ladder = createSprite (810,285);
    ladder.addImage(ladderpic);
    ladder.setCollider('rectangle',0,0,200,675);
//---------------------------////
    
//////BINOCULARS SPRITE///////
    stool = createSprite (200,550);
    stool.addImage(binoculars);
    stool.setCollider('rectangle',0,0,200,250);
//---------------------------////
    
    
//////FROG SPRITE//////

  frog = createSprite(frogx, frogy, 400, 400);
  frog.addAnimation('normal', frogani);
  frogani.offY = 18;
    
//--------------------//
    
}//setup end

function draw(){
       
//CONSOLE//
    
console.log(scene);
console.log(game);
console.log(game2);
//console.log(mouseX, mouseY);
    
//----------------///

    if ((spaceship.position.y > height) && scene==1){ //scene 2
        scene = 2;
        //scene2();
        
    }
    
    if ((alien.position.x > width) && scene==2){ //scene 3
        scene = 3;
        //scene3();
        
    }
  
    
///////ALIEN CONTROLS////////
  
  //if mouse is to the left
  if(mouseX < alien.position.x - 10) {
    alien.changeAnimation('walk');
    // flip horizontally
    alien.mirrorX(-1);
    // move left
    alien.velocity.x = - 3;
  }
  else if(mouseX > alien.position.x + 10) {
    alien.changeAnimation('walk');
    // flip horizontally
    alien.mirrorX(1);
    // move right
    alien.velocity.x = 3;
  }
  else {
    alien.changeAnimation('stand');
    //if close to the mouse, don't move
    alien.velocity.x = 0;
  }
    
  if (alien.position.x > width){
      alien.position.x = 0;
  }
    
  if (alien.position.x < 0){
      alien.position.x = width;
  }

//------------------------------////
    
    
////////SCENE CONTROLS///////
    
    if (scene == 1){ ///scene 1
      scene1();  
    }
    
    if (scene == 2){ ///scene 1
      scene2();  
    }
    
    if (scene == 3){ ///scene 1
      scene3();  
    }
    
    if (scene == 4){ ///scene 1
      scene4();  
    }
    
///------------------------////
    
////////SCENE CONTROLS///////
/*    
    if (game1==true){ ///scene 1
      game2 = false;
      game3 = false;
      game4 = false;
    }
    
    if (game2==true){ ///scene 1
      game1 = false;
      game3 = false;
      game4 = false;  
    }
    
    if (game3==true){ ///scene 1
      game2 = false;
      game1 = false;
      game4 = false;  
    }
    
    if (game4==true){ ///scene 1
      sgame2 = false;
      game3 = false;
      game1 = false;
    }
*/  
///------------------------////
    
    
}//draw end


