"use client";

import { useState } from "react";

export default function LibraryPage() {
  const [open, setOpen] = useState<number | null>(null);

  const sections = [
    {
      title: "📦 How Group Buy Works",
      content: [
        "Products are ordered by kit and must reach MOQ.",
        "International shipping is shared among members.",
        "An admin fee is required to secure your slot.",
        "Tracking updates will be posted regularly.",
      ],
    },
    {
      title: "🛒 How to Order",
      content: [
        "Browse the price list.",
        "Use the calculator to estimate totals.",
        "Submit your order form.",
        "Wait for invoice and payment instructions.",
      ],
    },
    {
      title: "💳 Payment Methods",
      content: [
        "Payment details will be provided after order confirmation.",
        "Send proof of payment after completing your transaction.",
      ],
    },
    {
      title: "💉 Reconstitution Guide",
      content: [
        "Use bacteriostatic water.",
        "Inject slowly into the vial.",
        "Swirl gently, do not shake.",
        "Store reconstituted products at 2-8°C.",
      ],
    },
    {
      title: "📦 Shipping Process",
      content: [
        "International shipping is shared based on weight.",
        "Local shipping will be arranged once items arrive.",
        "Tracking numbers will be provided when available.",
      ],
    },
    {
      title: "❓ FAQ",
      content: [
        "Q: Is the admin fee refundable?",
        "A: No. Admin fee is non-refundable under any circumstances.",
        "",
        "Q: Can I cancel my order?",
        "A: Orders cannot be cancelled once submitted to the manufacturer.",
      ],
    },
    {
      title: "📜 Rules & Regulations",
      content: [
        "Respect all members.",
        "No spamming.",
        "No refund for admin fees.",
        "Orders are final once submitted.",
      ],
    },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1>📚 Peptiéra Library</h1>
      <p>Guides, FAQs and important information.</p>

      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #eee",
            borderRadius: "16px",
            padding: "16px",
            marginBottom: "16px",
            background: "#fff",
          }}
        >
          <h2
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(open === index ? null : index)}
          >
            {section.title} {open === index ? "▲" : "▼"}
          </h2>

          {open === index && (
            <ul>
              {section.content.map((item, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
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
