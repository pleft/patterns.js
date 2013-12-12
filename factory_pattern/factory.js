
var Car = function(options) {
    this.doors = options.doors || 4;
    this.color = options.color || "white";
    this.state = options.state || "new";
};

var Truck = function(options) {
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "black";
    this.state = options.state || "used";
};

//factory
function VehicleFactory() {};
VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = function(options) {
    if(options.vehicleClass === 'Car') {
        this.vehicleClass = Car;
    } else {
        this.vehicleClass = Truck;
    };

    return new this.vehicleClass(options);
};

var factory = new VehicleFactory();
var car = factory.createVehicle({vehicleClass: 'Car', doors: 2});
var truck = factory.createVehicle({vehicleClass: 'Truck', wheelSize: 'extra large'});
console.log(car);
console.log(truck);