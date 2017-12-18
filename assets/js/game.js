$(document).ready(function () {
    //Toggle Instructions Button
    $("#btnSlideTog").click(function () {
        $("ul").slideToggle();
    });
});

//VARIABLES
var ranNum;
var loss = 0;
var win = 0;
var previous = 0;
var counter = 0;
var numberOptions = [10, 5, 3, 7];
var score = score;

//RANDOM NUMBER GENERATOR <120	
ranNum = Math.floor(Math.random() * 82) + 32;
$("#numTarget").html(ranNum);

//CRYSTAL RANDOM NUMBER GENERATOR - Not working properly yet.    
// for(var i = 0; i < 4; i++){    
// 	var random = Math.floor(Math.random() * 12) + 1;    
// 	var imageCrystal = $("<div>");
// 		imageCrystal.attr({
// 			"class": "crystal-image",
// 			"data-random": random,
// 	});    
//  var resetAndStart = function () {    
// $(".imageCrystal").empty();

// For loop to create crystals for each numberOption.
for (var i = 0; i < numberOptions.length; i++) {
    //A new imageCrystal is created for each iteration from a single image file.
    var imageCrystal = $("<img>");
    // Adding the class ".crystal-image" to link CSS.
    imageCrystal.addClass("crystal-image");
    //Linking each virtual crystal image to a single image file.
    imageCrystal.attr("src", "assets/img/button.png");
    //Data attribute set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    //Each crystal image with all of the assigned classes and attributes is added to index.html.
    $("#crystals").append(imageCrystal);
}

//Players input is recorded
$(".crystal-image").on("click", function () {
    //The clicked crystals value is extracted...
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    //...and add it to the Players counter.
    counter += crystalValue;

    //Score recording and Win/Loss Pop-Up Banners    
    $("#score").text(counter);

    if (counter == ranNum) {
        win++;
        $("#win").html("Win:   " + win);
        $(".winner").html("Winner, Winner, Chicken Dinner!!!");
    }

    if (counter > ranNum) {
        loss++;
        $("#loss").html("Loss:   " + loss);
        $(".loser").html("You Lose!!  Go Home!!");
    }
});

//Audio Panel
var audioElement = document.createElement("audio");
//Audio source file
audioElement.setAttribute("src", "assets/snd/DeeZee06TheSpaceInside.mp3");
audioElement.addEventListener("ended", function () {
    this.play();
}, false);
//Various Readouts, duration, etc.
audioElement.addEventListener("canplay", function () {
    $("#length").text("Duration:" + audioElement.duration + " seconds");
    $("#source").text("Source:" + audioElement.src);
    $("#status").text("Status: Ready to play").css("color", "green");
});
//Length of time .mp3 has played.
audioElement.addEventListener("timeupdate", function () {
    $("#currentTime").text("Current second:" + audioElement.currentTime);
});
//Audio Control Button Elements; play, pause, restart.
$("#play").click(function () {
    audioElement.play();
    $("#status").text("Status: Playing");
});

$("#pause").click(function () {
    audioElement.pause();
    $("#status").text("Status: Paused");
});

$("#restart").click(function () {
    audioElement.currentTime = 0;
});