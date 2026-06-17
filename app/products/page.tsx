export default function ProductsPage() {
  return (
    <main
      style={{
        background: "#FFF8FB",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#FF4F9F",
          fontSize: "40px",
        }}
      >
        🎀 Peptiéra Products
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#7A4D7C",
          marginBottom: "40px",
        }}
      >
        Batch orders are open until June 21 ✨
      </p>

      <div
        style={{
          background: "#FFD6EB",
          padding: "25px",
          borderRadius: "25px",
          marginBottom: "20px",
        }}
      >
        <h2>💗 Tirzepatide 30mg</h2>

        <p>Minimum order: 2 vials</p>

        <p>
          Orders are processed once 10 vials (1 kit) are completed.
        </p>

        <p>
          Unlimited kits available.
        </p>
      </div>

      <div
        style={{
          background: "#FFEBC4",
          padding: "25px",
          borderRadius: "25px",
          marginBottom: "20px",
        }}
      >
        <h2>🍋 Lemon Bottle 50ml</h2>

        <p>₱850 per vial</p>

        <p>Minimum order: 2 vials</p>

        <p>
          Orders are processed once 10 vials (1 kit) are completed.
        </p>

        <p>
          Unlimited kits available.
        </p>
      </div>

      <div
        style={{
          background: "#DDBBFF",
          padding: "25px",
          borderRadius: "25px",
          color: "white",
        }}
      >
        <h2>📦 Batch Rules</h2>

        <p>• Order taking until June 21.</p>

        <p>• Minimum of 2 vials per product.</p>

        <p>• Products are processed once 10 vials are completed.</p>

        <p>• Members do NOT need to complete all 10 vials themselves.</p>

        <p>• Unlimited kits available.</p>
      </div>
    </main>
  );
}
