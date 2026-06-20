"use client";
import { useState } from "react";
import { products } from "./productsData";
export default function DosageCard() {
  const [searchProduct, setSearchProduct] =
    useState("");
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
  const totalInjects =
    product / Number(dose);
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
      <input
        type="text"
        placeholder="🔍 Search product..."
        value={searchProduct}
        onChange={(e) =>
          setSearchProduct(
            e.target.value
          )
        }
        style={inputStyle}
      />
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
        {products
          .filter(
            (item) =>
              item.name
                .toLowerCase()
                .includes(
                  searchProduct.toLowerCase()
                ) ||
              item.code
                .toLowerCase()
                .includes(
                  searchProduct.toLowerCase()
                )
          )
          .map((item) => (
            <option
              key={item.code}
              value={parseFloat(
                item.name.match(
                  /\d+(\.\d+)?/
                )?.[0] || "1"
              )}
            >
              {item.code} — {item.name}
            </option>
          ))}
      </select>
      <p>BAC Water (ml)</p>
      <input
        value={bacWater}
        onChange={(e) =>
          setBacWater(
            e.target.value
          )
        }
        style={inputStyle}
      />
      <p>Desired Dose (mg)</p>
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
              margin: 0,
            }}
          >
            {syringeUnits.toFixed(
              0
            )} units
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
              margin: 0,
            }}
          >
            {mlNeeded.toFixed(
              2
            )} ml
          </h1>
        </div>
      </div>
      <hr
        style={{
          marginTop: "25px",
          marginBottom: "25px",
          border:
            "1px solid #F1EAF7",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
        }}
      >
        <div>
          <div
            style={{
              color: "#999",
              fontSize: "14px",
            }}
          >
            Injects per Vial
          </div>
          <h2
            style={{
              color: "#290087",
              margin: 0,
            }}
          >
            {totalInjects.toFixed(0)}
          </h2>
        </div>
        <div>
          <div
            style={{
              color: "#999",
              fontSize: "14px",
            }}
          >
            Weeks per Vial
          </div>
          <h2
            style={{
              color: "#290087",
              margin: 0,
            }}
          >
            {totalInjects.toFixed(0)}
          </h2>
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
