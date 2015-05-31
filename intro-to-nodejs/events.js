/**
 * Created by pado on 5/30/15.
 */

/**
 Non-blocking: callback or events

 callback:                        events:
 - request/reply                  - publish/subscribe
 - no rerults until all results   - act on results as they arrive
 - either error or results        - partial results before error

 */

// Callbacks:
getThem(param, function (err, items) {
  // check the error
  // operate on items
});

//Events:
var results = getThem(param);

results.on('item', function (item) {
  // do something on item
});

results.on('done', function () {
  // done
});

results.on('error', function (err) {
  // react to error
});


/**
 events.EventEmitter

 emitter.emit(event, [args]);  ->  emitter.on(event, listerer);

 - The 'event' can be any string.
 - An event can be emitted with zero or more arguments.
 - The set of events and their arguments constitute a interface exposed to the subscriber by the publisher.

 Common patterns to create an event emitter
 - As a return value from a function call
 - Objects that extends EventEmitter to emit events themselves

 */