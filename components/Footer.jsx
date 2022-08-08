import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>PABON CREATIVITIES.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact">
            <>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image src="/img/link.png" width={40} height={40} alt="" />
            </>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Agrabad, Chattagram <br /> Bangladesh
        </div>
        <div className={styles.cardItem}>
          Contact <br /> hasinanjumpabon@gmail.com 
        </div>
      </div>
      <div className={styles.carS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2022 PABON INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
