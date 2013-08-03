define(["jquery", "underscore", "parse", "handlebars", "text!templates/preferiti.html"],
    function ($, _, Parse, Handlebars, template) {

    var PreferitiView = Parse.View.extend({


        template: Handlebars.compile(template),

        events: {
          "touchend .touchevent": "prova"
        },


        prova: function (eventName) {
          console.log(eventName.currentTarget.getAttribute("value"));
        },

        render: function (eventName) {
          //window.localStorage.setItem("preferiti", JSON.stringify([{name: "Yehuda", id: "1"},
               //                                 {name: "Carl", id: "2"},
                 //                               {name: "Alan", id: "3"}]));
          var beerCollection= JSON.parse(window.localStorage.getItem("preferiti"));

          $(this.el).html(this.template({birre:beerCollection}));
          return this;
        },
      });

    return PreferitiView;

  });