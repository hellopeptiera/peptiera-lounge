export default function TopCards() {
  const cards = [
    {
      title: "BATCH 3 STATUS",
      value: "Open",
      subtitle: "Closes in 3 days",
      emoji: "🧪",
      circle: "#DCC6EA",
    },
    {
      title: "MY ORDERS",
      value: "2",
      subtitle: "Active Orders",
      emoji: "📦",
      circle: "#F2E0A8",
    },
    {
      title: "HEARTS CLUB",
      value: "7",
      subtitle: "Hearts",
      emoji: "💗",
      circle: "#F5C8DE",
    },
    {
      title: "OUTSTANDING BALANCE",
      value: "₱1,350",
      subtitle: "Due next order",
      emoji: "👛",
      circle: "#DCC6EA",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "white",
            borderRadius: "30px",
            padding: "25px",
            boxShadow: "0 8px 25px rgba(0,0,0,.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "12px",
                color: "#773344",
                marginBottom: "10px",
              }}
            >
              {card.title}
            </div>

            <div
              style={{
                fontSize: "40px",
                color: "#160029",
              }}
            >
              {card.value}
            </div>

            <div
              style={{
                color: "#777",
                marginTop: "8px",
              }}
            >
              {card.subtitle}
            </div>
          </div>

          <div
            style={{
              width: "85px",
              height: "85px",
              borderRadius: "50%",
              background: card.circle,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "40px",
            }}
          >
            {card.emoji}
          </div>
        </div>
      ))}
    </div>
  );
}
