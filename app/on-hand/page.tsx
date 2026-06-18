export default function OnHandPage() {
  const products = [
    {
      name: "TR15",
      stock: 0,
      price: 649,
    },
    {
      name: "TR30",
      stock: 0,
      price: 899,
    },
    {
      name: "GHK-Cu 100mg",
      stock: 0,
      price: 449,
    },
    {
      name: "GHK-Cu 50mg",
      stock: 0,
      price: 399,
    },
    {
      name: "GTT1500",
      stock: 0,
      price: 699,
    },
    {
      name: "Lemon Bottle 50ml",
      stock: 0,
      price: 999,
    },
  ];
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "32px",
      }}
    >
      <h1>🛍 On-Hand Products</h1>
      <div
        className="card"
        style={{
          marginTop: "24px",
          marginBottom: "30px",
        }}
      >
        <h2>⚠️ Currently Sold Out</h2>
        <p style={{ marginTop: "15px" }}>
          No products are currently available.
        </p>
        <p>
          Follow announcements for future availability.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.name}
            className="card"
          >
            <h2>{product.name}</h2>
            <p
              style={{
                marginTop: "15px",
                fontWeight: "bold",
                color:
                  product.stock === 0
                    ? "#B00020"
                    : product.stock <= 4
                    ? "#D97706"
                    : "#15803D",
              }}
            >
              {product.stock === 0
                ? "🔴 Out of Stock"
                : product.stock <= 4
                ? "🟡 Low Stock"
                : "🟢 In Stock"}
            </p>
            <p
              style={{
                marginTop: "10px",
              }}
            >
              {product.stock} vial(s) available
            </p>
            <p
              style={{
                marginTop: "10px",
                color: "#6D2DB8",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              ₱{product.price}
            </p>
          </div>
        ))}
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>💳 Payment Options</h2>
        <p style={{ marginTop: "15px" }}>
          ✓ No admin fee
        </p>
        <p>
          ✓ No international shipping fee
        </p>
        <p>
          ✓ Local shipping via J&T Express
        </p>
        <p>
          ✓ 50% down payment + 50% Cash on Delivery available
        </p>
        <p>
          ✓ Full payment option available
        </p>
        <p>
          ✓ J&T shipping fee will be paid upon delivery and may vary depending on location.
        </p>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>💗 Notes</h2>
        <p style={{ marginTop: "15px" }}>
          • Vials only — not sold as sets.
        </p>
        <p>
          • On-hand products are locally available when in stock.
        </p>
        <p>
          • Availability may change without prior notice.
        </p>
        <p>
          • Cash on Delivery is subject to J&T Express service availability.
        </p>
      </div>
    </div>
  );
}
