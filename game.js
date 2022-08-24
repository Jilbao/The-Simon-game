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

// Flash Animation
$("#"+nextSequence()).animate({opacity: 0}, 150).animate({opacity: 100}, 150)

// Click Handler
$(".btn").on("click", (event)=>{
    var userChoosenColor = event.target.id;
    playSound(userChoosenColor);
    userClickedPattern.push(userChoosenColor);
    
});

//Play Sound Function
function playSound(name){
    var userAudio = new Audio("sounds/"+name+".mp3");
    userAudio.play();
};

// Any Button to Start Game
$(document).on("keypressed", (event)=>{

});
