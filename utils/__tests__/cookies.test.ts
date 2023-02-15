import { setStringifiedCookie } from '../cookies';

test('set, remove cookie', () => {
  const cookie = {
    key: 'cart',
    value: [{ id: 1, quantity: 2 }],
  };
  expect(() => setStringifiedCookie(cookie.key, cookie.value)).not.toThrow();
});
