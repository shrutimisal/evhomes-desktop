import Navbar from "../components/Navbar/NavBar";
import StatsCard from "../components/Cards/StatsCard";
import Calendar from "../components/Cards/Calendar";
import LeadsCard from "../components/Cards/LeadsCard";
import PieCard from "../components/Cards/PieCard";
import TaskCard from "../components/Cards/TaskCard";
import TeamCard from "../components/Cards/TeamCard";

export default function HomePage() {
  return (
    <div className="dashboard">
      <Navbar /> 

      <div className="statsCalendarContainer">
        <StatsCard />
        <Calendar />
        <LeadsCard />
      </div>
      <div className="pieContainer">
        <PieCard />
        <TaskCard />
        <TeamCard />
      </div>
    </div>
  );
}
