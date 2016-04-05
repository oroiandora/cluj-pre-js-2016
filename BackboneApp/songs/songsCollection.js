import { SongModel } from './songModel.js';
const SongsCollection = Backbone.Collection.extend({
  model: SongModel
  // songsFromJson(arrayOfSongObject){
  //    arrayOfSongsObject.map(function(songObjects){
  //      return songAttributes = {
  //        songImage : songObject.songs.gsx$image.$t,
  //        songName : songObject.songs.gsx$name.$t,
  //        songLength : songObject.songs.gsx$length.$t
  //      };
  //    }
  //  )},
  // setCollection(songAttributes){
  //   this.songAttributes = songAttributes;
  // }



});

export { SongsCollection };
