var Car = function(options) {
    if(!options) options = {};
    this.model = options.model || "dummy";
    this.year = options.year || 1990;
    this.miles = options.miles || 0;
};

var mx5 = new Car({model: "Mazda mx-5", year:2008, miles: 50000});
console.log(mx5);

//simple decorators
mx5.doors = 2;
mx5.softtop = true;
console.log(mx5);
console.log("\n------------------------------------------------\n");

//another way
var cosworthDecorator = function(car) {
    car.version = "Cosworth";
    car.engine = "2000cc";
    car.bhp = 220;
    car.transmission = "4x4";
    return car;
}

var fordSierra = new Car({model: "Ford Sierra", year:1992, miles: 100000});
console.log("a humble ford sierra: ");
console.log(fordSierra);

console.log("\na \"decorated\" sierra cosworth: ");
var mightyCosworth = cosworthDecorator(fordSierra);
console.log(mightyCosworth);