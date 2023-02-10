import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getCollection } from '../../database/nftcollection.ts';
import styles from './page.module.scss';

/* import RemoveButton from './CartButtons.js'; */

// import { getParsedCookie } from '../../utils/cookies';

// import Cart from './Cart';

export default async function CartPage(props) {
  // const nftsInCookies = getParsedCookie('cart');
  const nftsInCookies = cookies().get('cart');
  let nftsInCookiesParsed = [];
  if (nftsInCookies) {
    nftsInCookiesParsed = JSON.parse(nftsInCookies.value);
  }
  const collection = await getCollection();
  let collectionWithQuantity = [];
  let nftWithQuantity;
  let nftsInCart;
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
    /* nftsInCart = collectionWithQuantity.filter(
      (cartNft) => cartNft.quantity > 0,
    ); */
  }

  return (
    <>
      <h1>Your Cart</h1>

      {collectionWithQuantity.map((nft) => {
        return (
          <div key={nft.id} className={styles.div}>
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

            <p>Quantity: {nft.quantity}</p>
          </div>
        );
      })}
    </>
  );
}
