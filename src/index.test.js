const multiply = require('./index.js');

test('multiply 1 * 0 to equal 1', () => {
    expect(multiply(1, 0)).toBe(0);
});
