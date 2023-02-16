'use client';

import { getParsedCookie } from '../../utils/cookies';

/* import { useState } from 'react'; */

export default function Cart() {
  const nftsInCookies = getParsedCookie('cart');
  let totalQuantity;
  !nftsInCookies
    ? (totalQuantity = 0)
    : (totalQuantity = nftsInCookies.reduce(function (
        previousValue,
        currentValue,
      ) {
        return previousValue + currentValue.quantity;
      },
      0));

  return <h3>{totalQuantity}</h3>;
}
