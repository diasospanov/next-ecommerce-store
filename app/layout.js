import './global.scss';
import Link from 'next/link';
import CartQuantity from './CartQuantity';
// import Cart from './cart/Cart';
import styles from './layout.module.scss';

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <nav className={styles.header}>
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/collection" data-test-id="products-link">
                Collection
              </Link>
            </div>
            <div>
              <Link href="/">About</Link>
            </div>

            <div>
              <Link href="/cart">Cart</Link>
            </div>
            <div>
              (<CartQuantity />)
            </div>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>Di & Co. All rights reserved.</footer>
      </body>
    </html>
  );
}
