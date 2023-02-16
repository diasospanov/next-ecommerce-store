// import Image from 'next/image.js';
import { notFound } from 'next/navigation';
import { getSingleNft } from '../../../database/nftcollection';
import Nft from './Nft.js';

export const dynamic = 'force-dynamic';

export default async function NftPage(props) {
  /* const nftOfCurrentPage = collection.find((nft) => {
    return nft.name.toLowerCase() === props.params.nftName;
  }); */

  const nftOfCurrentPage = await getSingleNft(props.params.nftId);

  if (!nftOfCurrentPage) {
    notFound();
  }
  return <Nft nft={nftOfCurrentPage} />;
}
