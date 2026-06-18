export default function DosagePage() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "32px",
      }}
    >
      <h1>💉 Dosage Calculator</h1>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>🧪 Reconstitution Calculator</h2>
        <p>
          Calculate concentration based on peptide amount and BAC water added.
        </p>
      </div>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>💉 Units Converter</h2>
        <p>
          Convert mg to insulin syringe units.
        </p>
      </div>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>📏 IU Calculator</h2>
        <p>
          Convert between IU, mL and units.
        </p>
      </div>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>⭐ Favorite Presets</h2>
        <p>
          Save commonly used concentrations for quick access.
        </p>
      </div>
    </div>
  );
}
