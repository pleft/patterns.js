// define Observable
var Observable = function() {
    this.subscribers = [];
};
Observable.prototype.subscribe = function(observer) {
    this.subscribers.push(observer);
};

Observable.prototype.unsubscribe = function(observer) {
    var i = 0,
        len = this.subscribers.length;

    // Iterate through the array and if the callback is
    // found, remove it.
    for (; i < len; i++) {
        if (this.subscribers[i] === observer) {
            this.subscribers.splice(i, 1);
            // Once we've found it, we don't need to
            // continue, so just return.
            return;
        }
    }
};

Observable.prototype.notifyObservers = function() {
    var i = 0,
        len = this.subscribers.length;
    for(; i<len; i++) {
        var subscriber = this.subscribers[i];
        //call subscriber's onUpdate
        subscriber.onUpdate();
    }

}

// define Observer
var Observer = function() {
    this.callback;
};
Observer.prototype.addCallback = function(callback) {
    this.callback = callback;
}
Observer.prototype.onUpdate = function() {
    this.callback();
}


// testing

var testObserver1 = new Observer();
testObserver1.addCallback(function() {console.log("testObserver1 updated")});

var testObserver2 = new Observer();
testObserver2.addCallback(function() {console.log("testObserver2 updated")});

var testObserver3 = new Observer();
testObserver3.addCallback(function() {console.log("testObserver3 updated")});

var testObservable = new Observable();
testObservable.subscribe(testObserver1);
testObservable.subscribe(testObserver2);
testObservable.subscribe(testObserver3);
testObservable.notifyObservers();

console.log("\nUnsubscribing testObserver1");

testObservable.unsubscribe(testObserver1);
testObservable.notifyObservers();
