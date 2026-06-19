"use client";

import { useState } from "react";

export default function DosagePage() {
  const [product, setProduct] = useState(15);
  const [bacWater, setBacWater] = useState("");
  const [dose, setDose] = useState("");

  const [units, setUnits] = useState("--");
  const [volume, setVolume] = useState("--");

  function calculateDose() {
    const concentration = product / Number(bacWater);
    const mlNeeded = Number(dose) / concentration;
    const syringeUnits = mlNeeded * 100;

    setUnits(syringeUnits.toFixed(1));
    setVolume(mlNeeded.toFixed(2));
  }

  return (
    <div
      style={{
        maxWidth: "800px",
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
          <option value={15}>Tirzepatide 15mg</option>
          <option value={30}>Tirzepatide 30mg</option>
          <option value={50}>GHK-Cu 50mg</option>
          <option value={100}>GHK-Cu 100mg</option>
          <option value={1500}>GTT1500</option>
          <option value={500}>NAD+</option>
        </select>

        <br />
        <br />

        <h2>BAC Water (ml)</h2>

        <input
          placeholder="Example: 3"
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

        <button onClick={calculateDose}>
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
          Syringe Units: {units}
        </p>

        <p>
          Volume (ml): {volume}
        </p>
      </div>
    </div>
  );
}
