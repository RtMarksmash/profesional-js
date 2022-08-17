
import mediaPlayer from "../assets/mediaplayer";


 class autoPlay {
    constructor() { }
    run(player: mediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true;
        };
        player.media.play();
    }
}






 export default autoPlay

 