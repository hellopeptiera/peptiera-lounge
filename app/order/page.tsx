export default function OrderPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFF8FB",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          color: "#FF4F9F",
          textAlign: "center",
          fontSize: "2.5rem",
        }}
      >
        🎀 Place Order
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#7A4D7C",
          marginBottom: "40px",
        }}
      >
        Batch 1 • Order taking until June 21 ✨
      </p>

      <div
        style={{
          background: "#FFD6EB",
          padding: "25px",
          borderRadius: "25px",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <h2>Customer Information</h2>

        <p>Name</p>
        <input
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "15px",
            border: "none",
            marginBottom: "20px",
          }}
        />

        <p>Telegram Username</p>
        <input
          placeholder="@username"
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "15px",
            border: "none",
            marginBottom: "20px",
          }}
        />

        <p>Product</p>
        <select
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "15px",
            border: "none",
            marginBottom: "20px",
          }}
        >
          <option>TR15</option>
          <option>TR30</option>
          <option>GHK-Cu 100</option>
          <option>GTT1500</option>
          <option>Lemon Bottle 50ml</option>
        </select>

        <p>Quantity</p>
        <input
          type="number"
          placeholder="Minimum 2"
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "15px",
            border: "none",
            marginBottom: "30px",
          }}
        />

        <button
          style={{
            background: "#FF4F9F",
            color: "white",
            width: "100%",
            padding: "18px",
            borderRadius: "20px",
            border: "none",
            fontSize: "18px",
          }}
        >
          Submit Order 🎀
        </button>
      </div>

      <div
        style={{
          background: "#E6D5FF",
          padding: "25px",
          borderRadius: "25px",
          maxWidth: "500px",
          margin: "30px auto",
        }}
      >
        <h2>📦 Batch Rules</h2>

        <p>✨ Minimum order: 2 vials per product.</p>

        <p>📦 Products are processed once 10 vials (1 kit) are completed.</p>

        <p>🔄 Unlimited kits available.</p>

        <p>⏳ Batch 1 closes June 21.</p>
      </div>
    </main>
  );
}
