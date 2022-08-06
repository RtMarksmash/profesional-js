 class mediaPlayer {
    constructor (config){
        this.media = config.el ;
        this.plugins = config.plugins || [];
         
    }

    play(){
        this.media.play()
    }

    pause(){
        this.media.pause()
    }

    togglePlay(){
         
        this.media.paused? this.media.play(): this.media.pause();
    }

    toggleMuted(){
        
        this.media.muted? this.unMuted() : this.muted();
    }

  

    muted(){
        this.media.muted = true;
    }

    unMuted(){
        this.media.muted = false;
    }


    
     
}; 



export default mediaPlayer;



