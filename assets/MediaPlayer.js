function MediaPlayer(config) {
    this.media = config.el;
    console.log(config.el)
}

MediaPlayer.prototype.play = function() {
    this.media.play();
};

MediaPlayer.prototype.pause = function() {
    console.log("pause")
    this.media.pause();
};
  
MediaPlayer.prototype.togglePlay = function() {
    console.log("inicio", this.media.paused)
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

export default MediaPlayer;