import { PlaylistCollectionView } from './Playlist/PlaylistCollectionView.js';
import { PlaylistsCollection } from './Playlist/playlistsCollection.js';

function viewPlaylists () {
  const playlistCollection = new PlaylistsCollection();
  playlistCollection.fetch()
  .done(() => {
    const playlistCollectionView = new PlaylistCollectionView({
      collection: playlistCollection,
      el: document.getElementById('container')
    });
    // debugger;
    playlistCollectionView.render();
    // $('#playlistContent').append(playlistCollectionView.el);
  });
};

export { viewPlaylists };
