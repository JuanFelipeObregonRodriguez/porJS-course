/*import mediaPlayer from "./mediaPlayer";
import autoPlay from "./assets/plugins/autoPlay";*/
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
        this.media.mute= !this.media.mute
    }
    tooglePlayPause(){
     this.media.paused
     ?this.media.play()
     :this.media.pause()
    }
}
class autoPlay{
    constructor(video){
        this.player = video
    }
    run(){
        this.player.muted = true;
        this.player.play();
    }
}
const video = document.querySelector("video");
const play = document.getElementById("play")
const mute = document.getElementById("mute");


const player = new mediaPlayer({video, plugins:[new autoPlay(video)]})

play.onclick = ()=> player.tooglePlayPause();
mute.onclick = ()=> player.toogleMuteUnmute();
