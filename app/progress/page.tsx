export default function ProgressPage() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          color: "#290087",
          marginBottom: "30px",
        }}
      >
        📈 Progress Tracker
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div className="card">
          <h2>⚖️ Starting Weight</h2>
          <h1>-- kg</h1>
        </div>
        <div className="card">
          <h2>🌸 Current Weight</h2>
          <h1>-- kg</h1>
        </div>
        <div className="card">
          <h2>🎯 Goal Weight</h2>
          <h1>-- kg</h1>
        </div>
        <div className="card">
          <h2>✨ Weight Lost</h2>
          <h1>-- kg</h1>
        </div>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>📏 Measurements</h2>
        <p>Waist: -- cm</p>
        <p>Hips: -- cm</p>
        <p>Thighs: -- cm</p>
        <p>Arms: -- cm</p>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>📸 Progress Photos</h2>
        <p>
          Upload front, side and back photos to monitor your journey.
        </p>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>💗 Milestones</h2>
        <p>5 kg Lost</p>
        <p>10 kg Lost</p>
        <p>15 kg Lost</p>
        <p>20 kg Lost</p>
      </div>
    </div>
  );
}
