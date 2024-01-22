//  In order to not 'event prop drill' we create a global event bus.
// We do this, to avoid long event listener chains because, events trickle up but, only to the direct parent and if a nested child should emit something to an outer parent.

// We use the map to manage our events.
const events = new Map();

export default {
  // Define on method with $ just to follow emit convention, not required.
  $on(eventName, fn) {
    // If the event already exists, we add it to the set.
    if(!events.has(eventName)) {  // If we don't have it
      events.set(eventName, []); // We will add the event and give it an array so we can add multiple functions to it.
    }
    events.get(eventName).push(fn);
  },

  $off(eventName, fn) {
    throw { message: 'Not implemented yet' };
  },

  $emit(eventName, data) {
    if(events.has(eventName)) {
      events.get(eventName).forEach(fn => fn(data));
    }
  }
};

