"use client";

import { useState } from "react";

export default function LibraryPage() {
  const [open, setOpen] = useState<number | null>(null);

  const sections = [
    {
      title: "📦 How Group Buy Works",
      items: [
        "Products are ordered by kit and must reach MOQ.",
        "International shipping is shared among members.",
        "Tracking updates will be posted regularly.",
      ],
    },
    {
      title: "🛒 How to Order",
      items: [
        "Browse the price list.",
        "Use the calculator to estimate totals.",
        "Submit your order form.",
        "Wait for payment instructions.",
      ],
    },
    {
      title: "💳 Payment Methods",
      items: [
        "Payment details are provided after confirmation.",
        "Please send proof of payment.",
        "Admin fees are non-refundable under any circumstances.",
      ],
    },
    {
      title: "🚚 Shipping Process",
      items: [
        "International shipping is shared based on weight.",
        "Local shipping is charged separately.",
        "Tracking numbers will be provided when available.",
      ],
    },
    {
      title: "❓ Frequently Asked Questions",
      items: [
        "What happens if MOQ is not reached?",
        "How long does shipping take?",
        "Can I cancel my order?",
        "Are admin fees refundable?",
      ],
    },
    {
      title: "📜 Rules & Regulations",
      items: [
        "Orders are MOQ based.",
        "Admin fees are non-refundable.",
        "Orders cannot be cancelled once submitted.",
      ],
    },
  ];

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "32px",
      }}
    >
      <h1>📚 Peptiéra Library</h1>

      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            background: "#FFFFFF",
            border: "1px solid #C1A0AC",
            borderRadius: "24px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h2
            style={{
              cursor: "pointer",
            }}
            onClick={() =>
              setOpen(open === index ? null : index)
            }
          >
            {section.title} {open === index ? "▲" : "▼"}
          </h2>

          {open === index && (
            <ul style={{ marginTop: "16px" }}>
              {section.items.map((item, i) => (
                <li key={i} style={{ marginBottom: "10px" }}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
