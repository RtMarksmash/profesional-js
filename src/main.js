
import mediaPlayer from "../assets/mediaplayer.js";
import autoPlay from "../plugins/autoplay.js";
import autoPaused from "../plugins/autoPaused.js";

const video1 = document.querySelector("video");
const button = document.getElementById("playButton");
const button2 = document.getElementById("muteButton");
button.addEventListener("click",videoPlay);
button2.addEventListener("click",muteVideo);
const player = new mediaPlayer({el: video1});


/* autoPlay.prototype.run = (player) => {
    player.pause();
    player.play();
}; */


function videoPlay(){
    player.togglePlay();

};

function muteVideo(){
    player.toggleMuted();
}

autoPlay.prototype.run(player);





