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
var game;
var exit;
var game1;
var game2;
var game3;
var game4;


function preload(){
    emergent = loadImage("assets/emergent.png");
    ship = loadImage ("assets/spaceship.png");
    ffloor = loadImage ("assets/floor.png");
    ship0 = loadImage ("assets/spaceship0.png");
    bubble1_1 = loadImage ("assets/collide/collide1_1.png");
    computer = loadImage ("assets/computertable.png");
    exit = loadImage ("assets/exit.png");
    
    alien_walk = loadAnimation("assets/walking/walking01.png", "assets/walking/walking08.png");
    
    alien_stand = loadAnimation("assets/standing/standing01.png", "assets/standing/standing08.png");
    
    sci_walk = loadAnimation("assets/walking/sciwalk01.png", "assets/walking/sciwalk08.png");
    
    sci_stand = loadAnimation("assets/standing/scistand01.png", "assets/standing/scistand06.png");
}

function setup(){
    createCanvas(1200,675);
    scene = 1;
    collidecount = 0;
    game = 0;
    
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
    
}//setup end

function draw(){
       
//CONSOLE//
    
console.log(scene);
console.log(game);
console.log(mouseX, mouseY);
    
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
    

    
}//draw end


