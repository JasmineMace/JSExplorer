const { range, sum } = require('./Chapter4')


test('get array [1, 2, 3]', () => {
    expect(range(1, 3)).toEqual([1, 2, 3])
});