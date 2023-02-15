import { cookies } from 'next/headers';
import { getCollection } from '../../database/nftcollection';
import Checkout from './Checkout';
import styles from './page.module.scss';

export default async function CheckoutPage() {
  const nftsInCookies = cookies().get('cart');
  let nftsInCookiesParsed: { id: number; quantity: number }[] = [];

  if (nftsInCookies) {
    nftsInCookiesParsed = JSON.parse(nftsInCookies.value);
  }
  console.log(nftsInCookiesParsed);
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
      <h1 className={styles.h1}>Checkout</h1>
      <h3 className={styles.h3}>Total: {total}</h3>
      <Checkout />
    </>
  );
}
