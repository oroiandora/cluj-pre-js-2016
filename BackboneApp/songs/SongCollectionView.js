var SongCollectionView = Backbone.View.extend({
  template: _.template("<p>List of songs</p><div class='song'></div><ul class='SongCollection-view'></ul>"),
  _nestedView: [],
  renderNestedView: function(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render: function () {
    this.$el.html(this.template());
    var that = this;
    var partEl = $(this.el.querySelector('.SongCollection-view'));
    this.collection.forEach(function(model) {
      var songModelView = new SongModelView({
        model: new SongModel()
      });
      songModelView.render();
      this.renderNestedView(songModelView, $(this.el.querySelector('.song')));
      return this;
    });
}

});
