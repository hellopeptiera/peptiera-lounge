import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #FFF8FB, #FFEAF4, #F8E8FF)",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      {/* Hero */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            color: "#FF4F9F",
            fontSize: "3rem",
            marginBottom: "10px",
          }}
        >
          🎀 Peptiéra
        </h1>

        <p
          style={{
            color: "#7A4D7C",
            fontSize: "1.2rem",
          }}
        >
          Fresh • Potent • Trusted
        </p>

        <p
          style={{
            color: "#7A4D7C",
          }}
        >
          Private Members-Only Wellness Platform ✨
        </p>
      </div>

      {/* Quick Access */}
      <h2
        style={{
          color: "#FF4F9F",
          marginBottom: "20px",
        }}
      >
        ✨ Quick Access
      </h2>

      <div
        style={{
          display: "grid",
          gap: "15px",
          marginBottom: "40px",
        }}
      >
        <Link href="/products" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#FFD6EB",
              padding: "20px",
              borderRadius: "25px",
              color: "black",
            }}
          >
            🛍 Products
          </div>
        </Link>

        <Link href="/pricelist" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#FFF0C7",
              padding: "20px",
              borderRadius: "25px",
              color: "black",
            }}
          >
            💗 Price List
          </div>
        </Link>

        <Link href="/tracker" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#DDBBFF",
              padding: "20px",
              borderRadius: "25px",
              color: "white",
            }}
          >
            📦 Order Tracker
          </div>
        </Link>

        <Link href="/calculator" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#CFE9FF",
              padding: "20px",
              borderRadius: "25px",
              color: "black",
            }}
          >
            🧮 Order Calculator
          </div>
        </Link>

        <Link href="/order" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#FFC8E2",
              padding: "20px",
              borderRadius: "25px",
              color: "black",
            }}
          >
            🛒 Place Order
          </div>
        </Link>

        <Link href="/announcements" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#FF4F9F",
              padding: "20px",
              borderRadius: "25px",
              color: "white",
            }}
          >
            📢 Announcements
          </div>
        </Link>
      </div>

      {/* Featured Products */}
      <h2
        style={{
          color: "#FF4F9F",
          marginBottom: "20px",
        }}
      >
        ⭐ Featured Products
      </h2>

      <div
        style={{
          display: "grid",
          gap: "15px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "#FFD6EB",
            padding: "20px",
            borderRadius: "25px",
          }}
        >
          💗 TR30
          <br />
          Tirzepatide 30mg
        </div>

        <div
          style={{
            background: "#FFF0C7",
            padding: "20px",
            borderRadius: "25px",
          }}
        >
          🍋 Lemon Bottle 50ml
        </div>

        <div
          style={{
            background: "#DDBBFF",
            padding: "20px",
            borderRadius: "25px",
          }}
        >
          💙 GHK-Cu 100
        </div>

        <div
          style={{
            background: "#FFD6EB",
            padding: "20px",
            borderRadius: "25px",
          }}
        >
          ✨ GTT1500
        </div>
      </div>

      {/* Updates */}
      <h2
        style={{
          color: "#FF4F9F",
          marginBottom: "20px",
        }}
      >
        📢 Latest Updates
      </h2>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "25px",
        }}
      >
        <p>📢 Batch 1 closes June 21</p>
        <p>📦 TR30 Kit #1 completed</p>
        <p>🚚 Shipment ETA June 28</p>
        <p>✨ Unlimited kits available</p>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#7A4D7C",
        }}
      >
        <h3>🎀 Peptiéra</h3>
        <p>Fresh • Potent • Trusted</p>
        <p>© 2026 Peptiéra</p>
      </div>
    </main>
  );
}
