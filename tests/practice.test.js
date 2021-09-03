import { sum } from '../code/practice';
import { capitalize } from '../code/practice';
import { reverseString } from '../code/practice';
import { calculator } from '../code/practice';

test('adds 1 + 2 to equals 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('returns a string with the first letter capitalized', () => {
    expect(capitalize('foobar')).toBe('Foobar');
});

test('takes a string and returns it reversed', () => {
    expect(reverseString('foobar')).toBe('raboof');
});

test('calculator object that contains four basic operations', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.divide(4, 2)).toBe(2);
});
