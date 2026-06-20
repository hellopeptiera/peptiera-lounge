import Link from "next/link";

export default function Sidebar() {
  const links = [
    { emoji: "🏠", title: "Dashboard", href: "/" },
    { emoji: "💰", title: "Pricelist", href: "/pricelist" },
    { emoji: "🛍️", title: "Group Buy", href: "/products" },
    { emoji: "📦", title: "My Orders", href: "/tracker" },
    { emoji: "📈", title: "Journey Tracker", href: "/progress" },
    { emoji: "💉", title: "Dosage Calculator", href: "/dosage" },
    { emoji: "🧪", title: "Reconstitution Calc", href: "/calculator" },
    { emoji: "🚚", title: "Shipments", href: "/shipping" },
    { emoji: "💗", title: "Hearts Club", href: "/hearts" },
    { emoji: "📚", title: "Guides & Tutorials", href: "/library" },
    { emoji: "👤", title: "Profile", href: "/profile" },
    { emoji: "💬", title: "Support", href: "/support" },
  ];

  return (
    <div
      style={{
        width: "240px",
        background: "#FDF9F7",
        borderRadius: "36px",
        padding: "30px 22px",
        display: "flex",
        flexDirection: "column",
        minHeight: "95vh",
        boxShadow: "0 10px 30px rgba(0,0,0,.05)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            color: "#2A004F",
            fontSize: "48px",
            fontFamily: "serif",
            fontWeight: 500,
          }}
        >
          PEPTIÉRA
        </div>

        <div
          style={{
            color: "#9A87A5",
            fontSize: "11px",
            letterSpacing: "2px",
          }}
        >
          RESEARCH COMMUNITY
        </div>
      </div>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {links.map((link, index) => (
          <Link
            key={link.title}
            href={link.href}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background:
                  index === 0 ? "#3B006A" : "transparent",
                color:
                  index === 0 ? "white" : "#563B63",
                padding: "14px 18px",
                borderRadius: "18px",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {link.emoji} {link.title}
            </div>
          </Link>
        ))}
      </div>

      {/* Promo Card */}
      <div
        style={{
          marginTop: "auto",
          background: "#3B006A",
          borderRadius: "28px",
          padding: "24px",
          color: "white",
        }}
      >
        <div
          style={{
            letterSpacing: "3px",
            marginBottom: "15px",
          }}
        >
          PEPTIÉRA
        </div>

        <div
          style={{
            fontSize: "26px",
            lineHeight: "1.4",
            marginBottom: "20px",
            fontFamily: "serif",
          }}
        >
          Science.
          <br />
          Trust.
          <br />
          Results.
        </div>

        <button
          style={{
            background: "#FDF9F7",
            color: "#3B006A",
            border: "none",
            borderRadius: "999px",
            padding: "12px 20px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          VIEW OUR MISSION →
        </button>
      </div>
    </div>
  );
}
