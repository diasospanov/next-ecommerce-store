import { cookies } from 'next/headers';

export default function CartQuantity() {
  const nftsInCookies = cookies().get('cart');
  let nftsInCookiesParsed = [];
  let totalQuantity;
  if (nftsInCookies) {
    nftsInCookiesParsed = JSON.parse(nftsInCookies.value);
  }
  !nftsInCookies
    ? (totalQuantity = 0)
    : (totalQuantity = nftsInCookiesParsed.reduce(function (
        previousValue,
        currentValue,
      ) {
        return previousValue + currentValue.quantity;
      },
      0));

  return <h3>{totalQuantity}</h3>;
}
