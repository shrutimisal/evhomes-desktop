import React from "react";
import styles from "./leadscard.module.css";

const LeadsCard = () => {
  return (
    <div className={styles.fullContainer}>
    <div className={styles.leadContainer}>
      <h2 className={styles.heading}>Leads</h2>

      <div className={styles.leadCounts}>
        <div className={styles.leadBox}>NA</div>
        <div className={styles.leadBox}>NA</div>
        <div className={styles.leadBox}>NA</div>
        <div className={styles.leadBox}>NA</div>
        <div className={styles.leadBox}>NA</div>
      </div>

      
    </div>
    <div className={styles.actionsContainer}>
        <button className={styles.actionButton}>Cost Sheet</button>
        <button className={styles.actionButton}>Inventory</button>
        <button className={styles.actionButton}>Payment Schedule</button>
      </div>
    </div>
  );
};

export default LeadsCard;
