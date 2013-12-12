var User = (function(){

    var instance;

    function init() {

        var username = "foobar";

        return {
            showUsername: function() {
                return username;
            },

            setUsername: function(string) {
              username = string;
            }
        }
    };

    return {
        getInstance: function() {
            if(!instance) {
                instance = init();
            }

            return instance;
        }
    };
})();

var user1 = User.getInstance();
var user2 = User.getInstance();
user2.setUsername("barfoo");
console.log(user1.showUsername());