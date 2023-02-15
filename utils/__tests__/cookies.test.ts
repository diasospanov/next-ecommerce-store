import {
  getParsedCookie,
  removeCookies,
  setStringifiedCookie,
} from '../cookies';

test('set, remove cookie', () => {
  const cookie = {
    key: 'cart',
    value: [{ id: 1, quantity: 2 }],
  };

  expect(getParsedCookie(cookie.key)).toBe(undefined);

  expect(() => setStringifiedCookie(cookie.key, cookie.value)).not.toThrow();

  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);

  expect(removeCookies(cookie.key)).toBe(undefined);

  expect(getParsedCookie(cookie.key)).toBe(undefined);
});
