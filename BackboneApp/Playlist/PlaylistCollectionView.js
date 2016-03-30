var PlaylistCollectionView = Backbone.View.extend({
  template: _.template("<p>List of playlists</p><div class='playlist'></div><ul class='PlaylistModel-view'></ul>"),
  _nestedView: [],
  renderNestedView: function(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render: function () {
    this.$el.html(this.template());
    var that = this;
    var partEl = $(this.el.querySelector('.PlaylistModel-view'));

    this.collection.forEach(function(model) {
        var playlistModelView = new PlaylistModelView({
          model: model
        });
        playlistModelView.render();
        that.renderNestedView(playlistModelView, partEl);
    });


  }
});
