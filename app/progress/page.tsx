export default function ProgressPage() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "32px",
      }}
    >
      <h1>📈 Progress Tracker</h1>

      <div
        style={{
          background: "#fff",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>⚖️ Weight Progress</h2>

        <p>Starting Weight: —</p>
        <p>Current Weight: —</p>
        <p>Goal Weight: —</p>
        <p>Total Weight Lost: —</p>
      </div>

      <div
        style={{
          background: "#fff",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>📏 Measurements</h2>

        <p>Waist: —</p>
        <p>Hips: —</p>
        <p>Bust: —</p>
        <p>Thigh: —</p>
      </div>

      <div
        style={{
          background: "#fff",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>📸 Progress Photos</h2>

        <p>Coming Soon</p>
      </div>

      <div
        style={{
          background: "#fff",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>🎯 Goals</h2>

        <p>Weekly Goal: —</p>
        <p>Monthly Goal: —</p>
      </div>
    </div>
  );
}
