export default function HeroBanner() {
  const cards = [
    {
      title: "Batch Status",
      value: "Open",
      emoji: "🧪",
      bg: "#F8F5FF",
      circle: "#E3D4FF",
    },
    {
      title: "My Orders",
      value: "0",
      emoji: "📦",
      bg: "#FFF8E6",
      circle: "#FFE9A9",
    },
    {
      title: "Hearts Club",
      value: "0",
      emoji: "💗",
      bg: "#FFEAF7",
      circle: "#FFD1E8",
    },
    {
      title: "Outstanding Balance",
      value: "₱0",
      emoji: "👛",
      bg: "#FFF1F7",
      circle: "#FFD8E9",
    },
  ];
  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "32px",
          padding: "40px",
          boxShadow: "0 8px 24px rgba(0,0,0,.06)",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <div>
            <div
              style={{
                color: "#806C79",
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Welcome back,
            </div>
            <h1
              style={{
                color: "#16131F",
                fontSize: "64px",
                margin: 0,
                fontWeight: 500,
              }}
            >
              Tammy ♡
            </h1>
            <p
              style={{
                color: "#806C79",
                marginTop: "16px",
                fontSize: "16px",
              }}
            >
              Thank you for being part of Peptiéra.
            </p>
          </div>
          <div
            style={{
              color: "#806C79",
              fontStyle: "italic",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            ✨ Small daily choices
            <br />
            create big transformations.
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              background: card.bg,
              borderRadius: "28px",
              padding: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  color: "#806C79",
                  fontSize: "14px",
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  color: "#290087",
                  fontSize: "32px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                {card.value}
              </div>
            </div>
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: card.circle,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "32px",
              }}
            >
              {card.emoji}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
