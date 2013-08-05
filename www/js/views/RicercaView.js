define(["jquery", "underscore", "parse", "handlebars", "text!templates/ricerca.html", "views/RicercaItemView"],
    function ($, _, Parse, Handlebars, template, RicercaItemView) {

    var RicercaView = Parse.View.extend({


        template: Handlebars.compile(template),
        topbar: "notopbar",

        initialize: function () {
          this.model.on("reset", this.changelist, this);
        },

        events: {
          //campo di ricerca su update che aggiorna la collection
          "keyup #search": "update",
        },

        update: function (eventName) {
          console.log(this.a.attr("value"));
          this.model.aggiorna(this.a.attr("value"));       
        },

        changelist: function (eventName) {
          this.completamento.empty();
          _.each(this.model.models, function (beer) {
            this.completamento.append(new RicercaItemView({
              model: beer
            }).render().el);
          }, this);
        },

        render: function (eventName) {
          $(this.el).html(this.template());
          this.completamento= $(this.el).find("#completamento ul");
          this.a= $(this.el).find("#search");
          return this;
        }
      });

    return RicercaView;

  });