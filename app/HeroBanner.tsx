export default function HeroBanner() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "28px",
        padding: "40px",
        boxShadow: "0 8px 24px rgba(0,0,0,.06)",
        marginBottom: "32px",
      }}
    >
      <div
        style={{
          color: "#806C79",
          fontSize: "14px",
          marginBottom: "12px",
        }}
      >
        🌙 Small daily choices create big transformations.
      </div>

      <h1
        style={{
          color: "#16131F",
          fontSize: "48px",
          margin: 0,
        }}
      >
        Tammy ♡
      </h1>

      <p
        style={{
          color: "#806C79",
          marginTop: "16px",
          fontSize: "16px",
        }}
      >
        Welcome back. Thank you for being part of Peptiéra.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "36px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#F8F5FF",
            padding: "20px",
            borderRadius: "20px",
            minWidth: "180px",
          }}
        >
          <div style={{ color: "#806C79", fontSize: "14px" }}>
            Batch Status
          </div>

          <div
            style={{
              color: "#290087",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            Open
          </div>
        </div>

        <div
          style={{
            background: "#FFF8E6",
            padding: "20px",
            borderRadius: "20px",
            minWidth: "180px",
          }}
        >
          <div style={{ color: "#806C79", fontSize: "14px" }}>
            My Orders
          </div>

          <div
            style={{
              color: "#290087",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            0
          </div>
        </div>

        <div
          style={{
            background: "#FFEAF7",
            padding: "20px",
            borderRadius: "20px",
            minWidth: "180px",
          }}
        >
          <div style={{ color: "#806C79", fontSize: "14px" }}>
            Outstanding Balance
          </div>

          <div
            style={{
              color: "#290087",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            ₱0
          </div>
        </div>
      </div>
    </div>
  );
}
