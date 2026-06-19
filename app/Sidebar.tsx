import Link from "next/link";
export default function Sidebar() {
  const links = [
    { emoji: "🏠", title: "Dashboard", href: "/" },
    { emoji: "💰", title: "pricelist", href: "/pricelist" },
    { emoji: "🛒", title: "Products", href: "/products" },
    { emoji: "💗", title: "On Hand", href: "/on-hand" },
    { emoji: "📦", title: "Order Tracker", href: "/tracker" },
    { emoji: "📝", title: "Place Order", href: "/order" },
    { emoji: "💉", title: "Dosage Calculator", href: "/dosage" },
    { emoji: "📈", title: "Progress Tracker", href: "/progress" },
    { emoji: "📚", title: "Library", href: "/library" },
    { emoji: "🧬", title: "Encyclopedia", href: "/encyclopedia" },
    { emoji: "🚚", title: "Shipping Updates", href: "/shipping" },
  ];
  return (
    <div
      style={{
        width: "200px",
        background: "#FFFFFF",
        borderRadius: "28px",
        padding: "24px",
        boxShadow: "0 8px 24px rgba(0,0,0,.06)",
      }}
    >
      <h2
        style={{
          color: "#290087",
          marginBottom: "30px",
        }}
      >
        PEPTIÉRA
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            style={{
              textDecoration: "none",
              color: "#4A3F4B",
              padding: "12px",
              borderRadius: "16px",
              transition: ".2s",
            }}
          >
            {link.emoji} {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
