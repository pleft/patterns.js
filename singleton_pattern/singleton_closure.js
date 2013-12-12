function User() {

    // the cached instance
    var instance;

    // constructor
    User = function() {
        return instance;
    }

    User.prototype = this;

    instance = new User();

    //reset the instance's constructor;
    instance.constructor = User;

    instance.username = "foobar";

    return instance;
}

var user1 = new User();
var user2 = new User();
user2.username = "barfoo";

console.log(user1.username);
console.log(user2.username);