"use client";

import { useState } from "react";
import { products } from "../productsData";

export default function CalculatorPage() {
  const [items, setItems] = useState([
    { code: "", quantity: 0 },
    { code: "", quantity: 0 },
    { code: "", quantity: 0 },
    { code: "", quantity: 0 },
    { code: "", quantity: 0 },
    { code: "", quantity: 0 },
    { code: "", quantity: 0 },
    { code: "", quantity: 0 },
    { code: "", quantity: 0 },
    { code: "", quantity: 0 },
  ]);

  const usdRate = 63;
  const members = 10;
  const totalShipmentWeight = 2;
  const firstHalfKgCost = 50;
  const extraHalfKgCost = 10;

  let productTotal = 0;
  let totalWeight = 0;

  items.forEach((item) => {
    const product = products.find(
      (p) => p.code === item.code
    );

    if (product) {
      const price = Number(
        product.price
          .replace("₱", "")
          .replace(/,/g, "")
      );

      productTotal += price * item.quantity;

      totalWeight +=
        product.weight * item.quantity;
    }
  });

  const baseShipping =
    (firstHalfKgCost * usdRate) / members;

  const extraWeight = Math.max(
    totalShipmentWeight - 0.5,
    0
  );

  const extraBlocks = extraWeight / 0.5;

  const extraShippingPHP =
    extraBlocks *
    extraHalfKgCost *
    usdRate;

  const additionalShare =
    (totalWeight / totalShipmentWeight) *
    extraShippingPHP;

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
      }}
    >
      <h1
        style={{
          color: "#FF5CA8",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        🎀 Peptiéra Order Calculator
      </h1>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "25px",
        }}
      >
        <h2>📦 Items</h2>

        {items.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              borderBottom: "1px solid #EEE",
              paddingBottom: "20px",
            }}
          >
            <h3>Item {index + 1}</h3>

            <select
              value={item.code}
              onChange={(e) => {
                const newItems = [...items];
                newItems[index].code =
                  e.target.value;
                setItems(newItems);
              }}
              style={inputStyle}
            >
              <option value="">
                Select Product
              </option>

              {products.map((product) => (
                <option
                  key={product.code}
                  value={product.code}
                >
                  {product.code} - {product.name}
                </option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Quantity"
              value={
                item.quantity === 0
                  ? ""
                  : item.quantity
              }
              onChange={(e) => {
                const newItems = [...items];

                newItems[index].quantity =
                  Number(e.target.value);

                setItems(newItems);
              }}
              style={inputStyle}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          background: "#FFE4F1",
          padding: "25px",
          borderRadius: "25px",
          marginTop: "30px",
        }}
      >
        <h2>🩷 Order Summary</h2>

        <div style={rowStyle}>
          <span>Products Total</span>
          <strong>
            ₱{productTotal.toFixed(2)}
          </strong>
        </div>

        <div style={rowStyle}>
          <span>Total Weight</span>
          <strong>
            {totalWeight.toFixed(2)} kg
          </strong>
        </div>

        <div style={rowStyle}>
          <span>Estimated Shipping</span>
          <strong>
            ₱{estimatedShipping.toFixed(2)}
          </strong>
        </div>

        <hr />

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
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

        <p
          style={{
            marginTop: "20px",
            color: "#777",
            fontSize: "14px",
          }}
        >
          International shipping is
          estimated and may change once
          shipment arrives.
        </p>
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "15px",
  border: "1px solid #FFD3E6",
  marginTop: "10px",
  fontSize: "16px",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between" as const,
  marginBottom: "15px",
  fontSize: "18px",
};
