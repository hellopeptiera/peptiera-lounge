export default function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        background: "#FDF9FB",
        borderRadius: "28px",
        padding: "24px",
        boxShadow: "0 8px 24px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          color: "#6D2DB8",
          marginBottom: "30px",
        }}
      >
        PEPTIÉRA
      </h2>
      <p>🏠 Dashboard</p>
      <br />
      <p>🛒 Products</p>
      <p>💗 On Hand</p>
      <p>📦 Order Tracker</p>
      <p>📝 Place Order</p>
      <br />
      <p>💉 Dosage Calculator</p>
      <p>📈 Progress Tracker</p>
      <p>🧮 Product Calculator</p>
      <br />
      <p>📚 Library</p>
      <p>🧬 Encyclopedia</p>
      <p>📢 Announcements</p>
      <br />
      <p>👤 Account</p>
      <p>🚚 Shipping Updates</p>
    </div>
  );
}
