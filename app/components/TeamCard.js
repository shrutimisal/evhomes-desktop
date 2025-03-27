import React from "react";
import styles from "./teamcard.module.css";

const TeamCard = () => {
  const teamMembers = [
    { name: "Member Name", role: "Sales Executive", image: "/profile.jpg" },
    { name: "Member Name", role: "Sales Executive", image: "/profile.jpg" },
    { name: "Member Name", role: "Sales Executive", image: "/profile.jpg" },
    { name: "Member Name", role: "Sales Executive", image: "/profile.jpg" },
  ];

  return (
    <div className={styles.teamContainer}>
      <h2 className={styles.heading}>Deepak Team</h2>
      <div className={styles.teamList}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.memberCard}>
            <img src={member.image} alt="Profile" className={styles.profilePic} />
            <div className={styles.memberInfo}>
              <p className={styles.name}>{member.name}</p>
              <p className={styles.role}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
