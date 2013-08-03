define(["jquery", "underscore", "parse", "models/Beer"],
    function ($, _, Parse, Beer) {

    var BeerCollection = Parse.Collection.extend({
        model: Beer,

        aggiorna: function (value) {
        	this.reset([
				    {name: value, id: 5, img: "css/micio.gif"},
				    {name: "Ida", id: 26, img: "css/micio.gif"},
				    {name: "Rob", id: 55, img: "css/micio.gif"}
			     ]);
			     return this;
        }
      });

    return BeerCollection;

  });
/* 

*/