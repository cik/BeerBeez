define(["jquery", "underscore", "parse", "handlebars", "text!templates/topbeer-item.html"],
    function ($, _, Parse, Handlebars, template) {

    var TopBeerItemView = Parse.View.extend({

        tagName: "li",

        events: {
          "touchend": "dettaglio"
        },

        template: Handlebars.compile(template),

        initialize: function () {
         /* this.model.bind("change", this.render, this);
          this.model.bind("destroy", this.close, this);*/
        },

        render: function (eventName) {
          /*var ad = this.model.toJSON();
          $(this.el).html(this.template(ad));*/
           $(this.el).html(this.template());
          return this;
        },

        dettaglio: function () {
          Parse.history.navigate("dettagliobirra/" + this.model.id, {trigger: true});
        }
      });

    return TopBeerItemView;

  });