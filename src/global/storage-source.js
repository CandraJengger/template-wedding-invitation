const StorageSource = {
  setItemStorage(item, value) {
    return localStorage.setItem(item, value);
  },

  getItemStorage(item) {
    return localStorage.getItem(item);
  },

  removeItemFromStorage(item) {
    return localStorage.removeItem(item);
  },

  clearStorage() {
    return localStorage.clear();
  },
};

export default StorageSource;
