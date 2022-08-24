// Initial Arrays & Variables
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var count = 0;

// Disabling buttons before game starts
$(".btn").css("pointer-events","none");

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
// Start-Over
function startOver(){
    level = 0;
    gamePattern = [];
    count = 0;
    // Disabling buttons after game ends.
    $(".btn").css("pointer-events","none");

};
// Answer Control
function checkAnswer (currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        
        // Checking End of Sequence and Resetting answer array
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    }else{
        // Game Over
        playSound("wrong");

        // Adding game over background and title
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").html("Game Over, Press Any Key to Restart");
        startOver();
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

$(document).on("keypress", (event)=>{   
    if (count === 0){
        nextSequence();
        count++;
        // Making clicks possible
        $(".btn").css("pointer-events","auto");
    }
    
});



