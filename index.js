// A for loop that makes sure that all of the buttons make a sound relating to drums
for (var x = 0; x < document.querySelectorAll(".drum").length; x++) {

// Detecting buttons pressed
    document.querySelectorAll("button")[x].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        keyInputSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

// Will state what keyboard was pressed
document.addEventListener('keydown', function(event) {
    keyInputSound(event.key);
    buttonAnimation(event.key)
});

// Function that will play the drum part that matches with the relevent key that is pressed
function keyInputSound(key) {

    switch (key) {
        case "w":
            var tom1Sound = new Audio("sounds/tom-1.mp3");
            tom1Sound.play();  
            break;
        case "a":
            var tom2Sound = new Audio("sounds/tom-2.mp3");
            tom2Sound.play();
            break;
        case "s":
            var tom3Sound = new Audio("sounds/tom-3.mp3");
            tom3Sound.play();
            break;
        case "d":
            var tom4Sound = new Audio("sounds/tom-4.mp3");
            tom4Sound.play();
            break;
        case "j":
            var crashSound = new Audio("sounds/crash.mp3");
            crashSound.play();
            break;
        case "k":
            var snareSound = new Audio("sounds/snare.mp3");
            snareSound.play();
            break; 
        case "l":
            var kickBassSound = new Audio("sounds/kick-bass.mp3");
            kickBassSound.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

// Will darken the button icons that are pressed/clicked for a bit of time
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
       activeButton.classList.remove("pressed");         
    }, 100);
}