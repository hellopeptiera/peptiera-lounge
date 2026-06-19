export default function AccountPage() {
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
        👤 My Account
      </h1>
      <div className="card">
        <h2>Profile Information</h2>
        <p>Name: Tammy</p>
        <p>Member Since: 2026</p>
        <p>Total Orders: 0</p>
        <p>Hearts Club: 0 Hearts 💗</p>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Settings</h2>
        <p>Change Address</p>
        <p>Payment Methods</p>
        <p>Notifications</p>
        <p>Account Security</p>
      </div>
      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Order History</h2>
        <p>No orders yet.</p>
      </div>
    </div>
  );
}
