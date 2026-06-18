export default function HeroBanner() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#F6ECF3,#EEE2F7)",
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
              background: "#fff",
              width: "fit-content",
              padding: "8px 16px",
              borderRadius: "999px",
              color: "#6D2DB8",
              marginBottom: "20px",
            }}
          >
            ✨ Welcome to Peptiéra Lounge
          </div>
          <h1
            style={{
              fontSize: "3rem",
              color: "#16131F",
              marginBottom: "10px",
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
            Manage your orders, calculate dosages,
            track shipments and access educational
            resources all in one place.
          </p>
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: "28px",
            padding: "25px",
            minWidth: "280px",
            boxShadow: "0 8px 24px rgba(0,0,0,.05)",
          }}
        >
          <h3
            style={{
              color: "#6D2DB8",
              marginBottom: "20px",
            }}
          >
            📦 Batch Status
          </h3>
          <p>🟢 Batch Open</p>
          <p
            style={{
              marginTop: "12px",
            }}
          >
            ⏰ Closes in 5 days
          </p>
          <hr />
          <h3
            style={{
              color: "#6D2DB8",
              marginBottom: "15px",
            }}
          >
            📈 Quick Stats
          </h3>
          <p>Orders: 0</p>
          <p>Outstanding Balance: ₱0</p>
          <p>Shipping Updates: None</p>
        </div>
      </div>
    </div>
  );
}
