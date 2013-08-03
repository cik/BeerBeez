define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var Beer = Parse.Object.extend("Beer", {
      defaults: {
        id: undefined,
      	name: undefined,
      	img: undefined,
        birrificio: undefined,
        graduazione: undefined,
        tipologia: undefined,
        fermentazione: undefined
      }

      });

    return Beer;

  });