class LocalStorageMock {
  private storage: Partial<Storage> = {};
  
  getItem(key: string) {
    return this.storage[key] ? this.storage[key] : null;
  }
  
  setItem(key: string, value: string) {
    this.storage[key] = value;
  }
}

Object.defineProperty(window, 'localStorage', {
  value: new LocalStorageMock(),
});

Object.defineProperty(window, 'alert', {
  value: jest.fn(),
});
