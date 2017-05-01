function scene1(){ ///ALIEN COMING TO EARTH
    background(emergent);
    drawSprite(spaceship);
} //intro end

function scene2(){ ///FOREST FLOOR
    background(ffloor);
    drawSprite(spaceship0);
    drawSprite(alien);
} //scene2 end

function scene3(){ ////MEETING THE SCIENTIST
        background(ffloor);
        removeSprite(spaceship0);
        drawSprite(ladder);
        drawSprite(table);
        drawSprite(sci);
        drawSprite(alien);

        alien.collide(sci, collide3_1);
    
        table.onMousePressed = function (){
            console.log('click');
            game1 = true;
        }
        
        ladder.onMousePressed = function (){
            console.log('click');
            scene = 4;
        }
    
    if (game1 == true){
        decay();
    }
    

}

function scene4(){ /////FINDING THE FROG
    background (canopy);
    image (housefloor, 0, 575);
    ladder.position.y = 337.5;
    drawSprite(stool);
    drawSprite(ladder);
    drawSprite(alien);
    drawSprite(sci);
    
    alien.collide(sci, collide4_1);
    
    stool.onMousePressed = function (){
            console.log('click');
            game2=true;
            fill(255);
            ellipse(300,300,50,50);
        }
    
    if (game2 == true && scene == 4){
        search();
    }
}


function scene5(){ ////MACAW
    
}

function scene6(){ ////SENDING SIGNAL
    
}

function scene7(){
    
}

