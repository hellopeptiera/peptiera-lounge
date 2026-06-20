"use client";
import { useState } from "react";
import { products } from "./productsData";
export default function DosageCard() {
  const [product, setProduct] = useState(
    parseFloat(
      products[0].name.match(
        /\d+(\.\d+)?/
      )?.[0] || "1"
    )
  );
  const [bacWater, setBacWater] =
    useState("2.6");
  const [dose, setDose] =
    useState("7.5");
  const concentration =
    product / Number(bacWater);
  const mlNeeded =
    Number(dose) / concentration;
  const syringeUnits =
    mlNeeded * 100;
  return (
    <div
      style={{
        background: "white",
        borderRadius: "32px",
        padding: "30px",
        boxShadow:
          "0 8px 24px rgba(0,0,0,.05)",
      }}
    >
      <h3
        style={{
          color: "#6F4E90",
          marginBottom: "25px",
        }}
      >
        DOSAGE CALCULATOR
      </h3>
      <p>Select Product</p>
      <select
        value={product}
        onChange={(e) =>
          setProduct(
            Number(
              e.target.value
            )
          )
        }
        style={inputStyle}
      >
        {products.map((item) => (
          <option
            key={item.code}
            value={parseFloat(
              item.name.match(
                /\d+(\.\d+)?/
              )?.[0] || "1"
            )}
          >
            {item.code}
          </option>
        ))}
      </select>
      <p>BAC Water</p>
      <input
        value={bacWater}
        onChange={(e) =>
          setBacWater(
            e.target.value
          )
        }
        style={inputStyle}
      />
      <p>Desired Dose</p>
      <input
        value={dose}
        onChange={(e) =>
          setDose(
            e.target.value
          )
        }
        style={inputStyle}
      />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent:
            "space-between",
        }}
      >
        <div>
          <div
            style={{
              color: "#999",
            }}
          >
            Inject
          </div>
          <h1
            style={{
              color: "#290087",
            }}
          >
            {syringeUnits.toFixed(
              0
            )}{" "}
            units
          </h1>
        </div>
        <div>
          <div
            style={{
              color: "#999",
            }}
          >
            Equivalent
          </div>
          <h1
            style={{
              color: "#290087",
            }}
          >
            {mlNeeded.toFixed(2)} ml
          </h1>
        </div>
      </div>
    </div>
  );
}
const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "18px",
  border: "1px solid #E5D9F2",
  marginBottom: "20px",
};
