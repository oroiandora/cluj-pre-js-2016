import { PlaylistModelView } from './PlaylistModelView.js';
// var PlaylistCollectionView = Backbone.View.extend({
//   appendIndividualPlaylist:function(view){
// this.$el.append(view.el);
//  },
//   render: function () {
//       var that = this;
//       console.log(this.collection);
//       this.collection.forEach(function(model) {
//         var playlistModelView = new PlaylistModelView({
//           model: model
//         });
//
//         playlistModelView.render();
//         that.$el.appendIndividualPlaylist(playlistModelView);
//
//       });
//     }
// });

var PlaylistCollectionView = Backbone.View.extend({
  // idName: 'template-allPlaylists',
  render: function () {
    // this.$el.html(this.template());
      var that = this;
      this.collection.forEach(function(model) {
        var playlistModelView = new PlaylistModelView({
          model: model
        });
        that.$el.append(playlistModelView.render().el);
      });
    }
});

export{ PlaylistCollectionView };
