let buttons=document.querySelectorAll(".drum");
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",()=>{
        check(buttons[i].innerHTML);
        animation(buttons[i].innerHTML)
    })

}
document.addEventListener("keydown",(event)=>{
    check(event.key);
    animation(event.key);
})

function check(button){
    switch(button){
        case "w":
            let tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare=new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick=new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(button+" was pressed");
    }
}

function animation(button){
    let selected=document.querySelector("."+button);
    selected.classList.add("pressed");
    setTimeout(()=>{
        selected.classList.remove("pressed");
    },100)
}