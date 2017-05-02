/////SCENE 1 COLLISIONS/////

function collide3_1 (){ //scene 3 collision 1
    sally1count += 1;
    sci.mirrorX(-1);
    image(bubble3_1, 750, 265);
    
    if (sally1count == 1){
       sally1.playMode('restart');
       sally1.setVolume(0.4);
       sally1.play(); 
    }
    
}

function collide4_1 (){ //scene 3 collision 1
    sally2count +=1;
    image(bubble4_1, 745, 255);
    sci.mirrorX(-1);
    
    if (sally2count==1){
    sally2.playMode('restart');
    sally2.setVolume(0.4);
    sally2.play();
    }
}

function collide5_1 (){ //scene 3 collision 1
    sally3count +=1;
    image(bubble5_1, 750, 250);
    sci.mirrorX(-1);
    
    if (sally3count==1){
        sally3.playMode('restart');
        sally3.setVolume(0.4);
        sally3.play();
    }
    
}

function collide6_1 (){ //scene 3 collision 1
    sally4count += 1;
    image(bubble6_1, 750, 250);
    sci.mirrorX(-1);
    
    if (sally4count==1){
        sally4.playMode('restart');
        sally4.setVolume(0.4);
        sally4.play();
    }
   
}