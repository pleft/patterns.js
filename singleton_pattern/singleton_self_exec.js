var User;
(function() {
    var instance;
    var username = "foobar";
    User = function() {
        if(instance) {
            return instance;
        }

        instance = this;
        instance.showUsername = function() {
            return username;
        }
        instance.setUsername = function(string) {
            username = string;
        }
    };
})();

var user1 = new User();
var user2 = new User();
user2.setUsername("barfoo");

console.log(user1.showUsername());
console.log(user2.showUsername());