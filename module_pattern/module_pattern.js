var Module = (function() {

    var module = function() {
        this.title = "module_pattern";
    };
    return module;
})();

var mymodule = new Module();
console.log(mymodule.title);

