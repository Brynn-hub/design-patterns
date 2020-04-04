var store = {
  client: [],
  on: function(key, cb) {
    this.client[key] = this.client[key] || [];
    this.client[key].push(cb);
  },
  emit: function(key, data) {
    if (!Array.isArray(this.client[key])) {
      return;
    }

    this.client[key].forEach(cb => {
      cb(data);
    });
  },
  un: function(key) {
    if (!Array.isArray(this.client[key])) {
      return;
    }
    this.client[key].splice(this.client[key] - 1, 1);
  }
}