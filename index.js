document.querySelectorAll(".drum").forEach((drum) => {
    drum.addEventListener('click', function() {
        const buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
});

document.addEventListener("keypress", function(e) {
    makeSound(e.key);
});

function makeSound(key){
    if (key == "w") {
        audio = new Audio("sounds/tom-1.mp3");
    } else if (key == "a") {
        audio = new Audio("sounds/tom-2.mp3");
    } else if (key == "s") {
        audio = new Audio("sounds/tom-3.mp3");
    } else if (key == "d") {
        audio = new Audio("sounds/tom-4.mp3");
    } else if (key == "j") {
        audio = new Audio("sounds/snare.mp3");
    } else if (key == "k") {
       audio = new Audio("sounds/crash.mp3");
    } else if (key == "l") {
       audio = new Audio("sounds/kick.mp3");
    } else {
       console.log("Invalid key");
       return;
    }
}
