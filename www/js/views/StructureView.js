define(["jquery", "underscore", "parse", "handlebars", "leaflet", "text!templates/structure.html"],
    function ($, _, Parse, Handlebars, L, template) {

    var StructureView = Parse.View.extend({

        id: "mainContainer", 

        initialize: function () {
          this.on("notopbar", this.notopbar);
          this.on("topbar_title", this.topbar_title);
          this.on("topbar_title_button1", this.topbar_title_button1);
          this.on("topbar_title_button2", this.topbar_title_button2);
          this.on("topbar_title_button3", this.topbar_title_button3);
          this.on("topbar_triplebutton", this.topbar_triplebutton);
      },

        events: {
          "touchend #preferiti": "preferiti",
          "touchend #topbeer": "topbeer",
          "touchend #grafo": "grafo",
          "touchend #about": "about",
          "touchend #vicino": "vicino",
          "touchend #back": "goBack",
          "touchend #vota": "votaview",
          "touchend #addprefer": "addprefer",
          "touchend #rightbutton1": "remove",
        },

        notopbar: function () {
          topbar.classList.add("notvisible");
        },

        topbar_title: function () {
          topbar.classList.remove("notvisible");
          topbar.classList.remove("nottitle");
          topbar.classList.add("notrightbutton");
          topbar.classList.add("nottriplebutton");
        },

        topbar_title_button1: function () {
          topbar.classList.remove("notvisible");
          topbar.classList.remove("nottitle");
          topbar.classList.remove("notrightbutton");
          topbar.classList.add("nottriplebutton");
          topbar.classList.remove("notrightbutton1");
          topbar.classList.add("notrightbutton2");
          topbar.classList.add("notrightbutton3");
        },

        topbar_title_button2: function () {
          topbar.classList.remove("notvisible");
          topbar.classList.remove("nottitle");
          topbar.classList.remove("notrightbutton");
          topbar.classList.add("nottriplebutton");
          topbar.classList.add("notrightbutton1");
          topbar.classList.remove("notrightbutton2");
          topbar.classList.add("notrightbutton3");
        },

        topbar_title_button3: function () {
          topbar.classList.remove("notvisible");
          topbar.classList.remove("nottitle");
          topbar.classList.remove("notrightbutton");
          topbar.classList.add("nottriplebutton");
          topbar.classList.add("notrightbutton1");
          topbar.classList.add("notrightbutton2");
          topbar.classList.remove("notrightbutton3");
        },

        topbar_triplebutton: function () {
          topbar.classList.remove("notvisible");
          topbar.classList.add("nottitle");
          topbar.classList.add("notrightbutton");
          topbar.classList.remove("nottriplebutton");
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
            this.topbar = document.getElementById("topbar");
          }*/
        },

      });

    return StructureView;

  }); 