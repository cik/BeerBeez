define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var Birrifici = Parse.Object.extend("Birrifici", {
      defaults: {
        id: undefined,
      	name: undefined,
      	img: undefined
      }

      });

    return Birrifici;

  });