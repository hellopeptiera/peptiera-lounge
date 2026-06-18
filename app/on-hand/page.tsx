export default function OnHandPage() {
  const products = [
    {
      name: "TR15",
      price: "₱649",
      withBac: "₱749",
    },
    {
      name: "TR30",
      price: "₱899",
      withBac: "₱999",
    },
    {
      name: "GHK-Cu 100mg",
      price: "₱449",
      withBac: "₱549",
    },
    {
      name: "GHK-Cu 50mg",
      price: "₱399",
      withBac: "₱499",
    },
    {
      name: "GTT1500",
      price: "₱699",
      withBac: "₱799",
    },
    {
      name: "Lemon Bottle 50ml",
      price: "₱999",
      withBac: "",
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
        style={{
          background: "#FFF8FB",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>⚠️ Currently Sold Out</h2>
        <p>
          On-hand items are temporarily unavailable.
          Follow announcements for availability updates.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.name}
            style={{
              background: "#FFFFFF",
              border: "1px solid #C1A0AC",
              borderRadius: "24px",
              padding: "24px",
            }}
          >
            <h2>🔴 {product.name}</h2>
            <p>
              <strong>Per vial:</strong> {product.price}
            </p>
            {product.withBac && (
              <p>
                <strong>With BAC:</strong> {product.withBac}
              </p>
            )}
            <p
              style={{
                color: "#B00020",
                marginTop: "12px",
              }}
            >
              Out of Stock
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "30px",
        }}
      >
        <h2>🧪 Add-Ons</h2>
        <p>BAC3 (3ml) — ₱95</p>
        <p>BAC10 (10ml) — ₱115</p>
        <p>Sterile 3cc Syringe — ₱10</p>
      </div>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "30px",
        }}
      >
        <h2>💗 Notes</h2>
        <p>♡ Vials only — not sold as sets.</p>
        <p>♡ On-hand items are locally available when in stock.</p>
        <p>♡ Cash on Delivery (COD) is available with a 50% down payment.</p>
        <p>♡ Remaining balance will be paid upon delivery.</p>
        <p>♡ Availability may change without prior notice.</p>
      </div>
    </div>
  );
}
