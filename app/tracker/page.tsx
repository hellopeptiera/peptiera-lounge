export default function TrackerPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFF8FB",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          color: "#FF4F9F",
          textAlign: "center",
          fontSize: "2.5rem",
        }}
      >
        📦 Order Tracker
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#7A4D7C",
          marginBottom: "40px",
        }}
      >
        Track your Peptiéra orders ✨
      </p>

      <div
        style={{
          background: "#FFD6EB",
          padding: "25px",
          borderRadius: "25px",
          maxWidth: "500px",
          margin: "auto",
          marginBottom: "25px",
        }}
      >
        <h2>🎀 Order #PPT001</h2>

        <p>Product: TR30</p>

        <p>Quantity: 2 vials</p>

        <p>Status: 🟢 Paid</p>
      </div>

      <div
        style={{
          background: "#E6D5FF",
          padding: "25px",
          borderRadius: "25px",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <h2>📦 Shipping Progress</h2>

        <p>✅ Payment Received</p>

        <p>✅ Reserved</p>

        <p>🟡 Processing</p>

        <p>⬜ International Shipping</p>

        <p>⬜ Arrived PH</p>

        <p>⬜ Local Shipping</p>

        <p>⬜ Delivered</p>
      </div>

      <div
        style={{
          background: "#FFF0C7",
          padding: "25px",
          borderRadius: "25px",
          maxWidth: "500px",
          margin: "30px auto",
        }}
      >
        <h2>⏳ Batch Information</h2>

        <p>Current Batch: Batch 1</p>

        <p>Deadline: June 21</p>

        <p>Orders are processed once 10 vials are completed.</p>
      </div>
    </main>
  );
}
