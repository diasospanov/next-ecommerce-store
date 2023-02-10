'use client';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export function MinusButton(props) {
  const [count, setCount] = useState(props.nft.quantity);
  return (
    <button
      onClick={() => {
        const nftsInCookies = getParsedCookie('cart');
        if (!nftsInCookies) {
          return;
        }
        const foundNft = nftsInCookies.find((nftInCookie) => {
          return nftInCookie.id === props.nft.id;
        });
        if (foundNft) {
          foundNft.quantity--;
          if (foundNft.quantity < 1) {
            foundNft.quantity = 0;
          }
          setStringifiedCookie('cart', nftsInCookies);
        }
        count >= 1 && setCount(count - 1);
      }}
    >
      -
    </button>
  );
}
export function PlusButton(props) {
  const [count, setCount] = useState(props.nft.quantity);
  return (
    <button
      onClick={() => {
        const nftsInCookies = getParsedCookie('cart');
        if (!nftsInCookies) {
          setStringifiedCookie('cart', [{ id: props.nft.id, quantity: 2 }]);
          setCount(count + 1);
          return;
        }
        const foundNft = nftsInCookies.find((nftInCookie) => {
          return nftInCookie.id === props.nft.id;
        });
        if (foundNft) {
          foundNft.quantity++;
        } else {
          nftsInCookies.push({ id: props.nft.id, quantity: 2 });
        }
        setStringifiedCookie('cart', nftsInCookies);
        setCount(count + 1);
      }}
    >
      +
    </button>
  );
}
export function RemoveButton(props) {
  return (
    <button
      onClick={() => {
        const nftsInCookies = getParsedCookie('cart');
        if (!nftsInCookies) {
          return;
        }
        const foundNft = nftsInCookies.find((nftInCookie) => {
          return nftInCookie.id === props.nft.id;
        });
        if (foundNft) {
          foundNft.quantity = 0;
        }
        setStringifiedCookie('cart', nftsInCookies);
      }}
    >
      Remove Product
    </button>
  );
}
