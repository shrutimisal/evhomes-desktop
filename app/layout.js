import Calendar from "./components/Calendar";
import LeadsCard from "./components/LeadsCard";
import Navbar from "./components/NavBar";
import PieCard from "./components/PieCard";
import Sidebar from "./components/SideBar";
import StatsCard from "./components/StatsCard";
import TaskCard from "./components/TaskCard";
import TeamCard from "./components/TeamCard";
import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "User Profile Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="layout">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="mainContent">
            <Navbar />

            <div className="statsCalendarContainer">
              <StatsCard />
              <Calendar />
              <LeadsCard />
            </div>
            <div className="pieContainer">
              <PieCard />
              <TaskCard/>
              <TeamCard/>
            </div>
            <div className="content">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
