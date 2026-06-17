export default function HeroBanner() {
  return (
    <div
      style={{
        background: "#FFF1F7",
        borderRadius: "30px",
        padding: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        border: "1px solid #F8D7E8",
      }}
    >
      <div>
        <h1
          style={{
            color: "#333",
            fontSize: "2.5rem",
            marginBottom: "15px",
          }}
        >
          Welcome to Peptiéra Lounge 💗
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "1.1rem",
            marginBottom: "25px",
          }}
        >
          Your cozy corner for wellness, learning, and group buys.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "10px 20px",
              borderRadius: "999px",
              color: "#FF69B4",
            }}
          >
            🛡 Safe
          </div>

          <div
            style={{
              background: "white",
              padding: "10px 20px",
              borderRadius: "999px",
              color: "#FF69B4",
            }}
          >
            💗 Trusted
          </div>

          <div
            style={{
              background: "white",
              padding: "10px 20px",
              borderRadius: "999px",
              color: "#FF69B4",
            }}
          >
            ✨ Transparent
          </div>

          <div
            style={{
              background: "white",
              padding: "10px 20px",
              borderRadius: "999px",
              color: "#FF69B4",
            }}
          >
            👭 Community
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: "100px",
        }}
      >
        🧪
      </div>
    </div>
  );
}
