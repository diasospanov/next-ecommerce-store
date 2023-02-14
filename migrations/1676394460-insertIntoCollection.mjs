const collection = [
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
];

export async function up(sql) {
  await sql`
INSERT INTO collection ${sql(collection, 'name', 'description', 'price')}
`;
}

export async function down(sql) {
  for (const nft of collection) {
    await sql`
    DELETE FROM
    collection
WHERE
id = ${nft.id}
    `;
  }
}
