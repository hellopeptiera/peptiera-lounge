"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [cart, setCart] = useState<any[]>([]);

  const products = [
    { name: "TR15", price: 749 },
    { name: "TR30", price: 899 },
    { name: "GHK-Cu 100", price: 649 },
    { name: "GHK-Cu 50", price: 529 },
    { name: "GTT1500", price: 799 },
    { name: "LB 50", price: 999 },
    { name: "BAC 3", price: 95 },
    { name: "BAC 10", price: 115 },
    { name: "Sterile 3cc", price: 10 },
  ];

  function addToCart(product: any) {
    const existing = cart.find(
      (item) => item.name === product.name
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }

  function removeFromCart(index: number) {
    setCart(
      cart.filter((_, i) => i !== index)
    );
  }

  function increaseQty(index: number) {
    setCart(
      cart.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQty(index: number) {
    setCart(
      cart
        .map((item, i) =>
          i === index
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  }

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
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
          boxShadow:
            "0 8px 20px rgba(0,0,0,.08)",
          marginBottom: "20px",
        }}
      >
        ←
      </Link>

      <h1
        style={{
          color: "#290087",
          marginBottom: "30px",
        }}
      >
        🛒 On Hand Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="card"
          >
            <h2>{product.name}</h2>

            <p>
              ₱{product.price} / vial
            </p>

            <button
              onClick={() =>
                addToCart(product)
              }
            >
              Add to Order
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "50px",
        }}
      >
        <h2>🛒 Order Cart</h2>

        {cart.length === 0 && (
          <p>No items added yet.</p>
        )}

        {cart.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{
              marginBottom: "15px",
            }}
          >
            <h3>{item.name}</h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <button
                onClick={() =>
                  decreaseQty(index)
                }
              >
                -
              </button>

              <strong>
                {item.quantity}
              </strong>

              <button
                onClick={() =>
                  increaseQty(index)
                }
              >
                +
              </button>
            </div>

            <p>
              ₱
              {(
                item.price *
                item.quantity
              ).toLocaleString()}
            </p>

            <button
              onClick={() =>
                removeFromCart(index)
              }
            >
              Remove
            </button>
          </div>
        ))}

        <h2>
          Grand Total:
          ₱{total.toLocaleString()}
        </h2>

        {cart.length > 0 && (
          <Link href="/checkout">
            <button
              onClick={() =>
                localStorage.setItem(
                  "cart",
                  JSON.stringify(cart)
                )
              }
              style={{
                background: "#FF5CA8",
                color: "white",
                border: "none",
                width: "100%",
                padding: "20px",
                borderRadius: "25px",
                fontSize: "18px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              💗 Proceed to Checkout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
