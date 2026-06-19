export default function Panels() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "20px",
        marginTop: "40px",
      }}
    >
      {/* Recent Orders */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          padding: "24px",
          boxShadow: "0 8px 24px rgba(0,0,0,.06)",
        }}
      >
        <h2
          style={{
            color: "#290087",
            marginBottom: "16px",
          }}
        >
          📦 Recent Orders
        </h2>
        <p>No active orders.</p>
      </div>
      {/* Shipping Updates */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          padding: "24px",
          boxShadow: "0 8px 24px rgba(0,0,0,.06)",
        }}
      >
        <h2
          style={{
            color: "#290087",
            marginBottom: "16px",
          }}
        >
          🚚 Shipping Updates
        </h2>
        <p>No shipment updates.</p>
      </div>
      {/* Tutorials */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          padding: "24px",
          boxShadow: "0 8px 24px rgba(0,0,0,.06)",
        }}
      >
        <h2
          style={{
            color: "#290087",
            marginBottom: "16px",
          }}
        >
          📚 Tutorials
        </h2>
        <p>• Storage Guide</p>
        <p>• Insulin Syringe Basics</p>
        <p>• Reconstitution Guide</p>
        <p>• Injection Sites</p>
      </div>
      {/* Batch Progress */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          padding: "24px",
          boxShadow: "0 8px 24px rgba(0,0,0,.06)",
        }}
      >
        <h2
          style={{
            color: "#290087",
            marginBottom: "16px",
          }}
        >
          🌸 Batch Progress
        </h2>
        <p>TR15 — 0/10</p>
        <p>TR30 — 0/10</p>
        <p>GHK-Cu 100 — 0/10</p>
        <p>GTT1500 — 0/10</p>
      </div>
    </div>
  );
}
