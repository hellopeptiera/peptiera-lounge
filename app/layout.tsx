import "./globals.css";
import Sidebar from "./Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#F6FFE9",
          padding: "20px",
          margin: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "24px",
            minHeight: "100vh",
          }}
        >
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main
            style={{
              flex: 1,
              background: "#FFFFFF",
              borderRadius: "32px",
              padding: "32px",
              boxShadow: "0 8px 24px rgba(0,0,0,.06)",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
