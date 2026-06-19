import Link fron "next/link";
export default function TrackerPage() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <Link
  href="/"
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#F5E9E2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "#160029",
    fontSize: "24px",
    boxShadow: "0 8px 20px rgba(0,0,0,.08)",
    marginBottom: "20px",
  }}
>
  ←
</Link>
      <h1
        style={{
          color: "#290087",
          marginBottom: "30px",
        }}
      >
        📦 Order Tracker
      </h1>
      <div className="card">
        <h2>Current Order Status</h2>
        <br />
        <p>🟢 Paid</p>
        <p>🟡 MOQ Complete</p>
        <p>⚪ Ordered</p>
        <p>⚪ International Shipping</p>
        <p>⚪ Arrived</p>
        <p>⚪ Local Shipping</p>
        <p>⚪ Delivered</p>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Order Information</h2>
        <br />
        <p>Order Number: -----</p>
        <p>Batch: -----</p>
        <p>Date Ordered: -----</p>
        <p>Total Amount: -----</p>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Shipping Updates</h2>
        <br />
        <p>No updates available.</p>
      </div>
    </div>
  );
}
