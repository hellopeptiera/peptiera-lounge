import FooterCards from "./FooterCards";
import ProductCards from "./ProductCards";
import Topbar from "./Topbar";
import HeroBanner from "./HeroBanner";
import DashboardCards from "./DashboardCards";
import Panels from "./Panels";

export default function Home() {
  return (
    <>
      <Topbar />

      <div
        style={{
          padding: "40px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <HeroBanner />

        <div style={{ marginTop: "40px" }}>
          <DashboardCards />
        </div>

        <div style={{ marginTop: "40px" }}>
          <Panels />
        </div>
      </div>
    </>
  );
}
