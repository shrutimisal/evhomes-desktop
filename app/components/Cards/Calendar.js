// import React from "react";
// import Image from "next/image";
// import styles from "./calendar.module.css";

// const Calendar = () => {
//   return (
//     <div className={styles.calendarCard}>
//       <Image
//         src="/images/calendar.png"
//         alt="EV Homes Logo"
//         width={322}
//         height={199}
//       />
//     </div>
//   );
// };

// export default Calendar;
"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./calendar.module.css";

const AttendanceCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentViewDate, setCurrentViewDate] = useState(new Date());
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className={styles.calendarContainer}>
        <div
          className={styles.smallCalendar}
          onClick={() => setIsExpanded(true)}
        >
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            activeStartDate={currentViewDate}
            onActiveStartDateChange={({ activeStartDate }) =>
              setCurrentViewDate(activeStartDate)
            }
          />
        </div>
      </div>

      {isExpanded && (
        <div className={styles.overlay} onClick={() => setIsExpanded(false)}>
          <div
            className={styles.expandedCalendar}
            onClick={(e) => e.stopPropagation()}
          >
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              activeStartDate={currentViewDate}
              onActiveStartDateChange={({ activeStartDate }) =>
                setCurrentViewDate(activeStartDate)
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AttendanceCalendar;
