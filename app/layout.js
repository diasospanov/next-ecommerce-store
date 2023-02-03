import './global.scss';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/collection">Collection</Link>
            <Link href="/">About</Link>
            <Link href="/">Cart</Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>Di & Co. All rights reserved.</footer>
      </body>
    </html>
  );
}
