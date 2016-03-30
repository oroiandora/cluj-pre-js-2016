var PlaylistModelView = Backbone.View.extend({
  tagName: 'li',
  className: 'PlaylistModel-view',
  template: _.template('<span class="name"><%= name %></span>'),
  render: function () {
    debugger;
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
