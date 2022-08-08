import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Link href="">AVOCADO</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">Design</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">Development</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production">Production</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">Photography</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <ul onClick={()=> setOpen(false)} className={styles.menu} style={{right: open? '0px': '-50vw'}}>
        <li className={styles.menuItem}>
          <Link href="/products/design">Design</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/development">Development</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/production">Production</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/photography">Photography</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
