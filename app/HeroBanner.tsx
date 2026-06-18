export default function HeroBanner() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #F8EEF5 0%, #EEE2F7 100%)",
        borderRadius: "32px",
        padding: "40px",
        marginBottom: "30px",
        boxShadow: "0 8px 24px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              background: "#FFFFFF",
              color: "#6D2DB8",
              width: "fit-content",
              padding: "8px 18px",
              borderRadius: "999px",
              marginBottom: "20px",
            }}
          >
            ✨ Welcome to Peptiéra Lounge
          </div>
          <h1
            style={{
              color: "#16131F",
              fontSize: "3rem",
              marginBottom: "15px",
            }}
          >
            Welcome back ♡
          </h1>
          <p
            style={{
              color: "#806C79",
              maxWidth: "500px",
              lineHeight: "1.8",
            }}
          >
            Manage orders, calculate dosages,
            track shipments and access educational
            resources all in one place.
          </p>
        </div>
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "28px",
            padding: "24px",
            minWidth: "260px",
            boxShadow: "0 8px 20px rgba(0,0,0,.05)",
          }}
        >
          <h2
            style={{
              color: "#6D2DB8",
              marginBottom: "20px",
            }}
          >
            📦 Batch Status
          </h2>
          <p>🟢 Batch Open</p>
          <p
            style={{
              marginTop: "10px",
            }}
          >
            ⏰ Closes in 5 days
          </p>
          <hr />
          <h2
            style={{
              color: "#6D2DB8",
              marginBottom: "15px",
            }}
          >
            📈 Quick Stats
          </h2>
          <p>Orders: 0</p>
          <p>Outstanding Balance: ₱0</p>
          <p>Shipping Updates: None</p>
        </div>
      </div>
    </div>
  );
}
