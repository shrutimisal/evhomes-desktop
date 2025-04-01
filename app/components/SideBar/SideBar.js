import Image from "next/image";
import styles from "./sidebar.module.css";
import {
  FaHome,
  FaTasks,
  FaUsers,
  FaClipboardList,
  FaSignOutAlt,
  FaCalendarCheck,
} from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/evhomelogo.png"
          alt="EV Homes Logo"
          width={180}
          height={100}
        />
      </div>

      <ul className={styles.menu}>
        <li>
          <Link href="/homepage">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link href="/homepage">
            <FaUsers /> Leads
          </Link>
        </li>
        <li>
          <Link href="/homepage">
            <FaTasks /> Tasks
          </Link>
        </li>
        <li>
          <Link href="/homepage">
            <FaClipboardList /> Visits
          </Link>
        </li>
        <li>
          <Link href="/attendance">
            <FaCalendarCheck /> Attendance
          </Link>
        </li>
        {/* <li>
          <Link href="/clienttaggingform">
            <FaCalendarCheck /> Form
          </Link>
        </li> */}
      </ul>

      <div className={styles.logout}>
        <FaSignOutAlt /> Logout
      </div>
    </div>
  );
};

export default Sidebar;
