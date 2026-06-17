"use client";

import { useState } from "react";

export default function CalculatorPage() {
  const [productTotal, setProductTotal] = useState(4004);
  const [weight, setWeight] = useState(0.16);

  // Admin settings
  const usdRate = 63;
  const members = 10;
  const totalShipmentWeight = 2.0;
  const firstHalfKgCost = 50;
  const extraHalfKgCost = 10;

  // First 0.5kg shared equally
  const baseShipping =
    (firstHalfKgCost * usdRate) / members;

  // Additional shipping
  const extraWeight = Math.max(
    totalShipmentWeight - 0.5,
    0
  );

  const extraBlocks = extraWeight / 0.5;

  const extraShippingPHP =
    extraBlocks * extraHalfKgCost * usdRate;

  const weightPercentage =
    weight / totalShipmentWeight;

  const additionalShare =
    extraShippingPHP * weightPercentage;

  const estimatedShipping =
    baseShipping + additionalShare;

  const grandTotal =
    productTotal + estimatedShipping;

  return (
    <main
      style={{
        background: "#FFF8FB",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          color: "#FF5CA8",
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        🎀 Peptiéra Order Calculator
      </h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "30px",
          marginTop: "30px",
        }}
      >
        <h2>📦 Order Details</h2>

        <p>Product Total</p>

        <input
          type="number"
          value={productTotal}
          onChange={(e) =>
            setProductTotal(Number(e.target.value))
          }
          style={inputStyle}
        />

        <p>Total Weight (kg)</p>

        <input
          type="number"
          step="0.01"
          value={weight}
          onChange={(e) =>
            setWeight(Number(e.target.value))
          }
          style={inputStyle}
        />
                />

      </div>

      <div
        style={{
          background: "#FDE6F1",
          padding: "30px",
          borderRadius: "30px",
          marginTop: "30px",
        }}
      >
        <h2>🚢 Estimated International Shipping</h2>

        <div style={rowStyle}>
          <span>Base Share</span>
          <strong>
            ₱{baseShipping.toFixed(2)}
          </strong>
        </div>

        <div style={rowStyle}>
          <span>Additional Weight Share</span>
          <strong>
            ₱{additionalShare.toFixed(2)}
          </strong>
        </div>

        <div style={rowStyle}>
          <span>Estimated Shipping</span>
          <strong>
            ₱{estimatedShipping.toFixed(2)}
          </strong>
        </div>
      </div>

      <div
        style={{
          background: "#EADFFF",
          padding: "30px",
          borderRadius: "30px",
          marginTop: "30px",
        }}
      >
        <h2>💗 Grand Total</h2>

        <div style={rowStyle}>
          <span>Products</span>
          <strong>
            ₱{productTotal.toFixed(2)}
          </strong>
        </div>

        <div style={rowStyle}>
          <span>Shipping</span>
          <strong>
            ₱{estimatedShipping.toFixed(2)}
          </strong>
        </div>

        <hr />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "24px",
            color: "#FF5CA8",
            fontWeight: "bold",
          }}
        >
          <span>Grand Total</span>

          <span>
            ₱{grandTotal.toFixed(2)}
          </span>
        </div>
      </div>
          </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  borderRadius: "20px",
  border: "1px solid #FFD6E5",
  fontSize: "18px",
  marginBottom: "20px",
  background: "white",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between" as const,
  marginBottom: "15px",
  fontSize: "18px",
};
