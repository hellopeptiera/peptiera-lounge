import HeroBanner from "./HeroBanner";
import DashboardCards from "./DashboardCards";
export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <HeroBanner />
      <h1
        style={{
          color: "#6D2DB8",
          marginBottom: "20px",
        }}
      >
        Quick Access
      </h1>
      <DashboardCards />
    </main>
  );
}
