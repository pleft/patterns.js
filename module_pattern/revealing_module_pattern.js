var Module = (function() {

    var that = this;    //keep current scope to "that"
    var title = "";   //private property

    var getTitle = function() {               //private method that gets revealed in module.prototype
        return that.title;
    }

    var setTitle = function(title) {            //private method that never gets revealed, user can never set the title property
        that.title = title;
    }

    //constructor
    var module = function() {
        setTitle("revealing_module_pattern");
    };

    module.prototype = {
        constructor: module,
        showTitle: getTitle                 //choose to reveal getTitle() function under the name showTitle
    };

    return module;
})();

var mymodule = new Module();
console.log(mymodule.showTitle());

//extensible
Module.prototype.extendedMethod = function () {
    return "extended_method";
};



console.log(mymodule.extendedMethod());