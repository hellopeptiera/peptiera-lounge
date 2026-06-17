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
          color: "#FF4F9F",
          textAlign: "center",
          fontSize: "2.5rem",
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

      <div
        style={{
          background: "#FFD6EB",
          padding: "25px",
          borderRadius: "25px",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <h2>🔥 Weight Management</h2>

        <p>TR15 — ₱429</p>
        <p>TR30 — ₱605</p>
        <p>RT10 — ₱605</p>
        <p>RT15 — ₱693</p>

        <h2>💙 Skin & Beauty</h2>

        <p>GHK-Cu 50 — ₱208</p>
        <p>GHK-Cu 100 — ₱284</p>
        <p>GTT1500 — ₱448</p>
        <p>Lemon Bottle 50ml — ₱850</p>

        <h2>💉 Supplies</h2>

        <p>BAC Water 3ml — ₱57</p>
        <p>BAC Water 10ml — ₱70</p>
      </div>
    </main>
  );
}
