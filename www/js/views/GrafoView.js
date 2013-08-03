define(["jquery", "underscore", "parse", "handlebars", "text!templates/grafo.html"],
    function ($, _, Parse, Handlebars, template) {

    var GrafoView = Parse.View.extend({


        template: Handlebars.compile(template),

        events: {
          
        },

        render: function (eventName) {
          $(this.el).html(this.template({beerId:this.model}));
          return this;
        },
      });

    return GrafoView;

  });