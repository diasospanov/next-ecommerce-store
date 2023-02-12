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
          <label className={styles.label}>
            First Name&nbsp;&nbsp;
            <input
              value={firstName}
              onChange={(event) => {
                const enteredFirstName = event.currentTarget.value;
                setFirstName(enteredFirstName);
              }}
            />
          </label>
          <br />
          <label className={styles.label}>
            Last Name&nbsp;&nbsp;
            <input
              value={lastName}
              onChange={(event) => {
                const enteredLastName = event.currentTarget.value;
                setLastName(enteredLastName);
              }}
            />
          </label>
          <br />
          <label className={styles.label}>
            E-Mail&nbsp;&nbsp;
            <input
              value={buyerEmail}
              onChange={(event) => {
                const enteredBuyerEmail = event.currentTarget.value;
                setBuyerEmail(enteredBuyerEmail);
              }}
            />
          </label>
          <br />
        </div>
        <div className={styles.div}>
          <label className={styles.label}>
            Address&nbsp;&nbsp;
            <input
              value={address}
              onChange={(event) => {
                const enteredAddress = event.currentTarget.value;
                setAddress(enteredAddress);
              }}
            />
          </label>
          <br />
          <label className={styles.label}>
            City&nbsp;&nbsp;
            <input
              value={city}
              onChange={(event) => {
                const enteredCity = event.currentTarget.value;
                setCity(enteredCity);
              }}
            />
          </label>
          <br />
          <label className={styles.label}>
            Postal Code&nbsp;&nbsp;
            <input
              value={postalCode}
              onChange={(event) => {
                const enteredPostalCode = event.currentTarget.value;
                setPostalCode(enteredPostalCode);
              }}
            />
          </label>
          <br />
          <label className={styles.label}>
            Country&nbsp;&nbsp;
            <input
              value={country}
              onChange={(event) => {
                const enteredCountry = event.currentTarget.value;
                setCountry(enteredCountry);
              }}
            />
          </label>
          <br />
        </div>
        <div className={styles.div}>
          <label className={styles.label}>
            Credit Card&nbsp;&nbsp;
            <input
              value={creditCard}
              onChange={(event) => {
                const enteredCreditCard = event.currentTarget.value;
                setCreditCard(enteredCreditCard);
              }}
            />
          </label>
          <br />
          <label className={styles.label}>
            Expiration Date&nbsp;&nbsp;
            <input
              value={expirationDate}
              onChange={(event) => {
                const enteredExpirationDate = event.currentTarget.value;
                setExpirationDate(enteredExpirationDate);
              }}
            />
          </label>
          <br />
          <label className={styles.label}>
            Security Code&nbsp;&nbsp;
            <input
              value={securityCode}
              onChange={(event) => {
                const enteredSecurityCode = event.currentTarget.value;
                setSecurityCode(enteredSecurityCode);
              }}
            />
          </label>
          <br />
        </div>
      </section>
      <Link href="/confirmation" className={styles.Link}>
        <h3>Confirm Your Order</h3>
      </Link>
    </>
  );
}
