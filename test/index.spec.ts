import { add, multiply, divide, subtract } from '../src';

describe('index', () => {
  describe('myPackage', () => {
    it('add', () => {
      const message = 3;
      const result = add(1, 2);
      expect(result).toEqual(message);
    });
    it('subtract', () => {
      const message = 3;
      const result = subtract(5, 2);
      expect(result).toEqual(message);
    });
    it('divide', () => {
      const message = 3;
      const result = divide(6, 2);
      expect(result).toEqual(message);
    });
    it('multiply', () => {
      const message = 3;
      const result = multiply(1, 3);
      expect(result).toEqual(message);
    });
  });
});
