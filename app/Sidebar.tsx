import Link from "next/link";
export default function Sidebar() {
  const links = [
    { emoji: "🏠", title: "Dashboard", href: "/" },
    { emoji: "💰", title: "Pricelist", href: "/pricelist" },
    { emoji: "🛒", title: "Products", href: "/products" },
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
        width: "220px",
        background: "#DCCEFF",
        borderRadius: "32px",
        padding: "28px",
        boxShadow: "0 10px 30px rgba(109,45,184,.15)",
      }}
    >
      <h2
        style={{
          color: "#6D2DB8",
          marginBottom: "30px",
          fontWeight: 700,
          letterSpacing: "1px",
        }}
      >
        PEPTIÉRA
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                color: "#4A3F4B",
                padding: "14px 16px",
                borderRadius: "18px",
                background: "rgba(255,255,255,.45)",
                fontWeight: 500,
                transition: ".3s",
              }}
            >
              {link.emoji} {link.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
