
import mediaPlayer from "../assets/mediaplayer";
import autoPlay from "./autoplay";
import autoPaused from "./autoPaused";



const video1: HTMLElement = document.querySelector("video");                                                                                                                                     
const button: HTMLButtonElement = document.getElementById("playButton");
const button2: HTMLElement = document.getElementById("muteButton");
button.addEventListener("click",videoPlay);
button2.addEventListener("click",muteVideo);
const player = new mediaPlayer({el: video1 , 
    plugins: [new autoPaused(), new autoPlay(video1)]});



function videoPlay(){
    player.togglePlay();

};

function muteVideo(){
    player.toggleMuted();
}







