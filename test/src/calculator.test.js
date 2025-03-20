const calculator = require('../../src/calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
    expect(calculator.sum(2, 2)).toBe(4);
});

test('adds 2 + 2 not equals 5', () => {
    expect(calculator.sum(2, 2)).not.toBe(5);
});

test('subs 1 - 2 to equal -1', () => {
    expect(calculator.sub(1, 2)).toBe(-1);
});

test('subs 2 - 2 to equal 0', () => {
    expect(calculator.sub(2, 2)).toBe(0);
});

test('times 1 * 2 to equal 2', () => {
    expect(calculator.times(1, 2)).toBe(2);
});

test('times 2 * 2 to equal 4', () => {
    expect(calculator.times(2, 2)).toBe(4);
});

test('square 1 to equal 1', () => {
    expect(calculator.square(1)).toBe(1);
});

test('square 2 to equal 4', () => {
    expect(calculator.square(2)).toBe(4);
});

test('repeat text xx times 1 to equal xx', () => {
    expect(calculator.repeatTextTimes('xx', 1)).toBe('xx');
});

test('repeat text xxy times 2 to equal xxyxxy', () => {
    expect(calculator.repeatTextTimes('xxy', 2)).toBe('xxyxxy');
});
