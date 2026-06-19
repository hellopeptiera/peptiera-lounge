import Link from "next/link";
export default function DashboardCards() {
  const cards = [
    {
      emoji: "🛍",
      title: "On Hand",
      subtitle: "Ready-to-ship items",
      href: "/on-hand",
    },
    {
      emoji: "📚",
      title: "Library",
      subtitle: "Guides & storage",
      href: "/library",
    },
    {
      emoji: "🧬",
      title: "Encyclopedia",
      subtitle: "Research database",
      href: "/encyclopedia",
    },
    {
      emoji: "📦",
      title: "Order Tracker",
      subtitle: "Track active orders",
      href: "/tracker",
    },
    {
      emoji: "💉",
      title: "Dosage Calculator",
      subtitle: "Dose conversions",
      href: "/dosage",
    },
    {
      emoji: "📈",
      title: "Progress Tracker",
      subtitle: "Monitor journey",
      href: "/progress",
    },
    {
      emoji: "📢",
      title: "Announcements",
      subtitle: "Latest updates",
      href: "/announcements",
    },
    {
      emoji: "🚚",
      title: "Shipping Updates",
      subtitle: "Shipment status",
      href: "/shipping",
    },
    {
      emoji: "📝",
      title: "Place Order",
      subtitle: "Submit an order",
      href: "/order",
    },
  ];
  return (
    <div>
      <h2
        style={{
          color: "#290087",
          marginBottom: "24px",
        }}
      >
        Quick Access
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 8px 20px rgba(0,0,0,.06)",
                cursor: "pointer",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "12px",
                }}
              >
                {card.emoji}
              </div>
              <div
                style={{
                  color: "#290087",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  color: "#777",
                  fontSize: "14px",
                }}
              >
                {card.subtitle}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
