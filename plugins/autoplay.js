import mediaPlayer from "../assets/mediaplayer";


 class autoPlay{
    constructor(video){
        this.video = video

    }
    run(){
        if(!player.muted){
            player.muted = true;
        }else {
            this.video.play();
        }
         
    };
}


export default autoPlay;  