define(["jquery", "underscore", "parse", "handlebars", "text!templates/vota.html"],
    function ($, _, Parse, Handlebars, template) {

    var VotaView = Parse.View.extend({


        template: Handlebars.compile(template),

        events: {
        },

        render: function (eventName) {
          $(this.el).html(this.template());
          return this;
        }
      });

    return VotaView;

  });