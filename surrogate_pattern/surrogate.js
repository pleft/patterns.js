// our Superclass
var Vehicle = function(options) {
    console.log("Vehicle constructor called");
    var options= options || {};
    this.model = options.model || "car";
    this.doors = options.doors || 4;

    if(this.model === 'moto') {
        this.wheels = 2;
        this.doors = 0;
    }
    if(this.model === 'truck') {
        this.wheels = 6;
        this.doors = 2;
    }
};

// one potential Subclass of Vehicle
var Moto = function(options) {
    console.log("Moto constructor called");
    this.model='moto';
};
Moto.prototype = new Vehicle();

console.log("\nCreating motorcycle with no surrogate:");
var cbr600 = new Moto();
console.log(cbr600.doors);          //4 doors for a bike? no no, this happens because the Vehicle constructor has been called before new Moto() was called
console.log(cbr600 instanceof Vehicle); //it is a Vehicle indeed

// another one potential Subclass of Vehicle
var Truck = function(options) {
    console.log("Truck constructor called");
    var options= options || {};
    options.model = 'truck';

    Vehicle.apply(this, [options]);
};

console.log("\nCreating a truck with no surrogate:");
var scania = new Truck();
console.log(scania);                    //seems we have a nice scania truck but is it a vehicle?
console.log(scania instanceof Vehicle); // no, it is not!

//correct the above inefficiency with surrogate
var Surrogate = function() {};
Surrogate.prototype = Vehicle.prototype;
Truck.prototype = new Surrogate();

console.log("\nCreating a truck with surrogate:");
var volvo = new Truck();
console.log(volvo);                     //a shiny volvo truck
console.log(volvo instanceof Vehicle);  //is of course a vehicle!

