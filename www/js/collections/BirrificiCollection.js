define(["jquery", "underscore", "parse", "models/Birrifici"],
    function ($, _, Parse, Birrifici) {

    var BirrificiCollection = Parse.Collection.extend({
        model: Birrifici
      });

    return BirrificiCollection;

  });