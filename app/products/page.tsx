export default function ProductsPage() {
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
        🛒 Products
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
          <p>₱649 / vial</p>
          <p>MOQ: 10 vials</p>
          <p>Progress: 0/10</p>
          <button>Add to Order</button>
        </div>
        <div className="card">
          <h2>TR30</h2>
          <p>₱899 / vial</p>
          <p>MOQ: 10 vials</p>
          <p>Progress: 0/10</p>
          <button>Add to Order</button>
        </div>
        <div className="card">
          <h2>GHK-Cu 100</h2>
          <p>₱449 / vial</p>
          <p>MOQ: 10 vials</p>
          <p>Progress: 0/10</p>
          <button>Add to Order</button>
        </div>
        <div className="card">
          <h2>GTT1500</h2>
          <p>₱699 / vial</p>
          <p>MOQ: 10 vials</p>
          <p>Progress: 0/10</p>
          <button>Add to Order</button>
        </div>
      </div>
    </div>
  );
}
