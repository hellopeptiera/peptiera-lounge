export default function AnnouncementsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFF8FB",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#FF4F9F",
          fontSize: "2.5rem",
        }}
      >
        📢 Announcements
      </h1>

      <div
        style={{
          background: "#FFD6EB",
          padding: "25px",
          borderRadius: "25px",
          marginBottom: "20px",
        }}
      >
        <h2>📢 Batch 1 closes June 21</h2>
        <p>Order taking is open until June 21, 11:59 PM.</p>
      </div>

      <div
        style={{
          background: "#E6D5FF",
          padding: "25px",
          borderRadius: "25px",
          marginBottom: "20px",
        }}
      >
        <h2>📦 Kit Progress Updates</h2>
        <p>TR30 Kit #1 completed.</p>
        <p>Lemon Bottle Kit #2 completed.</p>
      </div>

      <div
        style={{
          background: "#FFF0C7",
          padding: "25px",
          borderRadius: "25px",
        }}
      >
        <h2>🚚 Shipping Updates</h2>
        <p>International shipment is currently in transit.</p>
      </div>
    </main>
  );
}
