"use client";
import { useState } from "react";
import styles from "./floatingbutton.module.css"; 
import Link from "next/link";

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.fabContainer}>
      {isOpen && (
        <>
          <div className={styles.overlay} onClick={() => setIsOpen(false)} />
          <div className={styles.options}>
            <button className={styles.option}>EVHomes Event Form</button>
            <button className={styles.option}><Link href="/clienttaggingform">Add Client Tagging</Link></button>
            <button className={styles.option}>Add Site Visit Form</button>
            <button className={styles.option}>Add New Booking</button>
            <button className={styles.option}>Add & View Payment</button>
          </div>
        </>
      )}
      <button className={styles.fab} onClick={() => setIsOpen(!isOpen)}>
        +
      </button>
    </div>
  );
}
