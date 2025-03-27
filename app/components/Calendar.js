import React from "react";
import Image from "next/image";
import styles from "./calendar.module.css";

const Calendar = () => {
  return (
    <div className={styles.calendarCard}>
      <Image
        src="/images/calendar.png"
        alt="EV Homes Logo"
        width={322}
        height={199}
      />
    </div>
  );
};

export default Calendar;
