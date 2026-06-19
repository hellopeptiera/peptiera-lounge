export default function Panels() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
        gap: "25px",
        marginTop: "40px",
      }}
    >
      {/* Order Journey */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "30px",
          padding: "30px",
          boxShadow: "0 8px 24px rgba(0,0,0,.05)",
        }}
      >
        <h2
          style={{
            color: "#16131F",
            marginBottom: "25px",
          }}
        >
          ✨ Order Journey
        </h2>
        <div style={{ color: "#806C79", lineHeight: "2.2" }}>
          <div>🟣 Slot Reserved</div>
          <div>🟣 Payment Verified</div>
          <div>🟣 MOQ Completed</div>
          <div>⚪ Ordered from Supplier</div>
          <div>⚪ International Shipping</div>
          <div>⚪ Arrived in Philippines</div>
          <div>⚪ Packed</div>
          <div>⚪ Shipped</div>
          <div>⚪ Delivered</div>
        </div>
      </div>
      {/* Tutorials */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "30px",
          padding: "30px",
          boxShadow: "0 8px 24px rgba(0,0,0,.05)",
        }}
      >
        <h2
          style={{
            color: "#16131F",
            marginBottom: "25px",
          }}
        >
          📚 Tutorials
        </h2>
        <div
  style={{
    display: "grid",
    gap: "15px",
  }}
>
  {[
    {
      emoji: "🧪",
      title: "Reconstitution Guide",
    },
    {
      emoji: "💉",
      title: "Insulin Syringe Basics",
    },
    {
      emoji: "❄️",
      title: "Storage Guide",
    },
    {
      emoji: "📍",
      title: "Injection Sites",
    },
  ].map((guide) => (
    <div
      key={guide.title}
      style={{
        background: "#FBF7F5",
        borderRadius: "20px",
        padding: "18px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        border: "1px solid #EFE7E2",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "16px",
          background: "#F5E9E2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
        }}
      >
        {guide.emoji}
      </div>
      <div>
        <div
          style={{
            color: "#16131F",
            fontWeight: 500,
          }}
        >
          {guide.title}
        </div>
        <div
          style={{
            color: "#806C79",
            fontSize: "13px",
          }}
        >
          Learn more
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
      {/* Batch Progress */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "30px",
          padding: "30px",
          boxShadow: "0 8px 24px rgba(0,0,0,.05)",
        }}
      >
        <h2
          style={{
            color: "#16131F",
            marginBottom: "25px",
          }}
        >
          🌸 Batch Progress
        </h2>
        <div style={{ lineHeight: "2.5" }}>
          <div>TR15 — 0/10</div>
          <div>TR30 — 0/10</div>
          <div>GHK-Cu 100 — 0/10</div>
          <div>GTT1500 — 0/10</div>
        </div>
      </div>
    {/* Shipments */}
<div
  style={{
    background: "#FFFFFF",
    borderRadius: "30px",
    padding: "30px",
    boxShadow: "0 8px 24px rgba(0,0,0,.05)",
  }}
>
  <h2
    style={{
      color: "#16131F",
      marginBottom: "25px",
    }}
  >
    🚚 Shipments — Batch 3
  </h2>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      color: "#806C79",
    }}
  >
    <div>🟣 Manufacturer</div>
    <div>🟣 International Shipping</div>
    <div>🟣 Customs Clearance</div>
    <div>⚪ Local Sorting</div>
    <div>⚪ Ready for Dispatch</div>
  </div>
</div>
    </div>
  );
}
