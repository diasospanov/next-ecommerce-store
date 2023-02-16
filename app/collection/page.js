import Image from 'next/image';
import Link from 'next/link';
import { getCollection } from '../../database/nftcollection.ts';
import styles from '../collection/page.module.scss';

export default async function CollectionPage() {
  const collection = await getCollection();

  return (
    <>
      <div>
        <h1 className={styles.h1}>Our Finest NFT Collection</h1>
      </div>
      <div>
        {collection.map((nft) => {
          return (
            <div key={nft.id} className={styles.div}>
              <Link
                href={`/collection/${nft.id}`}
                data-test-id="product-<product id>"
              >
                <Image
                  src={`/${nft.name}.jpg`}
                  alt="NFT"
                  width="300"
                  height="300"
                />
              </Link>
              <Link
                href={`/collection/${nft.id}`}
                data-test-id="product-<product id>"
              >
                <h2>{nft.name}</h2>
              </Link>
              <p>{nft.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
