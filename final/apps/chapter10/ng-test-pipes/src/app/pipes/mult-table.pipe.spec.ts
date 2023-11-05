import { MultTablePipe } from './mult-table.pipe';

describe('MultTablePipe', () => {
  let pipe: MultTablePipe;

  beforeEach(() => {
    pipe = new MultTablePipe();
  })

  it('should return an empty array if the value of digit is not valid', () => {
    const digit = 0;
    const limit = 10;
    const outputArray = pipe.transform(null, digit, limit);
    expect(outputArray).toEqual([]);
  });

  it('should return an empty array if the value of limit is not valid', () => {
    const digit = 10;
    const limit = 0;
    const outputArray = pipe.transform(null, digit, limit);
    expect(outputArray).toEqual([]);
  });

  it('should return the correct multiplication table when both digit and limit inputs are valid', () => {
    const digit = 10;
    const limit = 2;
    const expectedArray = [{ digit: 10, factor: 1, result: 10 },
    { digit: 10, factor: 2, result: 20 },];
    const outputArray = pipe.transform(null, digit, limit);
    expect(outputArray).toEqual(expectedArray);
  });

  it('should round of the limit if it is provided in decimals', () => {
    const digit = 10;
    const limit = 3.5;
    const expectedArray = [
      {digit: 10, factor: 1, result: 10},
      {digit: 10, factor: 2, result: 20},
      {digit: 10, factor: 3, result: 30}
    ]; // rounded off to 3 factors instead of 3.5
    const outputArray = pipe.transform(null, digit, limit);
    expect(outputArray).toEqual(expectedArray);
  });

});
