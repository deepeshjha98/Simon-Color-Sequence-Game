
var colors = ["red", "blue", "green", "yellow"];

var colorSequence = [];

var clickCount = 0;

$("[type='button']").click( function () { 
    fadeColor(this.id);
    if(colorSequence[clickCount]==this.id){
        
        clickCount++;
        if(clickCount === colorSequence.length){
            clickCount = 0;
            setTimeout(nextSequence, 1400);
            
        }
    }else{
        colorSequence = [];
        clickCount = 0;
        $("body").addClass("red");
        playSound("sounds\\wrong.mp3")
        setTimeout(function(){
            $("body").removeClass("red");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key To Restart");
    }

    
    
    //alert(this.id);

})

function nextSequence(){
    var num = Math.floor(Math.random()*4);
    colorSequence.push(colors[num]);
    fadeColor(colors[num]);
    $("#level-title").text("Level "+colorSequence.length);
}

function fadeColor(color){
    $("#"+color).addClass("pressed");
    playSound("sounds\\"+color+".mp3");
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);

}

function playSound(url) {
    var a = new Audio(url);
    a.play();
}


$( document ).on( "keypress", function() {
    if(colorSequence.length === 0){

        nextSequence();
    }
  } );