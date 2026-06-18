export default function TrackerPage() {
  const statuses = [
    {
      status: "🟡 Pending Payment",
      description: "Waiting for payment confirmation.",
    },
    {
      status: "🟢 Paid",
      description: "Payment has been received.",
    },
    {
      status: "🟠 Ordered",
      description: "Order has been submitted to the manufacturer.",
    },
    {
      status: "🔵 Shipped",
      description: "International shipment is in transit.",
    },
    {
      status: "🟣 Arrived",
      description: "Shipment has arrived in the Philippines.",
    },
    {
      status: "✅ Delivered",
      description: "Order has been successfully delivered.",
    },
  ];
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "32px",
      }}
    >
      <h1>📦 Order Tracker</h1>
      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {statuses.map((item) => (
          <div
            key={item.status}
            style={{
              background: "#FFFFFF",
              border: "1px solid #C1A0AC",
              borderRadius: "24px",
              padding: "24px",
            }}
          >
            <h2>{item.status}</h2>
            <p
              style={{
                marginTop: "12px",
                color: "#4A3F4B",
                lineHeight: "1.8",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
