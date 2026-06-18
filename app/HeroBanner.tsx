export default function HeroBanner() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #F0D9E4 0%, #CAC5E5 100%)",
        borderRadius: "32px",
        padding: "48px",
        marginBottom: "32px",
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div
          style={{
            background: "#F6FFE9",
            color: "#290087",
            width: "fit-content",
            padding: "8px 16px",
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          ✨ Welcome to Peptiéra Lounge
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "#16131F",
            lineHeight: 1.1,
          }}
        >
          Premium Wellness
          <br />
          Member Portal
        </h1>

        <p
          style={{
            color: "#4A3F4B",
            fontSize: "18px",
            lineHeight: 1.8,
            maxWidth: "700px",
          }}
        >
          Browse products, place orders, calculate totals,
          track shipments, and access educational resources —
          all in one place.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "10px",
          }}
        >
          <button>
            🛍 Browse Products
          </button>

          <button
            style={{
              background: "#FFFFFF",
              color: "#290087",
              border: "1px solid #C1A0AC",
            }}
          >
            📚 Explore Library
          </button>
        </div>
      </div>
    </div>
  );
}
