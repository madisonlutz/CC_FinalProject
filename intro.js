var ship;
var trees;
var spaceship;


function preload(){
    trees = loadImage("assets/emergent.png");
    ship = loadImage ("assets/spaceship.png");
}

function setup(){
    createCanvas(1200,675);
    
    spaceship = createSprite (0,0);
    spaceship.addImage(ship);
    spaceship.setVelocity(2,2);
    //spaceship.attractionPoint(3, 1200, 675);
    
}

function draw(){
    background(trees);
    drawSprites();
}