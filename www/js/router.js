define(["jquery", "underscore", "parse", "collections/BeerCollection", "models/Beer", "views/MapView", "views/StructureView", "views/RicercaView", "views/TopBeerView", "views/PreferitiView", "views/AboutView", "views/GrafoView", "views/DettaglioBirraView", "views/VotaView", "views/DettaglioBirrificioView"],
    function ($, _, Parse, BeerCollection, Beer, MapView, StructureView, Ricerca, TopBeer, Preferiti, About, GrafoView, DettaglioBirraView, VotaView, DettaglioBirrificioView) {

    var AppRouter = Parse.Router.extend({

      routes: {
        "": "structure",
        "ricerca": "ricerca",
        "topbeer": "topbeer",
        "preferiti": "preferiti",
        "about": "about",
        "grafo/:id": "grafo",
        "dettagliobirra/:id": "dettagliobirra",
        "dettagliobirrificio": "dettagliobirrificio",
        "votaview/:id": "votaview",
        "map": "map"
      },

      initialize: function () {
        this.currentView = undefined;
        grafoView = undefined;
        window.localStorage.setItem("preferiti", JSON.stringify(new BeerCollection()));
        //this.ads.query = new Parse.Query(Ad);
      },

      structure: function () {
        if(!this.structureView) {
          this.structureView = new StructureView();
          this.structureView.render();
          this.topbar = this.structureView.$el.find("#topbar");
          this.navigationbar = this.structureView.$el.find("#navigationbar");
          this.contents = this.structureView.$el.find("#content #contents");
        }
        this.ricerca();
      },

      ricerca: function () {
        var page = new Ricerca({
          model: new BeerCollection()
        });
        this.changePage(page);
      },

      topbeer: function () {
        var page = new TopBeer({
        });
        this.changePage(page);
      },

      preferiti: function () {
        var page = new Preferiti({
        });
        this.changePage(page);
      },

      about: function () {
        var page = new About({
        });
        this.changePage(page);
      },

      grafo: function (id) {
        if(grafoView){
            this.currentView.remove();
           this.currentView.off();
            topbar.classList.add("notvisible");
            this.currentView = grafoView;
           this.contents.append($(grafoView.el));
        } else{
            var page = new GrafoView({
              model: id,
              collection: new BeerCollection()
            });
            grafoView = page;
            this.changePage(page);
        }
      },

      map: function () {
        var page = new MapView({
          model: this.ads
        });
        this.changePage(page);
      },

      dettagliobirra: function (id) {
        var page = new DettaglioBirraView({
          model: id,
          collection: new BeerCollection()
        });
        this.changePage(page);
      },

      dettagliobirrificio: function () {
        var page = new DettaglioBirrificioView({
        });
        this.changePage(page);
      },

      votaview: function () {
        var page = new VotaView({
        });
        this.changePage(page);
      },

      changePage: function (page) {
        if(this.currentView) {
           this.currentView.remove();
           this.currentView.off();
        }
        this.currentView = page;
        if(this.currentView.topbar)
          this.structureView.trigger(this.currentView.topbar);
        page.render();
        this.contents.append($(page.el));
        this.currentView.trigger("inTheDom");   
      }

    });

    return AppRouter;

  });
