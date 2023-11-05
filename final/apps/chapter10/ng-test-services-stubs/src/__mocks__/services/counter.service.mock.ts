import { CounterService } from "../../app/services/counter.service";

const counterServiceMock: CounterService = {
  storageKey: 'counterValue',
  getFromStorage: jest.fn(),
  saveToStorage: jest.fn(),
};
export default counterServiceMock;
