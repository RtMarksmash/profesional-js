MediaPlayer.prototype.toggleMute = function() {
    this.media.muted = !this.media.muted
  };

  function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins;
  };


  this.plugins = config.plugins ||  [];