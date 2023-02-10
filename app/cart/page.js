import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getCollection } from '../../database/nftcollection.ts';

// import { getParsedCookie } from '../../utils/cookies';

// import Cart from './Cart';

export default async function CartPage() {
  // const nftsInCookies = getParsedCookie('cart');
  const nftsInCookies = cookies().get('cart');
  let nftsInCookiesParsed = [];
  if (nftsInCookies) {
    nftsInCookiesParsed = JSON.parse(nftsInCookies.value);
  }
  const collection = await getCollection();
  let collectionWithQuantity = [];

  if (nftsInCookies) {
    collectionWithQuantity = collection.map((nft) => {
      const nftWithQuantity = { ...nft, quantity: 0 };
      const nftInCookies = nftsInCookiesParsed.find(
        (nftObject) => nft.id === nftObject.id,
      );
      if (nftInCookies) {
        nftWithQuantity.quantity = nftInCookies.quantity;
      }
      return nftWithQuantity;
    });
  }
  /* const nftsInCart = collectionWithQuantity.filter(
    (cartObject) => cartObject.quantity > 0,
  ); */

  return (
    <>
      <h1>Your Cart</h1>
      {/* {const nftsInCart = collectionWithQuantity.filter(
      (cartObject) => cartObject.quantity > 0
    )} */}
      {collectionWithQuantity.map((nft) => {
        return (
          <div key={nft.id}>
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
            <p>{nft.quantity}</p>
          </div>
        );
      })}
    </>
  );
}
