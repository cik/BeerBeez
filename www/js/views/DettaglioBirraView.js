define(["jquery", "underscore", "parse", "handlebars", "text!templates/dettaglio-birra.html", "views/VotaView", "views/RicercaItemView"],
    function ($, _, Parse, Handlebars, template, VotaView, RicercaItemView) {

    var DettaglioBirraView = Parse.View.extend({


        template: Handlebars.compile(template),
        topbar: "topbar_triplebutton",

        events: {
          "touchend #birrificio": "dettagliobirrificio"
        },

        dettagliobirrificio: function () {
          Parse.history.navigate("dettagliobirrificio", {trigger: true});
        },

        render: function (eventName) {
          $(this.el).html(this.template({commenti:[]}));
          var birre_simili= $(this.el).find("#lista_birre_simili");
          birre_simili.empty();
          _.each(this.model.models, function (beer) {
            this.birre_simili.append(new RicercaItemView({
              model: beer
            }).render().el);
          }, this);
          return this;
        },
      });

    return DettaglioBirraView;

  });