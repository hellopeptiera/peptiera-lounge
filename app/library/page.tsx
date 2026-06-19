export default function LibraryPage() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          color: "#290087",
          marginBottom: "30px",
        }}
      >
        📚 Library
      </h1>
      <input
        placeholder="Search guides..."
        style={{
          marginBottom: "30px",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        <div className="card">
          <h2>🩷 Guides</h2>
          <p>Storage Guide</p>
          <p>Reconstitution Guide</p>
          <p>Injection Sites</p>
          <p>Insulin Syringe Basics</p>
        </div>
        <div className="card">
          <h2>❓ FAQs</h2>
          <p>Group Buy Guide</p>
          <p>MOQ Explained</p>
          <p>Payment Methods</p>
          <p>Shipping Process</p>
        </div>
        <div className="card">
          <h2>🧪 Product Information</h2>
          <p>Storage</p>
          <p>Side Effects</p>
          <p>Synergistic Stacks</p>
        </div>
        <div className="card">
          <h2>📦 Shipping & Orders</h2>
          <p>Tracking</p>
          <p>Timeline</p>
          <p>Delays</p>
        </div>
      </div>
    </div>
  );
}
