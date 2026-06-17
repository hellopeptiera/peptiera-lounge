export default function Home() {
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
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#FF4F9F",
            fontSize: "3rem",
            marginBottom: "10px",
          }}
        >
          🎀 Peptiéra Lounge
        </h1>

        <p
          style={{
            color: "#7A4D7C",
            fontSize: "1.2rem",
            marginBottom: "40px",
          }}
        >
          Private members-only wellness and group buy platform ✨
        </p>

        <div
          style={{
            background: "#FFD3E8",
            padding: "25px",
            borderRadius: "25px",
            marginBottom: "20px",
          }}
        >
          <h2>🛍 Products</h2>
          <p>Browse available products and upcoming batches.</p>
        </div>

        <div
          style={{
            background: "#D8B4FF",
            padding: "25px",
            borderRadius: "25px",
            marginBottom: "20px",
            color: "white",
          }}
        >
          <h2>📦 Order Tracker</h2>
          <p>Track your orders and shipment updates.</p>
        </div>

        <div
          style={{
            background: "#FF4F9F",
            padding: "25px",
            borderRadius: "25px",
            color: "white",
          }}
        >
          <h2>💌 Announcements</h2>
          <p>Latest shipping and batch updates.</p>
        </div>
      </div>
    </main>
  );
}
