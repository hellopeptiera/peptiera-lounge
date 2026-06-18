import Link from "next/link";

export default function DashboardCards() {
  const cards = [
    {
      emoji: "🛒",
      title: "Products",
      subtitle: "Browse available products",
      href: "/products",
    },
    {
      emoji: "💗",
      title: "On Hand",
      subtitle: "Ready-to-ship items",
      href: "/onhand",
    },
    {
      emoji: "📦",
      title: "Order Tracker",
      subtitle: "Track your orders",
      href: "/tracker",
    },
    {
      emoji: "📝",
      title: "Place Order",
      subtitle: "Submit your order",
      href: "/order",
    },
    {
      emoji: "💉",
      title: "Dosage Calculator",
      subtitle: "Calculate BAC water & units",
      href: "/dosage",
    },
    {
      emoji: "🧮",
      title: "Product Calculator",
      subtitle: "Estimate products & shipping",
      href: "/calculator",
    },
    {
      emoji: "📈",
      title: "Progress Tracker",
      subtitle: "Track your journey",
      href: "/progress",
    },
    {
      emoji: "📚",
      title: "Library",
      subtitle: "Guides & FAQs",
      href: "/library",
    },
    {
      emoji: "🧬",
      title: "Encyclopedia",
      subtitle: "Learn about peptides",
      href: "/encyclopedia",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "20px",
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
              background: "#fff",
              borderRadius: "28px",
              padding: "28px",
              minHeight: "180px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              border: "1px solid #E8DDE4",
              transition: ".2s",
            }}
          >
            <div
              style={{
                fontSize: "42px",
                marginBottom: "16px",
              }}
            >
              {card.emoji}
            </div>

            <h2
              style={{
                color: "#6D2DB8",
                marginBottom: "8px",
              }}
            >
              {card.title}
            </h2>

            <p
              style={{
                color: "#806C79",
                fontSize: "14px",
              }}
            >
              {card.subtitle}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
