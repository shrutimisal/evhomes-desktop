import Navbar from "../components/Navbar/NavBar";
import StatsCard from "../components/Cards/StatsCard";
import Calendar from "../components/Cards/Calendar";
import LeadsCard from "../components/Cards/LeadsCard";
import PieCard from "../components/Cards/PieCard";
import TaskCard from "../components/Cards/TaskCard";
import TeamCard from "../components/Cards/TeamCard";
import "../globals.css";
import FloatingButton from "../components/Buttons/FloatingButton";

export default function HomePage() {
  return (
    <div className="dashboard">
      <Navbar />

      <div className="statsCalendarContainer">
        <StatsCard />
        <Calendar />
        <LeadsCard
          teamLeaderLeads={{
            totalItems: 120,
            visitCount: 50,
            visit2Count: 30,
            bookingCount: 10,
            pendingCount: 5,
          }}
        />
      </div>
      <div className="pieContainer">
        <PieCard />
        <TaskCard />
        <TeamCard />
      </div>
      <FloatingButton/>
    </div>
  );
}
