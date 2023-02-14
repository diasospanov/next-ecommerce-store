import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getCollection } from '../../database/nftcollection.ts';
import styles from './page.module.scss';

// import RouterHandler from './router';

/* import RemoveButton from './CartButtons.js'; */

// import { getParsedCookie } from '../../utils/cookies';

// import Cart from './Cart';

export default async function CartPage() {
  const nftsInCookies = cookies().get('cart');
  let nftsInCookiesParsed = [];
  if (nftsInCookies) {
    nftsInCookiesParsed = JSON.parse(nftsInCookies.value);
  }
  const collection = await getCollection();
  let collectionWithQuantity = [];
  let nftWithQuantity;
  let nftsInCart;
  let total;
  if (nftsInCookies) {
    collectionWithQuantity = collection.map((nft) => {
      nftWithQuantity = { ...nft, quantity: 0 };
      const nftInCookies = nftsInCookiesParsed.find(
        (nftObject) => nft.id === nftObject.id,
      );
      if (nftInCookies) {
        nftWithQuantity.quantity = nftInCookies.quantity;
      }
      return nftWithQuantity;
    });

    nftsInCart = collectionWithQuantity.filter(
      (cartNft) => cartNft.quantity > 0,
    );
    total = nftsInCart.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.quantity * currentValue.price;
    }, 0);
  }

  return (
    <>
      <h1 className={styles.h1}>Your Cart</h1>

      {nftsInCart &&
        nftsInCart.map((nft) => {
          return (
            <div
              key={nft.id}
              className={styles.div}
              data-test-id="cart-product-<product id>"
            >
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
              <p>Price: {nft.price}</p>

              <p data-test-id="cart-product-quantity-<product id>">
                Quantity: {nft.quantity}
              </p>
            </div>
          );
        })}
      <div className={styles.Link}>
        <b data-test-id="cart-total">Total: {total}</b>
      </div>

      <Link
        href="/checkout"
        className={styles.Link}
        data-test-id="cart-checkout"
      >
        <h3>Continue To Checkout</h3>
      </Link>
    </>
  );
}
