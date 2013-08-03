define(["jquery", "underscore", "parse", "handlebars", "text!templates/dettaglio-birrificio.html", "views/DettaglioBirrificioItemView"],
    function ($, _, Parse, Handlebars, template, DettaglioBirrificioItemView) {

    var DettaglioBirrificioView = Parse.View.extend({


        template: Handlebars.compile(template),

        events: {
        },

        render: function (eventName) {
          $(this.el).html(this.template());
          var birre_simili= $(this.el).find("#lista_nostre_birre");
          birre_simili.empty();
          birre_simili.append(new DettaglioBirrificioItemView().render().el);
          return this;
        },
      });

    return DettaglioBirrificioView;

  });