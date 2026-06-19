import Link from "next/link";

export default function LibraryPage() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          color: "#5D2DB8",
          fontSize: "42px",
          marginBottom: "20px",
        }}
      >
        📚 Library
      </h1>

      <input
        placeholder="Search guides..."
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "20px",
          border: "1px solid #eee",
          marginBottom: "30px",
          background: "white",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {/* Guides */}
        <div className="card">
          <h2>💗 Guides</h2>

          <Link href="/library/storage-guide">
            <p>📦 Storage Guide</p>
          </Link>

          <Link href="/library/reconstitution-guide">
            <p>🧪 Reconstitution Guide</p>
          </Link>

          <Link href="/library/injection-sites">
            <p>💉 Injection Sites</p>
          </Link>

          <Link href="/library/insulin-syringe-basics">
            <p>💗 Insulin Syringe Basics</p>
          </Link>
        </div>

        {/* FAQs */}
        <div className="card">
          <h2>❓ FAQs</h2>

          <Link href="/library/group-buy-guide">
            <p>💗 Group Buy Guide</p>
          </Link>

          <Link href="/library/moq-explained">
            <p>📦 MOQ Explained</p>
          </Link>

          <Link href="/library/payment-methods">
            <p>💳 Payment Methods</p>
          </Link>

          <Link href="/library/shipping-process">
            <p>🚚 Shipping Process</p>
          </Link>
        </div>

        {/* Product Information */}
        <div className="card">
          <h2>🧬 Product Information</h2>

          <Link href="/library/storage">
            <p>❄️ Storage</p>
          </Link>

          <Link href="/library/side-effects">
            <p>⚠️ Side Effects</p>
          </Link>

          <Link href="/library/synergistic-stacks">
            <p>🧬 Synergistic Stacks</p>
          </Link>
        </div>

        {/* Shipping */}
        <div className="card">
          <h2>📦 Shipping & Orders</h2>

          <Link href="/library/tracking">
            <p>📍 Tracking</p>
          </Link>

          <Link href="/library/timeline">
            <p>📅 Timeline</p>
          </Link>

          <Link href="/library/delays">
            <p>⏳ Delays</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
