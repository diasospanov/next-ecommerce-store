'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import styles from './Nft.module.scss';

export default function Nft(props) {
  const [count, setCount] = useState(1);
  const router = useRouter();

  return (
    <>
      <h1 className={styles.h1}>{props.nft.name}</h1>
      <div>
        <div className={styles.div}>
          <Image
            src={`/${props.nft.name}.jpg`}
            alt="NFT"
            width="300"
            height="300"
            data-test-id="product-image"
          />
          <section>
            <p data-test-id="product-price">Price: {props.nft.price}</p>
            <div data-test-id="product-quantity">
              <button
                onClick={() => {
                  /* const nftsInCookies = getParsedCookie('cart');
                if (!nftsInCookies) {
                  return;
                }
                const foundNft = nftsInCookies.find((nftInCookie) => {
                  return nftInCookie.id === props.nft.id;
                });
                if (foundNft) {
                  foundNft.quantity--;
                  if (foundNft.quantity < 1) {
                    foundNft.quantity = 1;
                  }
                  setStringifiedCookie('cart', nftsInCookies);
                } */
                  count >= 2 && setCount(count - 1);
                }}
              >
                -
              </button>
              Quantity: {count}
              <button
                onClick={() => {
                  /* const nftsInCookies = getParsedCookie('cart');
                if (!nftsInCookies) {
                  setStringifiedCookie('cart', [
                    { id: props.nft.id, quantity: 2 },
                  ]);
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
                setStringifiedCookie('cart', nftsInCookies); */
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                const nftsInCookies = getParsedCookie('cart');
                if (!nftsInCookies) {
                  setStringifiedCookie('cart', [
                    { id: props.nft.id, quantity: count },
                  ]);
                  return;
                }
                const foundNft = nftsInCookies.find((nftInCookie) => {
                  return nftInCookie.id === props.nft.id;
                });
                if (foundNft) {
                  foundNft.quantity = foundNft.quantity + count;
                } else {
                  nftsInCookies.push({ id: props.nft.id, quantity: count });
                }
                setStringifiedCookie('cart', nftsInCookies);
                router.refresh();
              }}
              data-test-id="product-add-to-cart"
            >
              Add to Cart
            </button>
            <p>{props.nft.description}</p>
          </section>
        </div>
      </div>
    </>
  );
}
