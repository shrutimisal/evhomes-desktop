import Image from "next/image";
import styles from "./sidebar.module.css";
import { FaHome, FaTasks, FaUsers, FaClipboardList, FaCalendarCheck, FaSignOutAlt } from "react-icons/fa";

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
        <li><FaHome /> Home</li>
        <li><FaUsers /> Leads</li>
        <li><FaTasks /> Tasks</li>
        <li><FaClipboardList /> Visits</li>
        <li><FaCalendarCheck /> Attendance</li>
      </ul>

     
      <div className={styles.logout}>
        <FaSignOutAlt /> Logout
      </div>
    </div>
  );
};

export default Sidebar;
