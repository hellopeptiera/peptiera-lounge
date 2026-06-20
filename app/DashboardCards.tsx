import Link from "next/link";
export default function DashboardCards() {
  const cards = [
    { emoji: "💰", title: "Pricelist", href: "/pricelist" },
    { emoji: "📝", title: "Place Order", href: "/order" },
    { emoji: "📦", title: "Order Tracker", href: "/tracker" },
    { emoji: "💉", title: "Dosage Calculator", href: "/dosage" },
    { emoji: "🧪", title: "Reconstitution Calc", href: "/reconstitution" },
    { emoji: "🚚", title: "Shipments", href: "/shipping" },
    { emoji: "📚", title: "Guides", href: "/library" },
    { emoji: "📍", title: "Address Book", href: "/address" },
    { emoji: "🎧", title: "Support", href: "/support" },
  ];
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "32px",
        padding: "35px",
        boxShadow: "0 8px 24px rgba(0,0,0,.05)",
        marginTop: "30px",
      }}
    >
      <h3
        style={{
          color: "#806C79",
          marginBottom: "30px",
          fontSize: "13px",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Quick Access
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
          gap: "22px",
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
                background: "#FCFAF9",
                borderRadius: "24px",
                padding: "30px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
                cursor: "pointer",
                border: "1px solid #F1ECE8",
                transition: ".3s",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "22px",
                  background: "#F5E9E2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                }}
              >
                {card.emoji}
              </div>
              <div
                style={{
                  color: "#16131F",
                  fontSize: "15px",
                  fontWeight: 500,
                  textAlign: "center",
                  lineHeight: "1.5",
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
