/// <reference path="Models/Product.js" />
/// <reference path="knockout-3.4.0.js" />
/// <reference path="jquery-2.2.3.js" />


$(document).ready(function () {

    //Initiating only one Model
    var ProductViewModel = {

        product: Product("Beer", 2, "Beverage")
    };

    ko.applyBindings(ProductViewModel);


    //Initiating a Model Collection
    "use strict";
    var ProductCollectionVM = (function() {

        var collection = [
            Product("Pepsi", "$1.5", "Beverage"),
            Product("Coke", "$1.3", "Beverage"),
            Product("Mirinda", "$0.5", "Beverage")
        ];

        return{
            catalog : collection
        };
    })();

    ko.applyBindings(ProductCollectionVM);

});