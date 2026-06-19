export default function OnHandPage() {
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
        💗 On-Hand Store
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        <div className="card">
          <h2>TR15</h2>
          <p>₱649</p>
          <p>Stock: 0</p>
          <p>🔴 Out of Stock</p>
          <button disabled>
            Add to Cart
          </button>
        </div>
        <div className="card">
          <h2>TR30</h2>
          <p>₱899</p>
          <p>Stock: 0</p>
          <p>🔴 Out of Stock</p>
          <button disabled>
            Add to Cart
          </button>
        </div>
        <div className="card">
          <h2>GHK-Cu 100</h2>
          <p>₱449</p>
          <p>Stock: 0</p>
          <p>🔴 Out of Stock</p>
          <button disabled>
            Add to Cart
          </button>
        </div>
        <div className="card">
          <h2>GTT1500</h2>
          <p>₱699</p>
          <p>Stock: 0</p>
          <p>🔴 Out of Stock</p>
          <button disabled>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
