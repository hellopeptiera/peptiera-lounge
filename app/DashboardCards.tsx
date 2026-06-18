import Link from "next/link";

export default function DashboardCards() {
  const cards = [
    {
      emoji: "🛍",
      title: "Shop",
      subtitle: "Browse available products",
      href: "/products",
    },
    {
      emoji: "📦",
      title: "My Orders",
      subtitle: "Track your orders",
      href: "/tracker",
    },
    {
      emoji: "💗",
      title: "Price List",
      subtitle: "Latest prices",
      href: "/pricelist",
    },
    {
  emoji: "📦",
  title: "🎀 Product Calculator",
  subtitle: "Estimate products, shipping & total",
  href: "/calculator",
    },
    {
      emoji: "🛒",
      title: "Place Order",
      subtitle: "Submit your order",
      href: "/order",
    },
    {
      emoji: "📢",
      title: "Announcements",
      subtitle: "Latest updates",
      href: "/announcements",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "25px",
        marginBottom: "35px",
      }}
    >
      {cards.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              background: "white",
              border: "1px solid #F5E3EC",
              borderRadius: "25px",
              padding: "30px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              height: "100%",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "15px",
              }}
            >
              {card.emoji}
            </div>

            <h2
              style={{
                color: "#333",
                marginBottom: "10px",
              }}
            >
              {card.title}
            </h2>

            <p
              style={{
                color: "#888",
              }}
            >
              {card.subtitle}
            </p>

            <div
              style={{
                color: "#FF69B4",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
