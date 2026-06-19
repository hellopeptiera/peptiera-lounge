import Link from "next/link";
export default function DashboardCards() {
  const cards = [
    {
      emoji: "📝",
      title: "Place Order",
      subtitle: "",
      href: "/order",
    },
    {
      emoji: "📦",
      title: "Order Tracker",
      subtitle: "",
      href: "/tracker",
    },
    {
      emoji: "💉",
      title: "Dosage Calculator",
      subtitle: "",
      href: "/dosage",
    },
    {
      emoji: "🧪",
      title: "Reconstitution Calc",
      subtitle: "",
      href: "/reconstitution",
    },
    {
      emoji: "🚚",
      title: "Shipments",
      subtitle: "",
      href: "/shipping",
    },
    {
      emoji: "💗",
      title: "Hearts Club",
      subtitle: "",
      href: "/hearts",
    },
    {
      emoji: "📚",
      title: "Guides",
      subtitle: "",
      href: "/library",
    },
    {
      emoji: "📍",
      title: "Address Book",
      subtitle: "",
      href: "/address",
    },
    {
      emoji: "🎧",
      title: "Support",
      subtitle: "",
      href: "/support",
    },
  ];
  return (
    <div
      style={{
        background: "white",
        borderRadius: "30px",
        padding: "30px",
        boxShadow: "0 8px 25px rgba(0,0,0,.05)",
      }}
    >
      <h3
        style={{
          color: "#773344",
          marginBottom: "25px",
          fontSize: "14px",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        Quick Access
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
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
                background: "#FBF7F5",
                border: "1px solid #EFE7E2",
                borderRadius: "20px",
                padding: "25px 15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                transition: ".3s",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "18px",
                  background: "#F5E9E2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                }}
              >
                {card.emoji}
              </div>
              <div
                style={{
                  color: "#160029",
                  fontSize: "14px",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                {card.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
