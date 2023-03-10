import styles from './page.module.scss';

export const metadata = {
  title: 'Trusted NFT Handler',
  description: 'Buy NFTs from a trusted source.',
};

export default function HomePage() {
  return (
    <div className={styles.div}>
      A non-fungible token (NFT) is a unique digital identifier that cannot be
      copied, substituted, or subdivided, that is recorded in a blockchain, and
      that is used to certify authenticity and ownership.
    </div>
  );
}
