export default function CartPage() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          color: "#290087",
          marginBottom: "30px",
        }}
      >
        🛒 My Cart
      </h1>
      <div className="card">
        <h2>Items</h2>
        <p>No items in cart.</p>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Summary</h2>
        <p>Subtotal: ₱0</p>
        <p>Local Shipping: To be calculated</p>
        <p>Total: ₱0</p>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <button>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
