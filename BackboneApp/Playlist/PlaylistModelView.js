var PlaylistModelView = Backbone.View.extend({
  className: 'playlist-card',
  renderTemplate: function (selectorString, options) {
    var templateText = document.querySelector(selectorString).innerText;
    var compiled = _.template(templateText);
    if (options != null) {
      return compiled(options);
    }
    return compiled();
  },

  template: function(data){

    return this.renderTemplate('#template-allPlaylists',data);
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

export { PlaylistModelView };
