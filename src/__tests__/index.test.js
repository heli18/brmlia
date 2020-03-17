/**
 * First test to see if CI stuff / testing works
 * @jest-environment jsdom
 */

test('test jest uses jsdom environment', () => {
  const elem = document.createElement('div');
  expect(elem).not.toBeNull();
});
