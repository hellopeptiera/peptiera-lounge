export default function AnnouncementsPage() {
  const announcements = [
    {
      title: "📢 Batch Opening",
      message: "Batch 2 is now open for orders.",
    },
    {
      title: "⏰ Batch Deadline",
      message: "Orders will close in 2 days.",
    },
    {
      title: "📦 Shipping Update",
      message: "International shipment is currently in transit.",
    },
    {
      title: "🛬 Shipment Arrived",
      message: "Current shipment has arrived in the Philippines.",
    },
    {
      title: "🚚 Local Shipping",
      message: "Local shipping has officially started.",
    },
    {
      title: "🧬 New Product Added",
      message: "New products have been added to the catalog.",
    },
    {
      title: "💗 MOQ Reached",
      message: "Tirzepatide 30mg has reached MOQ and will proceed to ordering.",
    },
    {
      title: "⚠️ Important Notice",
      message: "Pharma BAC water will not be available for this batch.",
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
      <h1>📢 Announcements</h1>
      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {announcements.map((announcement) => (
          <div
            key={announcement.title}
            style={{
              background: "#FFFFFF",
              border: "1px solid #C1A0AC",
              borderRadius: "24px",
              padding: "24px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >
            <h2>{announcement.title}</h2>
            <p
              style={{
                marginTop: "12px",
                color: "#4A3F4B",
                lineHeight: "1.8",
              }}
            >
              {announcement.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
