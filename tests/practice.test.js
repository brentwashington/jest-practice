import { sum } from '../code/practice';
import { capitalize } from '../code/practice';

test('adds 1 + 2 to equals 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test('return a string with the first letter capitalized', () => {
    expect(capitalize('foobar')).toBe('Foobar');
});
