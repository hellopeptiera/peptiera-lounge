export default function AccountPage() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "32px",
      }}
    >
      <h1>👤 My Account</h1>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>💗 Profile</h2>
        <p>Name: —</p>
        <p>Email: —</p>
        <p>Member Since: —</p>
      </div>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>📦 Order History</h2>
        <p>No orders yet.</p>
      </div>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>📈 Progress Summary</h2>
        <p>Current Weight: —</p>
        <p>Goal Weight: —</p>
        <p>Total Weight Lost: —</p>
      </div>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>🔔 Notifications</h2>
        <p>Shipping Updates</p>
        <p>Batch Announcements</p>
        <p>Product Restocks</p>
      </div>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #C1A0AC",
          borderRadius: "24px",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <h2>⚙️ Settings</h2>
        <p>Change Password</p>
        <p>Notification Preferences</p>
        <p>Log Out</p>
      </div>
    </div>
  );
}
