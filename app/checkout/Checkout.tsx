'use client';
// import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { useState } from 'react';
import styles from './checkout.module.scss';

export default function Checkout() {
  /* const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState(''); */

  // const [filledInForm, setFilledInForm] = useState(false);
  const router = useRouter();

  /*   function UpdateFirstName(event) {
    const enteredFirstName = event.currentTarget.value;
    useEffect(() => {
      setFirstName(enteredFirstName);
    });
  }

  function UpdateLastName(event) {
    const enteredLastName = event.currentTarget.value;
    useEffect(() => {
      setLastName(enteredLastName);
    });
  }
  function UpdateBuyerEmail(event) {
    const enteredBuyerEmail = event.currentTarget.value;
    useEffect(() => {
      setBuyerEmail(enteredBuyerEmail);
    });
  }
  function UpdateAddress(event) {
    const enteredAddress = event.currentTarget.value;
    useEffect(() => {
      setAddress(enteredAddress);
    });
  }
  function UpdateCity(event) {
    const enteredCity = event.currentTarget.value;
    useEffect(() => {
      setCity(enteredCity);
    });
  }
  function UpdatePostalCode(event) {
    const enteredPostalCode = event.currentTarget.value;
    useEffect(() => {
      setPostalCode(enteredPostalCode);
    });
  }
  function UpdateCountry(event) {
    const enteredCountry = event.currentTarget.value;
    useEffect(() => {
      setCountry(enteredCountry);
    });
  }
  function UpdateCreditCard(event) {
    const enteredCreditCard = event.currentTarget.value;
    useEffect(() => {
      setCreditCard(enteredCreditCard);
    });
  }
  function UpdateExpirationDate(event) {
    const enteredExpirationDate = event.currentTarget.value;
    useEffect(() => {
      setExpirationDate(enteredExpirationDate);
    });
  }
  function UpdateSecurityCode(event) {
    const enteredSecurityCode = event.currentTarget.value;
    useEffect(() => {
      setSecurityCode(enteredSecurityCode);
    });
  } */

  /* let firstName: string;
  let lastName: string;
  let buyerEmail: string;
  let address: string;
  let city: string;
  let postalCode: string | number;
  let country: string;
  let creditCard: string | number;
  let expirationDate: string | number;
  let securityCode: string | number; */

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          window.location.href = '/confirmation';
        }}
      >
        <section className={styles.section}>
          <div className={styles.div}>
            <label className={styles.label} data-test-id="checkout-first-name">
              First Name&nbsp;&nbsp;
              <input required />
            </label>
            <br />
            <label className={styles.label} data-test-id="checkout-last-name">
              Last Name&nbsp;&nbsp;
              <input required />
            </label>
            <br />
            <label className={styles.label} data-test-id="checkout-email">
              E-Mail&nbsp;&nbsp;
              <input required />
            </label>
            <br />
          </div>
          <div className={styles.div}>
            <label className={styles.label} data-test-id="checkout-address">
              Address&nbsp;&nbsp;
              <input required />
            </label>
            <br />
            <label className={styles.label} data-test-id="checkout-city">
              City&nbsp;&nbsp;
              <input required />
            </label>
            <br />
            <label className={styles.label} data-test-id="checkout-postal-code">
              Postal Code&nbsp;&nbsp;
              <input required />
            </label>
            <br />
            <label className={styles.label} data-test-id="checkout-country">
              Country&nbsp;&nbsp;
              <input required />
            </label>
            <br />
          </div>
          <div className={styles.div}>
            <label className={styles.label} data-test-id="checkout-credit-card">
              Credit Card&nbsp;&nbsp;
              <input required />
            </label>
            <br />
            <label
              className={styles.label}
              data-test-id="checkout-expiration-date"
            >
              Expiration Date&nbsp;&nbsp;
              <input required />
            </label>
            <br />
            <label
              className={styles.label}
              data-test-id="checkout-security-code"
            >
              Security Code&nbsp;&nbsp;
              <input required />
            </label>
            <br />
          </div>
          {/* {firstName !== '' &&
          lastName !== '' &&
          buyerEmail !== '' &&
          address !== '' &&
          city !== '' &&
          postalCode !== '' &&
          country !== '' &&
          creditCard !== '' &&
          expirationDate !== '' &&
          securityCode !== '' &&
          setFilledInForm(true)} */}
        </section>
        <button
          data-test-id="checkout-confirm-order"
          className={styles.button}
          /* onClick={() => {
            if (
              firstName !== '' &&
              lastName !== '' &&
              buyerEmail !== '' &&
              address !== '' &&
              city !== '' &&
              postalCode !== '' &&
              country !== '' &&
              creditCard !== '' &&
              expirationDate !== '' &&
              securityCode !== ''
            ) {
              router.push('/confirmation');
            }
          }} */
        >
          Confirm Your Order
        </button>
      </form>
      {/* {!filledInForm ? (
        <p>Please fill in the Form above</p>
      ) : (
        <Link
          href="/confirmation"
          className={styles.Link}
          data-test-id="checkout-confirm-order"
        >
          <h3>Confirm Your Order</h3>
        </Link>
      )} */}
    </>
  );
}
