
import Sidebar from "./components/SideBar/SideBar";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="mainContent">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

