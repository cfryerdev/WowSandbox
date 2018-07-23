const subscribers = {};

const EventSystem = {
    /**
     * @param {event} event - The event name
     * @param {data} data - The data passed through to the event subscriber
     */
    publish: function (event, data) {
      var queue = subscribers[event];
      if (typeof queue === 'undefined') {
        return false;
      }
      while(queue.length > 0) {
        (queue.shift())(data);
      }
      return true;
    },

    /**
     * @param {event} event - The event name
     * @param {data} data - The data passed through to the event subscriber
     */
    subscribe: function(event, data) {
      if (typeof subscribers[event] === 'undefined') {
        subscribers[event] = [];
      }
      subscribers[event].push(data);
    },

    /**
     * @param {obj} obj - The event name
     */
    unsubscribe: function unsubscribe(obj) {
      if (subscribers && subscribers.forEach) {
        subscribers.forEach(function (eventName) {
          var eventSubscribers = subscribers[eventName];
          if (!eventSubscribers) return;
          eventSubscribers.splice(eventSubscribers.indexOf(obj), 1);
        });
      }
	  }
}

export default EventSystem;