'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Nft.module.scss';

export default function Nft(props) {
  const [count, setCount] = useState(1);
  return (
    <>
      <h1 className={styles.h1}>{props.nft.id}</h1>

      <div className={styles.div}>
        <Image
          src={`/${props.nft.id}.jpg`}
          alt="NFT"
          width="300"
          height="300"
        />
        <section>
          <p>{props.nft.price}</p>
          <div>
            <button
              onClick={() => {
                count >= 2 && setCount(count - 1);
              }}
            >
              -
            </button>
            {count}
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <button>Add to Cart</button>
          <p>{props.nft.description}</p>
        </section>
      </div>
    </>
  );
}
