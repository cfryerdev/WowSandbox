const Store = {
 
    set: function (key, value) {
      if (this.hasValue(key)) {
        this.remove(key);
      }
      sessionStorage.setItem(key, value);
      return true;
    },

    get: function (key) {
      return sessionStorage.getItem(key);
	  },

    remove: function (key) {
      if (this.hasValue(key)) {
        sessionStorage.removeItem(key);
      }
      return true;
	  },

    has: function (key) {
      var value = sessionStorage.getItem(key);
      return !(value === "" || value === undefined);
	  }
}

export default Store;