// Initial Arrays
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

// Random Generated Color
function nextSequence (){
    var randomNumber = Math.floor((Math.random()*4));
    var randomChosenColor = buttonColors[randomNumber];
    playSound(randomChosenColor);
    return randomChosenColor
};

// Saving Pattern
gamePattern.push(nextSequence());

// Flash Animation for sequence
$("#"+nextSequence()).animate({opacity: 0}, 150).animate({opacity: 100}, 150)

// Click Handler
$(".btn").on("click", (event)=>{
    var userChoosenColor = event.target.id;
    playSound(userChoosenColor);
    animatePress(userChoosenColor);
    userClickedPattern.push(userChoosenColor);   
});

// Flash Animation for Clicks
function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    setTimeout(() => {
        $("#"+ currentColor).removeClass("pressed");
    }, 100);
};

//Play Sound Function
function playSound(name){
    var userAudio = new Audio("sounds/"+name+".mp3");
    userAudio.play();
};

// Any Button to Start Game
$(document).on("keypressed", (event)=>{

});
