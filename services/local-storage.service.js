const asyncLocalStorage = {
  setItem: async (key, value) => localStorage.setItem(key, value),
  getItem: async (key) => localStorage.getItem(key),
}

export default asyncLocalStorage;
