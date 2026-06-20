"use client";

import { useState } from "react";
import { products } from "../productsData";

export default function DosagePage() {
  const [product, setProduct] = useState(
    parseFloat(products[0].name.match(/\d+(\.\d+)?/)?.[0] || "1")
  );

  const [bacWater, setBacWater] = useState("");
  const [dose, setDose] = useState("");

  const [units, setUnits] = useState("--");
  const [volume, setVolume] = useState("--");
  const [injects, setInjects] = useState("--");
  const [weeks, setWeeks] = useState("--");

  function calculateDose() {
    if (!bacWater || !dose) return;

    const concentration = product / Number(bacWater);

    const mlNeeded = Number(dose) / concentration;

    const syringeUnits = mlNeeded * 100;

    const totalInjects = product / Number(dose);

    setUnits(syringeUnits.toFixed(1));
    setVolume(mlNeeded.toFixed(2));
    setInjects(totalInjects.toFixed(0));
    setWeeks(totalInjects.toFixed(0));
  }

  return (
    <div
      style={{
        maxWidth: "850px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          color: "#290087",
          marginBottom: "30px",
        }}
      >
        💉 Dosage Calculator
      </h1>

      <div className="card">
        <h2>Select Product</h2>

        <select
          value={product}
          onChange={(e) => setProduct(Number(e.target.value))}
        >
          {products.map((item) => (
            <option
              key={item.code}
              value={parseFloat(
                item.name.match(/\d+(\.\d+)?/)?.[0] || "1"
              )}
            >
              {item.name}
            </option>
          ))}
        </select>

        <br />
        <br />

        <h2>BAC Water (ml)</h2>

        <input
          placeholder="Example: 1.5"
          value={bacWater}
          onChange={(e) => setBacWater(e.target.value)}
        />

        <br />
        <br />

        <h2>Desired Dose (mg)</h2>

        <input
          placeholder="Example: 2.5"
          value={dose}
          onChange={(e) => setDose(e.target.value)}
        />

        <br />
        <br />

        <button
          onClick={calculateDose}
          style={{
            background: "#3B006A",
            color: "white",
            border: "none",
            padding: "14px 28px",
            borderRadius: "999px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Calculate
        </button>
      </div>

      <div
        className="card"
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Results</h2>

        <p>
          💉 Syringe Units: <b>{units}</b>
        </p>

        <p>
          🧪 Volume (ml): <b>{volume}</b>
        </p>

        <p>
          📅 Injects per Vial: <b>{injects}</b>
        </p>

        <p>
          ⏳ Weeks per Vial (weekly dosing): <b>{weeks}</b>
        </p>
      </div>
    </div>
  );
}
