export default function ShippingPage() {
  const updates = [
    {
      status: "🟡 Pending",
      description: "Order has been received and is awaiting submission.",
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
      status: "🟢 Delivered",
      description: "Local delivery has been completed.",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "32px",
      }}
    >
      <h1>🚚 Shipping Updates</h1>

      <div
        style={{
          display: "grid",
          gap: "24px",
          marginTop: "30px",
        }}
      >
        {updates.map((update) => (
          <div
            key={update.status}
            style={{
              background: "#FFFFFF",
              border: "1px solid #C1A0AC",
              borderRadius: "24px",
              padding: "24px",
            }}
          >
            <h2>{update.status}</h2>

            <p
              style={{
                marginTop: "12px",
                lineHeight: "1.8",
                color: "#4A3F4B",
              }}
            >
              {update.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
