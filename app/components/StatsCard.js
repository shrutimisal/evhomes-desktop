import React from 'react'
import Image from "next/image";
import styles from "./statscard.module.css";

const StatsCard = () => {
  return (
    <div className={styles.statsCard}>
        <Image
                  src="/images/statsGraph Image.png"
                  alt="EV Homes Logo"
                  width={350} 
                  height={199}
                 
                />
    </div>
  )
}

export default StatsCard;