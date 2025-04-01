import Sidebar from "./components/SideBar/SideBar";
import "./globals.css";
export const metadata ={
  title:"EvHomes"
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <div className="sidebar">
            <Sidebar />
          </div>

          <div className="mainContent">
            <div className="content">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
