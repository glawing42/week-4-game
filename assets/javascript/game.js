// Global Variables
// =========================================================================================
// Arrays holding data
$(document).ready(function(){

	var computerChoice;
	var userScore;
	var wins = 0;
	var losses =0;
	var crystals = {
		one: Math.floor( Math.random() * (12-1)) + 1,
        two: Math.floor( Math.random() * (12-1)) + 1,
        three: Math.floor( Math.random() * (12-1)) + 1,
        four: Math.floor( Math.random() * (12-1)) + 1
	}

// Functions(Resusable blocks of code that I will call upon when needed)
// ========================================================================================
function startGame(){

	computerChoice = Math.floor(Math.random() * (120-19) + 19);
	userScore = 0;

	$("#wins").html(wins);
	$("#losses").html(losses);
	$("#randomNumber").html(computerChoice);
	$("#totalScore").html(userScore);
	$("#crystalOne").attr("data-value", crystals.one);
	$("#crystalTwo").attr("data-value", crystals.two);
	$("#crystalThree").attr("data-value", crystals.three);
	$("#crystalFour").attr("data-value", crystals.four);

};

// Can not figure out how to restart the game each time a round is over here is the code for it below
// function restartGame(){
// 	$("#crystalOne").attr("data-value", crystals.one);
// 	$("#crystalTwo").attr("data-value", crystals.two);
// 	$("#crystalThree").attr("data-value", crystals.three);
// 	$("#crystalFour").attr("data-value", crystals.four);

// console.log(restartGame)
// startGame();

// }




	function compareScore(){
		for(var i = 0; i < computerChoice; i++){
			if(userScore == computerChoice){
				wins++;
				console.log(wins)
				startGame();
			} else if (userScore > computerChoice){
				losses++;
				console.log(losses)
				startGame();
			};
		};

	};


	startGame();

	// Crystal value is added on click

	$("#crystalOne").on("click", function(event){

		crystals.one = $(this).attr("data-value");
		// console.log(crystals.one);
		userScore += parseInt(crystals.one);
		// console.log("my score is now" + userScore);
		$("#totalScore").html(userScore);
		compareScore();
	})

    $("#crystalTwo").on("click", function(event){

        crystals.two = $(this).attr("data-value");
        //console.log(crystals.two);
        userScore += parseInt(crystals.two);
        //console.log("my score is now " + userScore);
        $("#totalScore").html(userScore);
        compareScore();
    })


    $("#crystalThree").on("click", function(event){

        crystals.three = $(this).attr("data-value");
        //console.log(crystals.three);
        userScore += parseInt(crystals.three);
        //console.log("my score is now " + userScore);
        $("#totalScore").html(userScore);
        compareScore();
    })


    $("#crystalFour").on("click", function(event){

        crystals.four = $(this).attr("data-value");
        //console.log(crystals.four);
        userScore += parseInt(crystals.four);
        //console.log("my score is now " + userScore);
        $("#totalScore").html(userScore);
        compareScore();
    })




});