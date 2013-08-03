define(["jquery", "underscore", "parse", "handlebars", "text!templates/topbeers.html", "views/TopBeerItemView"],
    function ($, _, Parse, Handlebars, template, TopBeerItem) {

    var TopBeerView = Parse.View.extend({


        template: Handlebars.compile(template),

        events: {
        },


        render: function (eventName) {
          $(this.el).html(this.template());
          var completamento= $(this.el).find(".ratelist");
          completamento.empty();
          completamento.append(new TopBeerItem({model: {id: 31}}).render().el);
          return this;
        }
      });

    return TopBeerView;

  });