//revealing module pattern with facade pattern together
var FacadeModule = (function() {

    var privateMethod1 = function() {
        console.log("privateMethod1");
    };

    var privateMethod2 = function() {
        console.log("privateMethod2");
    };

    var Module = function() {};
    Module.prototype = {
        constructor: Module,
        exposedMethod1: privateMethod1,      //reveal privateMethod1
        exposedMethod2: function() {         //facade
            console.log("this is a facade!");
            privateMethod1();
            privateMethod2();
        }
    }

    return Module;
})();

var myModule = new FacadeModule();
myModule.exposedMethod2();