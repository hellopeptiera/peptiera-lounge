export default function HeroBanner() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <p
        style={{
          color: "#806C79",
          fontSize: "14px",
        }}
      >
        Welcome back,
      </p>

      <h1
        style={{
          color: "#16131F",
          fontSize: "42px",
          marginBottom: "8px",
        }}
      >
        Tammy ♡
      </h1>

      <p
        style={{
          color: "#806C79",
          marginBottom: "30px",
        }}
      >
        Thank you for being part of Peptiéra.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <div className="card">
          <p>Batch Status</p>

          <h2
            style={{
              color: "#6D2DB8",
              marginTop: "10px",
            }}
          >
            Open
          </h2>

          <p>Closes in 5 days</p>
        </div>

        <div className="card">
          <p>My Orders</p>

          <h2
            style={{
              color: "#6D2DB8",
              marginTop: "10px",
            }}
          >
            0
          </h2>

          <p>Active orders</p>
        </div>

        <div className="card">
          <p>Outstanding Balance</p>

          <h2
            style={{
              color: "#6D2DB8",
              marginTop: "10px",
            }}
          >
            ₱0
          </h2>

          <p>No balance due.</p>
        </div>
      </div>
    </div>
  );
}
