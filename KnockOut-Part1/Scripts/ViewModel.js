/// <reference path="Models/Product.js" />
/// <reference path="knockout-3.4.0.js" />
/// <reference path="jquery-2.2.3.js" />


$(document).ready(function () {

    //Initiating only one Model
    var ProductViewModel = {

        product: Product("Beer", 2, "Beverage")
    };

    ko.applyBindings(ProductViewModel, document.getElementById('tbl1'));


    //Initiating a Model Collection
    /*"use strict";
    var ProductCollectionVM = (function() {

        var collection = [
            Product("Pepsi", "$1.5", "Beverage"),
            Product("Coke", "$1.3", "Beverage"),
            Product("Mirinda", "$0.5", "Beverage")
        ];

        return{
            collection: collection
        };
    })();

    ko.applyBindings(ProductCollectionVM,document.getElementById('tbl2'));*/

    var newcollection = {

        collection: [
            Product("Pepsi", "$1.5", "Beverage"),
            Product("Coke", "$1.3", "Beverage"),
            Product("Mirinda", "$0.5", "Beverage")
        ]
    };

    ko.applyBindings(newcollection, document.getElementById('tbl2'));
    
    //ko.applyBindings({
    //    collection: [
    //        Product("Scotch", 2, "Beverages"),
    //        Product("Whisky", 2, "Beverages")
    //    ]
    //}, document.getElementById('tbl2'));

});