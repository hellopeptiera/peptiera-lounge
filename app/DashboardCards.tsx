import Link from "next/link";

export default function DashboardCards() {
  const cards = [
    {
      emoji: "📚",
      title: "Library",
      subtitle: "Guides, FAQs & Resources",
      href: "/library",
    },
    {
      emoji: "📢",
      title: "Announcements",
      subtitle: "Latest updates",
      href: "/announcements",
    },
    {
      emoji: "🧬",
      title: "Peptide Encyclopedia",
      subtitle: "Learn about peptides",
      href: "/encyclopedia",
    },
    {
      emoji: "💗",
      title: "Price List",
      subtitle: "Latest prices",
      href: "/pricelist",
    },
    {
      emoji: "📦",
      title: "Products",
      subtitle: "Browse available products",
      href: "/products",
    },
    {
      emoji: "🛒",
      title: "Place Order",
      subtitle: "Submit your order",
      href: "/order",
    },
    {
      emoji: "🎀",
      title: "Product Calculator",
      subtitle: "Estimate products, shipping & total",
      href: "/calculator",
    },
    {
      emoji: "💉",
      title: "Dosage Calculator",
      subtitle: "Calculate BAC water & units",
      href: "/dosage",
    },
    {
      emoji: "📦",
      title: "Order Tracker",
      subtitle: "Track your orders",
      href: "/tracker",
    },
    {
      emoji: "📈",
      title: "Progress Tracker",
      subtitle: "Track your journey",
      href: "/progress",
    },
    {
      emoji: "👤",
      title: "Account",
      subtitle: "Manage your profile",
      href: "/account",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
              borderRadius: "24px",
              padding: "24px",
              minHeight: "180px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ fontSize: "36px" }}>{card.emoji}</div>

            <h2>{card.title}</h2>

            <p style={{ color: "#777" }}>
              {card.subtitle}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
