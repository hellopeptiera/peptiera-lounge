import Link from "next/link";
export default function DashboardCards() {
  const backgrounds = [
    "#FFF6FB",
    "#F3EEFF",
    "#FFFBE7",
    "#FFF0F8",
    "#F8F3FF",
    "#FFF8F1",
  ];
  const cards = [
    {
      emoji: "💰",
      title: "Pricelist",
      subtitle: "Pricelist info",
      href: "/pricelist",
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
          color: "#6D2DB8",
          marginBottom: "24px",
          fontSize: "28px",
          fontWeight: 700,
        }}
      >
        ✨ Quick Access
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {cards.map((card, index) => (
          <Link
            key={card.title}
            href={card.href}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: backgrounds[index % backgrounds.length],
                borderRadius: "28px",
                padding: "28px",
                border: "2px solid #F8E8FF",
                boxShadow: "0 8px 25px rgba(255,133,192,.15)",
                cursor: "pointer",
                height: "100%",
                transition: ".3s",
              }}
            >
              <div
                style={{
                  fontSize: "34px",
                  marginBottom: "15px",
                }}
              >
                {card.emoji}
              </div>
              <div
                style={{
                  color: "#6D2DB8",
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  color: "#777",
                  fontSize: "14px",
                  lineHeight: "1.6",
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
