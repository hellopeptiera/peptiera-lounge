export default function ShippingPage() {
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
        🚚 Shipping Updates
      </h1>
      <div className="card">
        <h2>International Shipment</h2>
        <br />
        <p>Status: Awaiting Dispatch</p>
        <p>Carrier: -----</p>
        <p>Tracking Number: -----</p>
        <p>Estimated Arrival: -----</p>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Local Shipment</h2>
        <br />
        <p>Courier: J&T Express</p>
        <p>Tracking Number: -----</p>
        <p>Status: Pending</p>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Shipping Timeline</h2>
        <br />
        <p>🟢 Order Paid</p>
        <p>🟢 MOQ Complete</p>
        <p>🟡 International Shipping</p>
        <p>⚪ Arrived in PH</p>
        <p>⚪ Local Shipping</p>
        <p>⚪ Delivered</p>
      </div>
    </div>
  );
}
