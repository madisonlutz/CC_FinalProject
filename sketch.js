//This is where the main navigation will be coded which allows the user to move from one
//game or quiz to the other. It will also be where the main narrative will happen. As I
// am still having issues with the sprites in p5.play I have held off creating this section
//until I meet with Kelly (see comment in game3.js)

var ship;
var ship0;
var emergent;
var spaceship;
var floor;
var scene;
var alien_walk;
var alien_stand;
var alien;



function preload(){
    emergent = loadImage("assets/emergent.png");
    ship = loadImage ("assets/spaceship.png");
    floor = loadImage ("assets/floor.png");
    ship0 = loadImage ("assets/spaceship0.png");
    
    alien_walk = loadAnimation("walk", "assets/walking/walking01", "assets/walking/walking08");
    
    alien_stand = loadAnimation("stand", "assets/standing/standing01", "assets/walking/standing08");
}

function setup(){
    createCanvas(1200,675);
    scene = 1;
//////SPACESHIP SPRITE///////
    spaceship = createSprite (0,0);
    spaceship.addImage(ship);
    spaceship.setVelocity(3,3);
//---------------------------////
    
//////ALIEN SPRITE///////
    alien = createSprite (100, 250);
    alien.addAnimation(alien_walk);
    alien.addAnimation(alien_stand);
    
}


function draw(){
    if (scene == 1){ ///scene 1
      intro();  
    }
        
    if (spaceship.position.y > height){
        scene2();
        scene = 2;
    }
    


}

function intro(){
    background(emergent);
    drawSprite(spaceship);
}

function scene2(){
    background(floor);
    image(ship0, 50, 250);
}


