define(["jquery", "underscore", "parse", "handlebars", "text!templates/about.html"],
    function ($, _, Parse, Handlebars, template) {

    var AboutView = Parse.View.extend({


        template: Handlebars.compile(template),

        events: {
          
        },

        render: function (eventName) {
          $(this.el).html(this.template());
          return this;
        },
      });

    return AboutView;

  });