export default function DosagePage() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          color: "#290087",
          marginBottom: "30px",
        }}
      >
        💉 Dosage Calculator
      </h1>
      <div className="card">
        <h2>Select Product</h2>
        <select>
          <option>Tirzepatide 15mg</option>
          <option>Tirzepatide 30mg</option>
          <option>GHK-Cu 50mg</option>
          <option>GHK-Cu 100mg</option>
          <option>GTT1500</option>
          <option>NAD+</option>
        </select>
        <br />
        <br />
        <h2>BAC Water (ml)</h2>
        <input placeholder="Example: 3" />
        <br />
        <br />
        <h2>Desired Dose (mg)</h2>
        <input placeholder="Example: 2.5" />
        <br />
        <br />
        <button>
          Calculate
        </button>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Results</h2>
        <p>
          Syringe Units: --
        </p>
        <p>
          Volume (ml): --
        </p>
      </div>
    </div>
  );
}
