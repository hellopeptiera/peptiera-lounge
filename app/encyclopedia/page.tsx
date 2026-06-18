"use client";
import { useState } from "react";
export default function EncyclopediaPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "Weight Loss",
    "Skin & Hair",
    "Healing & Recovery",
    "Cognitive & Mood",
    "Energy & Longevity",
    "Libido & Hormones",
  ];
  const peptides = [
    {
      name: "Tirzepatide",
      category: "Weight Loss",
      benefits: [
        "Appetite control",
        "Reduced food noise",
        "Improved insulin sensitivity",
        "Weight management",
      ],
      sideEffects: [
        "Nausea",
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
      ],
    },
    {
      name: "GHK-Cu",
      category: "Skin & Hair",
      benefits: [
        "Hair support",
        "Collagen support",
        "Skin rejuvenation",
      ],
      sideEffects: [
        "Injection site irritation",
      ],
      stacks: [
        "Glutathione → Skin stack",
      ],
      contraindications: [],
    },
    {
      name: "Glutathione (GTT1500)",
      category: "Skin & Hair",
      benefits: [
        "Antioxidant support",
        "Skin brightening",
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
      category: "Healing & Recovery",
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
      category: "Cognitive & Mood",
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
      category: "Energy & Longevity",
      benefits: [
        "Cellular energy",
        "Healthy aging",
      ],
      sideEffects: [
        "Flushing",
      ],
      stacks: [
        "SS-31 → Longevity stack",
      ],
      contraindications: [],
    },
  ];
  const filtered = peptides.filter(
    (peptide) =>
      peptide.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "All" ||
        peptide.category === selectedCategory)
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
        placeholder="Search peptides..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "16px",
          border: "1px solid #C1A0AC",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {filtered.map((peptide) => (
        <div
          key={peptide.name}
          style={{
            background: "#FFFFFF",
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
