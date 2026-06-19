export default function CheckoutPage() {
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
        💳 Checkout
      </h1>
      <div className="card">
        <h2>Payment Method</h2>
        <p>○ Full Payment</p>
        <p>○ 50% Down Payment</p>
        <p>○ Cash on Delivery (if supported by J&T)</p>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Fees</h2>
        <p>Product Price: ₱0</p>
        <p>Local Shipping: To be calculated</p>
        <p>Admin Fee: FREE</p>
        <p>International Shipping Fee: FREE</p>
        <h3>Total Due Today: ₱0</h3>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Courier</h2>
        <p>🚚 J&T Express</p>
        <p>
          Shipping fee will be collected upon delivery and may vary depending on location.
        </p>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <button>
          Confirm Order
        </button>
      </div>
    </div>
  );
}
