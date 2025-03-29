import styles from "./addclienttaggingform.module.css";

export default function AddClientTaggingForm() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Client Tagging Form</h2>
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Client Details</h3>
        <div className={styles.grid}>
          <div className={styles.inputGroup}>
            <label>Tagged Date</label>
            <input type="datetime-local" defaultValue="2025-03-29T16:45" />
          </div>
          <div className={styles.inputGroup}>
            <label>Valid Till</label>
            <input type="datetime-local" defaultValue="2025-05-27T16:45" disabled />
          </div>
          <div className={styles.inputGroup}>
            <label>Client First Name</label>
            <input type="text" placeholder="Enter first name" />
          </div>
          <div className={styles.inputGroup}>
            <label>Client Last Name</label>
            <input type="text" placeholder="Enter last name" />
          </div>
          <div className={styles.inputGroup}>
            <label>Client Phone Number</label>
            <input type="tel" placeholder="Enter phone number" />
          </div>
          <div className={styles.inputGroup}>
            <label>Alternate Phone Number</label>
            <input type="tel" placeholder="Enter alternate phone" />
          </div>
          <div className={styles.inputGroupFull}>
            <label>Email</label>
            <input type="email" placeholder="Enter email" />
          </div>
        </div>
      </div>
      <div className={styles.formSection}>
        <div className={styles.grid}>
          <div className={styles.inputGroupFull}>
            <label>Client Address</label>
            <textarea placeholder="Enter client address"></textarea>
          </div>
          <div className={styles.inputGroupFull}>
            <label>Remarks</label>
            <textarea placeholder="Enter remarks"></textarea>
          </div>
        </div>
      </div>
      <button className={styles.submitButton}>Submit</button>
    </div>
  );
}

