
export default function ProductCards() {
  const products = [
    {
      name: "TR15",
      price: "₱629",
      progress: 0,
    },
    {
      name: "TR30",
      price: "₱899",
      progress: 0,
    },
    {
      name: "GHK-Cu 100",
      price: "₱549",
      progress: 0,
    },
    {
      name: "GTT1500",
      price: "₱429",
      progress: 0,
    },
  ];

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "32px",
        padding: "35px",
        marginTop: "35px",
        boxShadow: "0 8px 24px rgba(0,0,0,.05)",
      }}
    >
      <h2
        style={{
          color: "#16131F",
          marginBottom: "30px",
        }}
      >
        🛍️ Group Buy Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.name}
            style={{
              background: "#FBF7F5",
              borderRadius: "24px",
              padding: "25px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                marginBottom: "10px",
              }}
            >
              🧪
            </div>

            <div
              style={{
                color: "#16131F",
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              {product.name}
            </div>

            <div
              style={{
                color: "#806C79",
                marginTop: "10px",
              }}
            >
              {product.price}
            </div>

            <div
              style={{
                marginTop: "20px",
                height: "10px",
                background: "#ECECEC",
                borderRadius: "999px",
              }}
            >
              <div
                style={{
                  width: `${product.progress * 10}%`,
                  background: "#C9A7EB",
                  height: "100%",
                  borderRadius: "999px",
                }}
              />
            </div>

            <div
              style={{
                marginTop: "10px",
                color: "#806C79",
              }}
            >
              {product.progress}/10 vials
            </div>

            <button
              style={{
                marginTop: "20px",
                width: "100%",
                background: "#2A004F",
                color: "white",
                border: "none",
                borderRadius: "999px",
                padding: "14px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
