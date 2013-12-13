var Car = function(options) {
    if(!options) options = {};
    this.model = options.model || "dummy";
    this.year = options.year || 1990;
    this.miles = options.miles || 0;
}

var aCar = new Car();
console.log(aCar);

var modelT = new Car({model:"Ford model-T", year:1908, miles:10000000});
console.log(modelT);