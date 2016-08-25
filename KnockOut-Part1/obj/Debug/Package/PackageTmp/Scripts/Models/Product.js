/// <reference path="../knockout-3.4.0.js" />
/// <reference path="../jquery-2.2.3.intellisense.js" />

/****************************************************** This is our Model ********************/

var Product = function(Name, Price, Type){
    "use strict";

    var _name = ko.observable(Name),
        _price = ko.observable(Price),
        _type = ko.observable(Type);

    return {

        productname: _name,
        productprice: _price,
        producttype: _type

    };
};