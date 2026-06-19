import Link from "next/link";
export default function ProductsPage() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Link
  href="/"
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#F5E9E2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "#160029",
    fontSize: "24px",
    boxShadow: "0 8px 20px rgba(0,0,0,.08)",
    marginBottom: "20px",
  }}
>
  ←
</Link>
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
