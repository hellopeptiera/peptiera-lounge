export default function ProductsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFF9F5",
        padding: "40px 20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            color: "#FF5CA8",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          🛍 Products
        </h1>

        <div
          style={{
            background: "#FFD7E8",
            padding: "25px",
            borderRadius: "25px",
            marginBottom: "20px",
          }}
        >
          <h2>🩷 Tirzepatide 30mg</h2>
          <p>30mg × 10 vials</p>
          <p>₱605 per vial</p>
          <p>⭐ Available</p>
        </div>

        <div
          style={{
            background: "#E4D1FF",
            padding: "25px",
            borderRadius: "25px",
            marginBottom: "20px",
          }}
        >
          <h2>💙 GHK-Cu 100mg</h2>
          <p>100mg × 10 vials</p>
          <p>₱449 per vial</p>
          <p>⭐ Available</p>
        </div>

        <div
          style={{
            background: "#FFD7E8",
            padding: "25px",
            borderRadius: "25px",
            marginBottom: "20px",
          }}
        >
          <h2>✨ GTT1500</h2>
          <p>1500mg × 10 vials</p>
          <p>₱799 per vial</p>
          <p>⭐ Available</p>
        </div>
      </div>
    </main>
  );
}
