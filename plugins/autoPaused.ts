
import mediaPlayer from "../assets/mediaplayer";

class autoPaused{
    threshold: number;
    player: mediaPlayer;
    constructor(){
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibility = this.handleVisibility.bind(this)


    }   run(player){
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection,{
            threshold: this.threshold,
        })
            observer.observe(player.media);

            document.addEventListener("visibilitychange",this.handleVisibility);

    };

    private handleIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold


        if(isVisible){
            this.player.play();
        } else {
            this.player.pause();
        };

        
        

    };


    private handleVisibility(){
    const isVisible = document.visibilityState === "visible";

    if(isVisible){
        this.player.play();
    }else {
        this.player.pause();
    }
    }
};

export default autoPaused;