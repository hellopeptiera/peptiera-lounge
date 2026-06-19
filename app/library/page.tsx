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
          marginBottom: "20px",
        }}
      >
        📚 Library
      </h1>

      <input
        placeholder="Search guides..."
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "14px",
          border: "1px solid #eee",
          marginBottom: "30px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >

        {/* Guides */}
        <div className="card">
          <h3>💗 Guides</h3>

          <Link href="/library/storage-guide">Storage Guide</Link>
          <br />

          <Link href="/library/reconstitution-guide">
            Reconstitution Guide
          </Link>
          <br />

          <Link href="/library/injection-sites">
            Injection Sites
          </Link>
          <br />

          <Link href="/library/insulin-syringe-basics">
            Insulin Syringe Basics
          </Link>
        </div>

        {/* FAQs */}
        <div className="card">
          <h3>❓ FAQs</h3>

          <Link href="/library/group-buy-guide">
            Group Buy Guide
          </Link>
          <br />

          <Link href="/library/moq-explained">
            MOQ Explained
          </Link>
          <br />

          <Link href="/library/payment-methods">
            Payment Methods
          </Link>
          <br />

          <Link href="/library/shipping-process">
            Shipping Process
          </Link>
        </div>

        {/* Product Information */}
        <div className="card">
          <h3>🧬 Product Information</h3>

          <Link href="/library/storage">
            Storage
          </Link>
          <br />

          <Link href="/library/side-effects">
            Side Effects
          </Link>
          <br />

          <Link href="/library/synergistic-stacks">
            Synergistic Stacks
          </Link>
        </div>

        {/* Shipping */}
        <div className="card">
          <h3>📦 Shipping & Orders</h3>

          <Link href="/library/tracking">
            Tracking
          </Link>
          <br />

          <Link href="/library/timeline">
            Timeline
          </Link>
          <br />

          <Link href="/library/delays">
            Delays
          </Link>
        </div>

      </div>
    </div>
  );
}
