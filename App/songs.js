var playlistFromParse = JSON.parse(playlistsJSON);
function buildDomain() {
   for( var i = 0; i < playlistFromParse.length; i++ ) {
      playlist.push( new Playlist(playlistFromParse[i]) );
   }
}

function unhidePlaylist(){

    document.getElementById("playlist").style.visibility = "visible";
    console.log(JSON.parse);
    var currentPlaylist = new Playlist();

    for(var i = 0; i <= playlistFromParse[0].songs[i].length; i++){
      var song = new Song(playlistFromParse[0].songs[i]);
      console.log(songs);

      }
    }

function Song(path){
  this.image = path.image;
  this.songTitle = path.songTitle;
  this.songAuthor = path.songAuthor;
  this.songLength = path.songLength;
  this.songListened = path.songListened;



  }

  Song.prototype.getSongTitle(){
    return this.songTitle;
  }

  Song.prototype.getSongAuthor(){
    return this.songAuthor;
  }

  Song.prototype.getSongLength(){
    return this.songLength;
  }

  Song.prototype.playCount(){
    playCount = 0;
    for( var i=0; i<=songLength[0].songs[i].length; i++){
      playCount= songLength[i] + songLength[i+1];
    }
  }

};




function closePlaylist(){
    document.getElementById("playlist").style.visibility = "hidden";
}
