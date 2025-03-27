import React from 'react';
import styles from "./taskcard.module.css";

const TaskCard = () => {
  const tasks = [
    { name: "Client Name", remark: "Remark……..!", color: "#F9D7D7" }, 
    { name: "Client Name", remark: "Remark……..!", color: "#D7F9D7" }, 
    { name: "Client Name", remark: "Remark……..!", color: "#D7F9D7" }, 
    { name: "Client Name", remark: "Remark……..!", color: "#F9D7D7" }, 
  ];

  return (
    <div className={styles.taskContainer}>
      <h2 className={styles.heading}>Tasks</h2>
      <div className={styles.taskList}>
        {tasks.map((task, index) => (
          <div key={index} className={styles.taskCard} style={{ backgroundColor: task.color }}>
            <img src="/profile.jpg" alt="Profile" className={styles.profilePic} />
            <div className={styles.taskInfo}>
              <p className={styles.clientName}>{task.name}</p>
              <p className={styles.remark}>{task.remark}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
