
import mediaPlayer from "../assets/mediaplayer.js";
import autoPlay from "../plugins/autoplay.js";

const video1 = document.querySelector("video");
const button = document.getElementById("playButton");
const button2 = document.getElementById("muteButton");
button.addEventListener("click",videoPlay);
button2.addEventListener("click",muteVideo);
const player = new mediaPlayer({el: video1, plugins: new autoPlay()});


autoPlay.prototype.run = function(player){
    player.pause()
    player.play()
};


function videoPlay(){
    player.togglePlay();

};

function muteVideo(){
    player.toggleMuted();
}

autoPlay.prototype.run(player);





 //let click = 0;

/* function videoPlay(){
      click++

      if (click % 2 == 0){
        return video1.pause();
     }else {
        return video1.play();
     };
            
};
  */

