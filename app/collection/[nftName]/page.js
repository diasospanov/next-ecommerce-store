// import Image from 'next/image.js';
import { notFound } from 'next/navigation';
import { collection } from '../../../database/nftcollection.js';
import Nft from './Nft';

// export const dynamic = 'force dynamic';

export default function NftPage(props) {
  const nftOfCurrentPage = collection.find((nft) => {
    return nft.name.toLowerCase() === props.params.nftName;
  });

  if (!nftOfCurrentPage) {
    notFound();
  }
  return <Nft nft={nftOfCurrentPage} />;
}
