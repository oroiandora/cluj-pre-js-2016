function Song(path){
  this.image = path.image;
  this.songTitle = path.songTitle;
  this.songAuthor = path.songAuthor;
  this.songLength = path.songLength;
  this.songListened = path.songListened;
}

  Song.prototype.getSongTitle = function(){
    return this.songTitle;
  };

  Song.prototype.getSongAuthor = function(){
    return this.songAuthor;
  };

  Song.prototype.getSongLength = function(){
    return this.songLength;

  };

  Song.prototype.getSongListened = function(){
    return this.songListened;
  };

  Song.prototype.getImage = function(){
    return this.image;
  };

  Song.prototype.setSongTitle = function(title){
    this.songTitle = name;
  };

  Song.prototype.setSongAuthor = function(author){
    this.songAuthor = author;
  };

  Song.prototype.setSongLength = function(length){
    this.songLength = length;
  };

  Song.prototype.setSongListened = function(listening){
    this.songListened = listening;
  };

  Song.prototype.setImage = function(songImage){
    this.image = songImage;
  };


  export { Song };
