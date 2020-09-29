// we create an emitter constructer function. The emitter will
function Emitter() {
    this.events = {};
}

// here we are creating "on" and "emit" functions that we apply to the Emitter
// and that will be called later (see app.js)
// We could have named them anything else like "listen" and "go" for example,
// this is the name with which we will then invoke them in app.js (in this example, eveything could be done in the same file)
// Here we create our own events, but there are build in nodejs events with build in
// functions that are called "on" and "emit" (see https://nodejs.org/api/events.html)
Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

// Now we emit an event, we respond to the initial event. If there is a type (ex: click)
// and iterates over all the functions that are attributed to that "type"
Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;