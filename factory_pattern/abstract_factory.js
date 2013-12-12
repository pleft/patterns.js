var Sedan = function(options) {
    this.model = options.model || "mazda6";
    this.doors = options.doors || 4;
    this.color = options.color || "black";
};
Sedan.prototype.make = "Mazda";

var Cabrio = function(options) {
    this.model = options.model || "mx-5";
    this.doors = options.doors || 2;
    this.color = options.color || "racing green";
};
Cabrio.prototype.make = "Mazda";

var City = function(options) {
    this.model = options.model || "mazda2";
    this.doors = options.doors || 3;
    this.color = options.color || "white";
};
City.prototype.make = "Mazda";


//Abstract factories registers and returns factories per type of vehicle
var AbstractFactory = (function() {

    var make = "Mazda";
    var types = {}; //object, can also work as an array []

    return {
        getVehicle: function(type, customizations) {
            var Vehicle = types[type];
            return (Vehicle? new Vehicle(customizations): null);
        },

        registerVehicle: function(type, Vehicle) {
            var proto = Vehicle.prototype;
            //only register vehicles of our make e.g. Ford
            if(proto.make === make) {
                types[type] = Vehicle;
            }

            return AbstractFactory;
        },

        getAvailableFactories: function() {
            return types;
        }
    }
})();

AbstractFactory.registerVehicle("Sedan", Sedan);
AbstractFactory.registerVehicle("Cabrio", Cabrio);
AbstractFactory.registerVehicle("City", City);

var myMx5 = AbstractFactory.getVehicle("Cabrio", {color: "black", model: "mx-5 niseko"});
console.log(myMx5);

var anotherMx5 = AbstractFactory.getVehicle("Cabrio", {});
console.log(anotherMx5);

var aMightySixer = AbstractFactory.getVehicle("Sedan", {color: "black", model: "mazda6 MPS"});
console.log(aMightySixer);