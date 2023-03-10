import styles from './page.module.scss';

export const metadata = {
  title: `Thank you for your order!`,
  description: 'Thank you for your shopping.',
};

export default function CheckoutPage() {
  return (
    <h1 className={styles.h1}>
      Thank You! Your Order Was Successfully Processed.
    </h1>
  );
}
