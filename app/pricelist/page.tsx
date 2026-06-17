export default function PriceListPage() {
  const products = [
    { code: "TR5", name: "Tirzepatide", strength: "5mg", price: "₱259" },
    { code: "TR10", name: "Tirzepatide", strength: "10mg", price: "₱328" },
    { code: "TR15", name: "Tirzepatide", strength: "15mg", price: "₱429" },
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
