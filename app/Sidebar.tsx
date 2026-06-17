import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        background: "#FFF7FA",
        padding: "30px 20px",
        borderRight: "1px solid #F5D6E6",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#FF69B4",
          marginBottom: "40px",
        }}
      >
        🎀 Peptiéra
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Link href="/">🏠 Dashboard</Link>

        <Link href="/products">🛍 Products</Link>

        <Link href="/pricelist">💗 Price List</Link>

        <Link href="/tracker">📦 Order Tracker</Link>

        <Link href="/order">🛒 Place Order</Link>

        <Link href="/calculator">🧮 Calculator</Link>

        <Link href="/announcements">📢 Announcements</Link>
      </div>
    </div>
  );
}
