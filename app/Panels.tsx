export default function Panels() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "25px",
      }}
    >
      {/* Announcements */}
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "25px",
          border: "1px solid #F5E3EC",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ color: "#FF69B4" }}>📢 Announcements</h2>

        <p>🎀 Batch 1 closes June 21</p>

        <p>📦 TR30 Kit #1 completed</p>

        <p>🚚 Shipment ETA June 28</p>

        <p>✨ Unlimited kits available</p>
      </div>

      {/* My Orders */}
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "25px",
          border: "1px solid #F5E3EC",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ color: "#FF69B4" }}>📦 My Orders</h2>

        <p>#PPT001 — Paid 🟢</p>

        <p>#PPT002 — Processing 🟡</p>

        <p>#PPT003 — Delivered 🎉</p>
      </div>

      {/* Upcoming Events */}
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "25px",
          border: "1px solid #F5E3EC",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ color: "#FF69B4" }}>📅 Upcoming Events</h2>

        <p>June 21 — Batch 1 deadline</p>

        <p>June 28 — Shipment ETA</p>

        <p>July 1 — Local shipping begins</p>
      </div>
    </div>
  );
}
