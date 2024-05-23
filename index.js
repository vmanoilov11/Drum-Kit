$(".drum").forEach((drum) => {
    drum.addEventListener('click', function() {
        const buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
});

document.addEventListener("keypress", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(key){
    if (key == "w") {
        audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    } else if (key == "a") {
        audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    } else if (key == "s") {
        audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    } else if (key == "d") {
        audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    } else if (key == "j") {
        audio = new Audio("sounds/snare.mp3");
        audio.play();
    } else if (key == "k") {
       audio = new Audio("sounds/crash.mp3");
       audio.play();
    } else if (key == "l") {
       audio = new Audio("sounds/kick-bass.mp3");
       audio.play();
    } else {
       console.log("Invalid key");
       return;
    }
}
function buttonAnimation(key) {
    let activeButton = $("." + key);
    activeButton.classList.add("pressed")

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)

}