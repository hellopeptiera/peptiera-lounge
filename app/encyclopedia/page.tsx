export default function EncyclopediaPage() {
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
        🧬 Encyclopedia
      </h1>
      <input
        placeholder="Search products..."
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
          <h2>🩷 Weight Management</h2>
          <p>Tirzepatide</p>
          <p>Cagrilintide</p>
        </div>
        <div className="card">
          <h2>✨ Skin & Hair</h2>
          <p>GHK-Cu</p>
          <p>GTT1500</p>
        </div>
        <div className="card">
          <h2>⚡ Energy & Recovery</h2>
          <p>NAD+</p>
        </div>
        <div className="card">
          <h2>🧠 Sleep & Mood</h2>
          <p>DSIP</p>
        </div>
      </div>
    </div>
  );
}
