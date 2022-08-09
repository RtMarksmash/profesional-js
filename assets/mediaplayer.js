 class mediaPlayer {
    constructor (config){
        this.media = config.el ;
        this.plugins = config.plugins || [];

        //this._initPlugin();
         
    }
    _initPlugin(){
        const player = {
            play: () => this.play(),
            pause:() => this.pause(),
            media: this.media,
            get muted() {
                this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;

            },

        }
        this.plugins.forEach(plugin => {
            plugin.run(player);
        });
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



