// for button click


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var btn=this.innerHTML;
        sound(btn);
        anim(btn);
    });
}

// for keyboard press 


document.addEventListener("keypress",function(event){     
    sound(event.key);
    anim(event.key);
    
})
function sound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var kickbass=new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "j":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "k":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
}

function anim(curr){
    var act=document.querySelector("."+curr);
    act.classList.add("pressed");

    setTimeout(function(){
       act.classList.remove("pressed"); 
    },200)
}