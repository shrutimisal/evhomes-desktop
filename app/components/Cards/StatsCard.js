// import React from 'react'
// import Image from "next/image";
// import styles from "./statscard.module.css";

// const StatsCard = () => {
//   return (
//     <div className={styles.statsCard}>
//         <Image
//                   src="/images/statsGraph Image.png"
//                   alt="EV Homes Logo"
//                   width={350} 
//                   height={199}
                 
//                 />
//     </div>
//   )
// }

// export default StatsCard;
"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import styles from "./statscard.module.css";

const chartData = [
  { category: "Jan", value: 40 },
  { category: "Feb", value: 80 },
  { category: "Mar", value: 60 },
  { category: "Apr", value: 100 },
];

const StatsCard = ({ leftTitle = "Total Leads" }) => {
  return (
    <div className={styles.statsCard}>
      <ResponsiveContainer width={300} height={188}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="category" />
          <YAxis label={{ value: leftTitle, angle: -90, position: "insideLeft" }} />
          
          <Line
            type="linear"
            dataKey="value"
            stroke="#B02727"
            strokeWidth={2}
            dot={{ fill: "#B02727", r: 4 }}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsCard;
