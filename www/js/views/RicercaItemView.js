define(["jquery", "underscore", "parse", "handlebars", "text!templates/ricerca-item.html"],
    function ($, _, Parse, Handlebars, template) {

    var RicercaItemView = Parse.View.extend({

        tagName: "li",

        events: {
         "touchend": "goGrafo"
        },

        template: Handlebars.compile(template),

        initialize: function () {
         /*
          this.model.on("destroy", this.close, this);*/
        },

        render: function (eventName) {
          var beer = this.model.toJSON();
          $(this.el).html(this.template(beer));
          return this;
        },

        goGrafo: function () {
           grafoView = undefined;
           Parse.history.navigate("grafo/"+ this.model.id, {trigger: true});
        }
      });

    return RicercaItemView;

  });