let body = document.querySelector("main");
let bg = document.querySelector(".bg");

let audio = new Audio("./music/car.mp3");
audio.loop = true;

body.addEventListener("click", () => {
    if (!body.style.transform || body.style.transform === "none") {
        body.style.transform = "rotateY(180deg)";
        bg.src = "./img/bg2.gif";
        audio.pause();
        audio.src = "./music/wind.mp3";
        audio.play();
    } else {
        body.style.transform = "none";
        bg.src = "./img/bg1.gif";
        audio.pause();
        audio.src = "./music/rain.mpeg";
        audio.play();
    }
});