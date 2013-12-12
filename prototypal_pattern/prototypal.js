var PrototypeObject = function() {
    var id = 1;

    this.getId = function() {
        return id;
    }
}

var MyObject = function() {
    this.name = "test";
}
MyObject.prototype = new PrototypeObject();

var obj = new MyObject();
console.log(obj.name);
console.log(obj.getId());


// another way:

var obj2 = Object.create(new PrototypeObject());
obj2.name = "test2";
console.log(obj2.name);
console.log(obj2.getId());
