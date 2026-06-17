export default function PriceListPage() {

  const products = [
    { code: "M10", name: "HGH 191AA (Somatropin)", strength: "10iu", price: "₱315" },
    { code: "M12", name: "HGH 191AA (Somatropin)", strength: "12iu", price: "₱416" },
    { code: "M15", name: "HGH 191AA (Somatropin)", strength: "15iu", price: "₱460" },
    { code: "M24", name: "HGH 191AA (Somatropin)", strength: "24iu", price: "₱738" },

    // continue adding the rest of the products here
  ];

  return (
    <div
      style={{
        padding: "30px",
        background: "#FFFDFE",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#E75C9A",
          marginBottom: "25px",
        }}
      >
        💗 Peptiéra Price List
      </h1>

      <div
        style={{
          display: "grid",
          gap: "15px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.code}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "20px",
              border: "1px solid #F8D7E5",
            }}
          >
            <div style={{ color: "#999" }}>{item.code}</div>

            <h3>{item.name}</h3>

            <div>{item.strength}</div>

            <div
              style={{
                color: "#E75C9A",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
