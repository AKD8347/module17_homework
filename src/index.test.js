const multiply = require('./index.js');

xtest('multiply 1 * 0 to equal 1', () => {
    expect(multiply(1, 0)).toBe(0);
});
