class mediaPlayer{
    constructor({video, plugins}){
        this.media = video
        this.plugins = plugins || []
        this._initPlugins()
    }
    _initPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run
        });
    }
    toogleMuteUnmute(){
        this.media.mute = !this.media.mute
    }
    tooglePlayPause(){
     this.media.paused
     ?this.media.play()
     :this.media.pause()
    }
}
export default mediaPlayer