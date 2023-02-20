// import fs from 'node:fs';
import { cache } from 'react';
import { sql } from './connect';

/* export const collection1 = [
  {
    id: 1,
    name: 'NFT-1',
    description: 'A unique NFT with certain features.',
    price: 150000,
  },
  {
    id: 2,
    name: 'NFT-2',
    description: 'A unique NFT with certain features.',
    price: 140000,
  },
  {
    id: 3,
    name: 'NFT-3',
    description: 'A unique NFT with certain features.',
    price: 130000,
  },
  {
    id: 4,
    name: 'NFT-4',
    description: 'A unique NFT with certain features.',
    price: 120000,
  },
  {
    id: 5,
    name: 'NFT-5',
    description: 'A unique NFT with certain features.',
    price: 110000,
  },
  {
    id: 6,
    name: 'NFT-6',
    description: 'A unique NFT with certain features.',
    price: 150000,
  },
]; */

type Nft = {
  id: number;
  name: string | number;
  description: string;
  price: string | number;
};

// get all collection of NFTs
export const getCollection = cache(async () => {
  const collection = await sql<Nft[]>`
  SELECT * FROM collection
  `;
  return collection;
});

export const getSingleNft = cache(async (id: number) => {
  const [nft] = await sql<Nft[]>`
SELECT * FROM collection
  WHERE id = ${id}
`;
  return nft;
});
