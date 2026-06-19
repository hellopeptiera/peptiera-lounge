export default function Panels() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
        gap: "25px",
        marginTop: "40px",
      }}
    >
      {/* Order Journey */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "30px",
          padding: "30px",
          boxShadow: "0 8px 24px rgba(0,0,0,.05)",
        }}
      >
        <h2
          style={{
            color: "#16131F",
            marginBottom: "25px",
          }}
        >
          ✨ Order Journey
        </h2>
        <div style={{ color: "#806C79", lineHeight: "2.2" }}>
          <div>🟣 Slot Reserved</div>
          <div>🟣 Payment Verified</div>
          <div>🟣 MOQ Completed</div>
          <div>⚪ Ordered from Supplier</div>
          <div>⚪ International Shipping</div>
          <div>⚪ Arrived in Philippines</div>
          <div>⚪ Packed</div>
          <div>⚪ Shipped</div>
          <div>⚪ Delivered</div>
        </div>
      </div>
      {/* Tutorials */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "30px",
          padding: "30px",
          boxShadow: "0 8px 24px rgba(0,0,0,.05)",
        }}
      >
        <h2
          style={{
            color: "#16131F",
            marginBottom: "25px",
          }}
        >
          📚 Tutorials
        </h2>
        <div style={{ lineHeight: "2.5" }}>
          <div>🧪 Reconstitution Guide</div>
          <div>💉 Insulin Syringe Basics</div>
          <div>❄️ Storage Guide</div>
          <div>📍 Injection Sites</div>
        </div>
      </div>
      {/* Batch Progress */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "30px",
          padding: "30px",
          boxShadow: "0 8px 24px rgba(0,0,0,.05)",
        }}
      >
        <h2
          style={{
            color: "#16131F",
            marginBottom: "25px",
          }}
        >
          🌸 Batch Progress
        </h2>
        <div style={{ lineHeight: "2.5" }}>
          <div>TR15 — 0/10</div>
          <div>TR30 — 0/10</div>
          <div>GHK-Cu 100 — 0/10</div>
          <div>GTT1500 — 0/10</div>
        </div>
      </div>
      {/* Shipping Updates */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "30px",
          padding: "30px",
          boxShadow: "0 8px 24px rgba(0,0,0,.05)",
        }}
      >
        <h2
          style={{
            color: "#16131F",
            marginBottom: "25px",
          }}
        >
          🚚 Shipping Updates
        </h2>
        <p
          style={{
            color: "#806C79",
          }}
        >
          No shipment updates.
        </p>
      </div>
    </div>
  );
}
