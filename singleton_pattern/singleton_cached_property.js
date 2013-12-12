// jQuery's "$" is the most well known singleton_pattern!!!

function User() {
    // do we have an existing instance?
    if (typeof User.instance === 'object') {
        return User.instance;
    }

    this.username = 'foobar';

    // cache
    User.instance = this;
}

var user1 = new User();
var user2 = new User();

console.log("------ Singleton -------");
console.log("user1:" + user1.username);
console.log("user2:" + user2.username);

//check whether it is really a singleton_pattern
user2.username="barfoo";

console.log("user1:" + user1.username);
console.log("user2:" + user2.username);


// non singleton_pattern equivalent example
function NewUser() {
    this.username = "foobar";
}

var user3 = new NewUser();
var user4 = new NewUser();
user4.username = "barfoo";

console.log("\n------ Non Singleton -------");
console.log("user3:" + user3.username);
console.log("user4:" + user4.username);