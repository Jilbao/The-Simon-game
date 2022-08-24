// Initial Arrays & Variables
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
// Random Generated Color
function nextSequence (){
    var randomNumber = Math.floor((Math.random()*4));
    var randomChosenColor = buttonColors[randomNumber];
    playSound(randomChosenColor);

    // Saving Pattern
    gamePattern.push(randomChosenColor);

    // Flash Animation for sequence
    $("#"+randomChosenColor).animate({opacity: 0}, 150).animate({opacity: 100}, 150);

    // Level  
    level++;
    $("h1").html("Level "+level);
};
// Answer Control
function checkAnswer (currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
    }else{
        console.log("wrong")
    }
    
};

// Click Handler
$(".btn").on("click", (event)=>{
    var userChoosenColor = event.target.id;
    playSound(userChoosenColor);
    animatePress(userChoosenColor);
    userClickedPattern.push(userChoosenColor);
    checkAnswer((userClickedPattern.length-1));   
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
var count = 0;
$(document).on("keypress", (event)=>{   
    if (count === 0){
        nextSequence();
        count++;
    }
    
});


// if game over count = 0
