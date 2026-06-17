export default function Topbar() {
  return (
    <div
      style={{
        background: "#FFF8FB",
        padding: "25px 40px",
        borderBottom: "1px solid #F5E3EC",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            color: "#333",
          }}
        >
          Welcome back, Tammy! 💕
        </h2>

        <p
          style={{
            marginTop: "8px",
            color: "#888",
          }}
        >
          Here's what's happening in your lounge today.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          fontSize: "1.1rem",
        }}
      >
        <span>🔔</span>

        <div
          style={{
            color: "#FF69B4",
            fontWeight: "bold",
          }}
        >
          💗 1,250
        </div>

        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            background: "#FFD8EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
          }}
        >
          👧🏻
        </div>
      </div>
    </div>
  );
}
