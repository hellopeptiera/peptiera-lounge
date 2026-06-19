<div
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "30px",
  }}
>
  <h1
    style={{
      color: "#5D2DB8",
      fontSize: "42px",
      marginBottom: "20px",
    }}
  >
    📚 Library
  </h1>
  <input
    placeholder="Search guides..."
    style={{
      width: "100%",
      padding: "16px",
      borderRadius: "20px",
      border: "1px solid #eee",
      marginBottom: "30px",
      background: "white",
    }}
  />
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "25px",
    }}
  >
    {/* Guides */}
    <div className="card">
      <h2>💗 Guides</h2>
      <p>📦 Storage Guide</p>
      <p>🧪 Reconstitution Guide</p>
      <p>💉 Injection Sites</p>
      <p>💗 Insulin Syringe Basics</p>
    </div>
    {/* FAQ */}
    <div className="card">
      <h2>❓ FAQs</h2>
      <p>💗 Group Buy Guide</p>
      <p>📦 MOQ Explained</p>
      <p>💳 Payment Methods</p>
      <p>🚚 Shipping Process</p>
    </div>
    {/* Product Info */}
    <div className="card">
      <h2>🧬 Product Information</h2>
      <p>❄️ Storage</p>
      <p>⚠️ Side Effects</p>
      <p>🧬 Synergistic Stacks</p>
    </div>
    {/* Shipping */}
    <div className="card">
      <h2>📦 Shipping & Orders</h2>
      <p>📍 Tracking</p>
      <p>📅 Timeline</p>
      <p>⏳ Delays</p>
    </div>
  </div>
</div>
