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
    
    if (game1 == true && scene == 3){
        decay();
    }
    

}

function scene4(){ /////FINDING THE FROG
    
    
    
    if (game2 == true && scene == 4){
        search();
    }
    
    else {
        camera.off(); //???? will this help? --update-- HUZZAH!!! THE BUG IS FIXED NOW!!! 
        background (understory);
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
        }
        
        ladder.onMousePressed = function(){
            scene = 5;
        }
    }//else end
}//scene 4 end


function scene5(){ ////FINDING THE FROG 2
    camera.off();
    
    if (game3 == true && scene==5){
        birdfly();
    }
    
    else{
        background(canopy);
        image (housefloor, 0, 575);
        ladder.position.y = 337.5;
        macaw.position.y = 200;
        macaw.scale = 0.5;
        drawSprite(macaw);
        drawSprite(ladder);
        drawSprite(alien);
        drawSprite(sci);
        
        alien.collide(sci, collide5_1);
        
        macaw.onMousePressed = function(){
            game3=true;
        }
        
        ladder.onMousePressed = function(){
            scene = 6;
        }
    }
    

}

function scene6(){ ////SENDING SIGNAL
    camera.off();
    if (game4==true && scene==6){
        quiz();
    }
    
    else {
        
        background(emergent);
        image (housefloor, 0, 575);
        image(laddertop, 713, 530);
        drawSprite(gadget);
        drawSprite(alien);
        drawSprite(sci);
        
        alien.collide(sci, collide6_1);
        
        gadget.onMousePressed = function(){
            game4=true;
        }
    }
    
    
    
}

function scene7(){ ///LEAVING RAINFOREST
    
}

