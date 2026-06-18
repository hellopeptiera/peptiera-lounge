"use client";

import { useState } from "react";

export default function EncyclopediaPage() {
  const [search, setSearch] = useState("");

  const peptides = [
    {
      name: "Tirzepatide",
      category: "🔥 Weight Loss",
      benefits: [
        "Appetite control",
        "Reduced food noise",
        "Improved insulin sensitivity",
        "Weight management",
      ],
      sideEffects: [
        "Nausea",
        "Vomiting",
        "Constipation",
        "Diarrhea",
        "Fatigue",
      ],
      stacks: [
        "Cagrilintide → Enhanced satiety",
        "GHK-Cu → Weight loss + skin support",
      ],
      contraindications: [
        "Pregnancy",
        "Breastfeeding",
        "MEN2 syndrome",
        "History of medullary thyroid carcinoma",
      ],
    },

    {
      name: "GHK-Cu",
      category: "✨ Skin & Hair",
      benefits: [
        "Collagen support",
        "Hair growth support",
        "Skin rejuvenation",
        "Anti-aging support",
      ],
      sideEffects: [
        "Mild injection site irritation",
      ],
      stacks: [
        "Glutathione → Skin brightening stack",
        "Tirzepatide → Weight loss + skin support",
      ],
      contraindications: [],
    },

    {
      name: "Glutathione (GTT1500)",
      category: "✨ Skin & Hair",
      benefits: [
        "Antioxidant support",
        "Skin brightening",
        "General wellness",
      ],
      sideEffects: [
        "Injection site irritation",
      ],
      stacks: [
        "GHK-Cu → Skin and hair stack",
      ],
      contraindications: [],
    },

    {
      name: "KPV",
      category: "🩹 Healing & Recovery",
      benefits: [
        "Gut support",
        "Anti-inflammatory support",
      ],
      sideEffects: [],
      stacks: [
        "BPC-157 → Recovery stack",
      ],
      contraindications: [],
    },

    {
      name: "DSIP",
      category: "🧠 Cognitive & Mood",
      benefits: [
        "Sleep support",
        "Relaxation",
      ],
      sideEffects: [
        "Drowsiness",
      ],
      stacks: [
        "Magnesium → Sleep stack",
      ],
      contraindications: [],
    },

    {
      name: "NAD+",
      category: "⚡ Energy & Longevity",
      benefits: [
        "Cellular energy",
        "Healthy aging",
      ],
      sideEffects: [
        "Flushing",
        "Injection discomfort",
      ],
      stacks: [
        "SS-31 → Longevity stack",
        "MOTS-c → Energy stack",
      ],
      contraindications: [],
    },
  ];

  const filtered = peptides.filter(
    (peptide) =>
      peptide.name.toLowerCase().includes(search.toLowerCase()) ||
      peptide.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "32px",
      }}
    >
      <h1>🧬 Peptide Encyclopedia</h1>

      <input
        type="text"
        placeholder="Search peptide or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "16px",
          marginTop: "20px",
          marginBottom: "30px",
          border: "1px solid #C1A0AC",
        }}
      />

      {filtered.map((peptide) => (
        <div
          key={peptide.name}
          style={{
            background: "#fff",
            border: "1px solid #C1A0AC",
            borderRadius: "24px",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <h2>{peptide.name}</h2>

          <p>
            <strong>📂 Category:</strong> {peptide.category}
          </p>

          <br />

          <strong>✨ Potential Benefits</strong>
          <ul>
            {peptide.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <br />

          <strong>⚠️ Common Side Effects</strong>
          <ul>
            {peptide.sideEffects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <br />

          <strong>🧪 Synergistic Stacks</strong>
          <ul>
            {peptide.stacks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <br />

          <strong>🚫 Contraindications</strong>
          <ul>
            {peptide.contraindications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
