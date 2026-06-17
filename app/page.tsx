import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import HeroBanner from "./HeroBanner";
import DashboardCards from "./DashboardCards";
import Panels from "./Panels";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        background: "#FFFDFE",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
        }}
      >
        <Topbar />

        <div
          style={{
            padding: "40px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <HeroBanner />

          <DashboardCards />

          <Panels />
        </div>
      </div>
    </div>
  );
}
