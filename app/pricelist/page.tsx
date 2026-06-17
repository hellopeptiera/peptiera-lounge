export default function PriceListPage() {
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
          textAlign: "center",
          color: "#FF4F9F",
          fontSize: "2.8rem",
          marginBottom: "10px",
        }}
      >
        💗 Peptiéra Price List
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

      {/* Weight Management */}
      <div
        style={{
          background: "#FFD6EB",
          padding: "25px",
          borderRadius: "25px",
          marginBottom: "20px",
        }}
      >
        <h2>🔥 Weight Management</h2>

        <p>TR15 — ₱429</p>
        <p>TR30 — ₱605</p>
        <p>RT10 — ₱605</p>
        <p>RT15 — ₱693</p>
        <p>🍋 Lemon Bottle 50ml — ₱850</p>
      </div>

      {/* Skin & Beauty */}
      <div
        style={{
          background: "#E6D5FF",
          padding: "25px",
          borderRadius: "25px",
          marginBottom: "20px",
        }}
      >
        <h2>💙 Skin & Beauty</h2>

        <p>GHK-Cu 50mg — ₱208</p>
        <p>GHK-Cu 100mg — ₱284</p>
        <p>GTT1500 — ₱448</p>

        <p>✨ PDRN Skin Booster</p>
        <p>✨ Pink HA Skin Booster</p>
        <p>✨ Collagen Skin Booster</p>
        <p>✨ Whitening & Spot-Fading Skin Booster</p>
      </div>

      {/* Supplies */}
      <div
        style={{
          background: "#FFF0C7",
          padding: "25px",
          borderRadius: "25px",
          marginBottom: "20px",
        }}
      >
        <h2>💉 Supplies</h2>

        <p>BAC Water 3ml — ₱57</p>
        <p>BAC Water 10ml — ₱70</p>
      </div>

      {/* Rules */}
      <div
        style={{
          background: "#FF4F9F",
          color: "white",
          padding: "25px",
          borderRadius: "25px",
        }}
      >
        <h2>📦 Batch Rules</h2>

        <p>✨ Minimum order is 2 vials per product.</p>

        <p>📦 Products are processed once 10 vials (1 kit) are completed.</p>

        <p>🔄 Unlimited kits available.</p>

        <p>⏳ Batch 1 closes June 21.</p>
      </div>
    </main>
  );
}
