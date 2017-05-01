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
        drawSprite(table);
        drawSprite(sci);
        drawSprite(alien);

        alien.collide(sci, collide1_1);
        table.onMousePressed = function (){
            console.log('click');
            game = 1;
        }
    
    if (game == 1){
        decay();
    }
    
    
    
    
        
    
    
    
    //sci.position = (300, 500);
}

function scene4(){ /////FINDING THE FROG
    
}


function scene5(){ ////MACAW
    
}

function scene6(){ ////SENDING SIGNAL
    
}

function scene7(){
    
}

