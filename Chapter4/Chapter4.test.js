const { range, sum, reverseArray, reverseArrayInPlace } = require('./Chapter4')


test('get array [1, 2, 3]', () => {
    expect(range(1, 3)).toEqual([1, 2, 3]);
});

test('calculate the sum of [1, 2, 3]', () => {
    expect(sum(range(1, 3))).toEqual(6);
});

test('reverse [1, 2, 3] ', () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
});

test('reverse [3, 2, 1] ', () => {
    expect(reverseArrayInPlace([3, 2, 1])).toEqual([1, 2, 3]);
});