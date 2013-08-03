define(["jquery", "underscore", "parse", "handlebars", "leaflet", "text!templates/structure.html"],
    function ($, _, Parse, Handlebars, L, template) {

    var StructureView = Parse.View.extend({

        id: "mainContainer", 

        events: {
          "touchend #preferiti": "preferiti",
          "touchend #topbeer": "topbeer",
          "touchend #grafo": "grafo",
          "touchend #about": "about",
          "touchend #vicino": "vicino",
          "touchend #back": "goBack",
          "touchend #vota": "votaview",
          "touchend #addprefer": "addprefer",
          "touchend #rightbutton": "remove"
        },

        goBack: function () {
          window.history.back();
        },

        votaview: function () {
          console.log("vota");
          Parse.history.navigate("votaview/" + 876, {trigger: true});
        },

        remove: function () {
          console.log("remove");
          var beerCollection= JSON.parse(window.localStorage.getItem("preferiti"));
          beerCollection.splice(1,1);
          window.localStorage.setItem("preferiti", JSON.stringify(beerCollection));
        },

        addprefer: function () {
          console.log("prefer");
          var beerCollection= JSON.parse(window.localStorage.getItem("preferiti"));
          beerCollection.push({name: "Yehuda", id: "1"});
          window.localStorage.setItem("preferiti", JSON.stringify(beerCollection));
        },

        preferiti: function () {
          Parse.history.navigate("preferiti", {trigger: true});
        },

        topbeer: function () {
          Parse.history.navigate("topbeer", {trigger: true});
        },

        grafo: function () {
          if(grafoView){
          Parse.history.navigate("grafo/"+0, {trigger: true});
          } else{
          Parse.history.navigate("ricerca", {trigger: true});
          }
        },

        about: function () {
          Parse.history.navigate("about", {trigger: true});
        },

        vicino: function () {
          Parse.history.navigate("map", {trigger: true});
        },

        template: Handlebars.compile(template),

        render: function (eventName) {
          $(this.el).html(this.template());
          $('body').append($(this.el));
          return this;
          /*if(!this.topbar) {
            this.topbar = document.getElementById("#topbar");
          }*/
        },

      });

    return StructureView;

  }); 