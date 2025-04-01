import styles from "./addsitevisitform.module.css";

export function AddSiteVisitForm() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Site Visit Form</h2>
      
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Visit Details</h3>
        <div className={styles.grid}>
          <div className={styles.inputGroup}>
            <label>Select Visit Type</label>
            <select>
              <option value="">Select Visit Type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label>Select Location</label>
            <select>
              <option value="">Select Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label>Date and Time</label>
            <input type="datetime-local" defaultValue="2025-03-29T16:45" />
          </div>

          <div className={styles.inputGroup}>
            <label>First Name</label>
            <input type="text" placeholder="First name" />
          </div>

          <div className={styles.inputGroup}>
            <label>Last Name</label>
            <input type="text" placeholder="Last name" />
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>

          <div className={styles.inputGroup}>
            <label>Phone</label>
            <input type="tel" placeholder="Phone" />
          </div>

          <div className={styles.inputGroup}>
            <label>Alternate Phone</label>
            <input type="tel" placeholder="Alternate phone" />
          </div>

          <div className={styles.inputGroup}>
            <label>Residence</label>
            <input type="text" placeholder="Residence" />
          </div>

          <div className={styles.inputGroupFull}>
            <label>Select Project</label>
            <select>
              <option value="">Select Project</option>
              <option value="project1">Project 1</option>
              <option value="project2">Project 2</option>
            </select>
          </div>

          <div className={styles.inputGroupFull}>
            <label>Choice of Apartment</label>
            <select>
              <option value="">Choice of Apartment</option>
              <option value="apartment1">Apartment 1</option>
              <option value="apartment2">Apartment 2</option>
            </select>
          </div>

          <div className={styles.inputGroupFull}>
            <label>Select Source</label>
            <select>
              <option value="">Source</option>
              <option value="source1">Source 1</option>
              <option value="source2">Source 2</option>
            </select>
          </div>

          <div className={styles.inputGroupFull}>
            <label>Select Closing Manager</label>
            <select>
              <option value="">Closing Manager</option>
              <option value="manager1">Manager 1</option>
              <option value="manager2">Manager 2</option>
            </select>
          </div>

          <div className={styles.inputGroupFull}>
            <label>Select Sales Manager</label>
            <select>
              <option value="">Sales Manager</option>
              <option value="sales1">Sales 1</option>
              <option value="sales2">Sales 2</option>
            </select>
          </div>

          <div className={styles.inputGroupFull}>
            <label>Feedback for EV Homes</label>
            <textarea placeholder="Feedback for EV Homes"></textarea>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.submitButton}>Submit</button>
      </div>
    </div>
  );
}
