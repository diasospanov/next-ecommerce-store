'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './checkout.module.scss';

export default function Checkout() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  return (
    <>
      <h1 className={styles.h1}>Checkout</h1>
      <section className={styles.section}>
        <div className={styles.div}>
          <label className={styles.label} data-test-id="checkout-first-name">
            First Name&nbsp;&nbsp;
            <input
              value={firstName}
              onChange={(event) => {
                const enteredFirstName = event.currentTarget.value;
                setFirstName(enteredFirstName);
              }}
              required
            />
          </label>
          <br />
          <label className={styles.label} data-test-id="checkout-last-name">
            Last Name&nbsp;&nbsp;
            <input
              value={lastName}
              onChange={(event) => {
                const enteredLastName = event.currentTarget.value;
                setLastName(enteredLastName);
              }}
              required
            />
          </label>
          <br />
          <label className={styles.label} data-test-id="checkout-email">
            E-Mail&nbsp;&nbsp;
            <input
              value={buyerEmail}
              onChange={(event) => {
                const enteredBuyerEmail = event.currentTarget.value;
                setBuyerEmail(enteredBuyerEmail);
              }}
              required
            />
          </label>
          <br />
        </div>
        <div className={styles.div}>
          <label className={styles.label} data-test-id="checkout-address">
            Address&nbsp;&nbsp;
            <input
              value={address}
              onChange={(event) => {
                const enteredAddress = event.currentTarget.value;
                setAddress(enteredAddress);
              }}
              required
            />
          </label>
          <br />
          <label className={styles.label} data-test-id="checkout-city">
            City&nbsp;&nbsp;
            <input
              value={city}
              onChange={(event) => {
                const enteredCity = event.currentTarget.value;
                setCity(enteredCity);
              }}
              required
            />
          </label>
          <br />
          <label className={styles.label} data-test-id="checkout-postal-code">
            Postal Code&nbsp;&nbsp;
            <input
              value={postalCode}
              onChange={(event) => {
                const enteredPostalCode = event.currentTarget.value;
                setPostalCode(enteredPostalCode);
              }}
              required
            />
          </label>
          <br />
          <label className={styles.label} data-test-id="checkout-country">
            Country&nbsp;&nbsp;
            <input
              value={country}
              onChange={(event) => {
                const enteredCountry = event.currentTarget.value;
                setCountry(enteredCountry);
              }}
              required
            />
          </label>
          <br />
        </div>
        <div className={styles.div}>
          <label className={styles.label} data-test-id="checkout-credit-card">
            Credit Card&nbsp;&nbsp;
            <input
              value={creditCard}
              onChange={(event) => {
                const enteredCreditCard = event.currentTarget.value;
                setCreditCard(enteredCreditCard);
              }}
              required
            />
          </label>
          <br />
          <label
            className={styles.label}
            data-test-id="checkout-expiration-date"
          >
            Expiration Date&nbsp;&nbsp;
            <input
              value={expirationDate}
              onChange={(event) => {
                const enteredExpirationDate = event.currentTarget.value;
                setExpirationDate(enteredExpirationDate);
              }}
              required
            />
          </label>
          <br />
          <label className={styles.label} data-test-id="checkout-security-code">
            Security Code&nbsp;&nbsp;
            <input
              value={securityCode}
              onChange={(event) => {
                const enteredSecurityCode = event.currentTarget.value;
                setSecurityCode(enteredSecurityCode);
              }}
              required
            />
          </label>
          <br />
        </div>
      </section>

      <Link href="/confirmation" className={styles.Link} data-test-id="checkout-confirm-order">
        <h3>Confirm Your Order</h3>
      </Link>
    </>
  );
}
