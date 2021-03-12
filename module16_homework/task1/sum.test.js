const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test('adds Infinity + 5 to equal Infinity', () => {
    expect(sum(Infinity, 5)).toBe(Infinity);
});
