export interface Logger {
  log: (str: string) => void;
  retrieveLogs: () => string[];
  saveLogs: (val: string) => void;
}
