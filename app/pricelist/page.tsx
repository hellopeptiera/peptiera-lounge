"use client";

import { products } from "../productsData";
import { useState } from "react";
import Link from "next/link";

export default function PriceList() {
  const [search, setSearch] = useState("");

  const categories = [
    "Weight Management",
    "Skin & Beauty",
    "Healing & Recovery",
    "Longevity",
    "Growth Hormones",
    "Supplies",
    "Lemon Bottle",
  ];

  return (
    <div
      style={{
        background: "#FFF8FB",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Link
  href="/"
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#F5E9E2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "#160029",
    fontSize: "24px",
    boxShadow: "0 8px 20px rgba(0,0,0,.08)",
    marginBottom: "20px",
  }}
>
  ←
</Link>
      <h1
        style={{
          color: "#E75C9A",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        💗 Peptiéra Price List
      </h1>

      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "20px",
          border: "1px solid #FFD6E5",
          marginBottom: "30px",
          fontSize: "16px",
          outline: "none",
          background: "white",
        }}
      />

      {categories.map((category) => {
        const filteredProducts = products.filter(
          (p) =>
            p.category === category &&
            (
              p.name.toLowerCase().includes(search.toLowerCase()) ||
              p.code.toLowerCase().includes(search.toLowerCase())
            )
        );

        if (filteredProducts.length === 0) return null;

        return (
          <div
            key={category}
            style={{
              marginBottom: "30px",
            }}
          >
            <h2
              style={{
                color: "#E75C9A",
                marginBottom: "12px",
              }}
            >
              {category}
            </h2>

            <div
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #F8D7E5",
              }}
            >
              {filteredProducts.map((item) => (
                <div
                  key={item.code}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 18px",
                    borderBottom: "1px solid #F6E8EF",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#999",
                        fontSize: "13px",
                      }}
                    >
                      {item.code}
                    </div>

                    <div
                      style={{
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </div>
                  </div>

                  <div
                    style={{
                      color: "#E75C9A",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
