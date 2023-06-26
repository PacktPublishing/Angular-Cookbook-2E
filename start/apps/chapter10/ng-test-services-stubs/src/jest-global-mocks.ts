const createLocalStorageMock = () => {
  const storage: Partial<Storage> = {};
  return {
    getItem: (key: string) => {
      return storage[key] ? storage[key] : null;
    },
    setItem: (key: string, value: string) => {
      storage[key] = value;
    },
  } as Storage;
};
Object.defineProperty(window, 'localStorage', {
  value: createLocalStorageMock(),
});

Object.defineProperty(window, 'alert', {
  value: jest.fn(),
});
