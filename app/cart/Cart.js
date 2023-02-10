'use client';
/* import Image from 'next/image';
import Link from 'next/link';
import { getParsedCookie } from '../../utils/cookies'; */
/* import { useState } from 'react'; */

export default function Cart() {
  /* const nftsInCookies = getParsedCookie('cart');
  const collection = await getCollection();
  let collectionWithQuantity = [];
  console.log(nftsInCookies);
  if (nftsInCookies) {
    collectionWithQuantity = collection.map((nft) => {
      const nftWithQuantity = { ...nft, quantity: 0 };
      const nftInCookies = nftsInCookies.find(
        (nftObject) => nft.id === nftObject.id,
      );
      if (nftInCookies) {
        collectionWithQuantity.quantity = nftInCookies.quantity;
      }
      return nftWithQuantity;
    });
  } */
  return (
    <>
      <h1>Your Cart</h1>
      {collectionWithQuantity.map((nft) => {
        return (
          <ol key={nft.id}>
            <li>
              <Link href={`/collection/${nft.id}`}>
                <Image
                  src={`/${nft.name}.jpg`}
                  alt="NFT"
                  width="100"
                  height="100"
                />
              </Link>
              <Link href={`/collection/${nft.id}`}>
                <h2>{nft.name}</h2>
              </Link>
              <p>{nft.price}</p>
            </li>
          </ol>
        );
      })}
    </>
  );
}
