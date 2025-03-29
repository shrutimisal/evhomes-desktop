import styles from "./navbar.module.css";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.headercontent}>
      <h2 className={styles.title}>User Profile</h2>
      <p className={styles.subtitle}>Welcome To Dashboard</p>

      </div>
      <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search" className={styles.searchInput} />
      </div>

      <div className={styles.icons}>
        <FaBell className={styles.icon} />
        <FaUserCircle className={styles.icon} />
      </div>
    </div>
  );
};

export default Navbar;
