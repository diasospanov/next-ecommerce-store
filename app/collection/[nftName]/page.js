import Image from 'next/image.js';
import { notFound } from 'next/navigation';
import { collection } from '../../database/nftcollection.js';

export default function NftPage(props) {
  const nftOfCurrentPage = collection.find((nft) => {
    return nft.name.toLowerCase() === props.params.nftName;
  });

  /* if (!nftOfCurrentPage) {
    notFound();
  } */
  return (
    <>
      <h1>{nftOfCurrentPage.name}</h1>
      <Image
        src={`/${nftOfCurrentPage.name}.jpg`}
        alt="NFT"
        width="300"
        height="300"
      />
      <p>{nftOfCurrentPage.price}</p>
      <p>{nftOfCurrentPage.description}</p>
    </>
  );
}
