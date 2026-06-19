export default function FooterCards() {
  const items = [
    {
      emoji: "🔒",
      title: "Secure & Private",
      subtitle: "Your information is protected",
    },
    {
      emoji: "🛡️",
      title: "Trusted Community",
      subtitle: "Safe and supportive environment",
    },
    {
      emoji: "💗",
      title: "Quality Assured",
      subtitle: "Carefully sourced products",
    },
    {
      emoji: "🎧",
      title: "Support Available",
      subtitle: "We're here to help",
    },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        marginTop: "40px",
      }}
    >
      {items.map((item) => (
        <div
          key={item.title}
          style={{
            background: "#FFFFFF",
            borderRadius: "28px",
            padding: "30px",
            boxShadow: "0 8px 24px rgba(0,0,0,.05)",
          }}
        >
          <div
            style={{
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            {item.emoji}
          </div>
          <div
            style={{
              color: "#16131F",
              fontWeight: 600,
              marginBottom: "10px",
            }}
          >
            {item.title}
          </div>
          <div
            style={{
              color: "#806C79",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            {item.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
}
