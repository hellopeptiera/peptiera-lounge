"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "../productsData";

export default function OrderPage() {
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [platform, setPlatform] = useState("Telegram");
  const [otherPlatform, setOtherPlatform] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");


  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [shipping, setShipping] = useState("J&T Express");
  const [notes, setNotes] = useState("");

  const [cart, setCart] = useState<any[]>([]);

 

function addToCart() {
  const selected = products.find(
    (p) => p.code === product
  );

  if (!selected) return;

  const price =
    Number(
      selected.price
        .replace("₱", "")
        .replace(/,/g, "")
    );

  setCart([
    ...cart,
    {
      ...selected,
      quantity,
      total: price * quantity,
    },
  ]);
}

  const subtotal = cart.reduce(
    (sum, item) => sum + item.total,
    0
  );

  const total = subtotal + 300;
    return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFF8FB",
        padding: "30px",
        fontFamily: "Arial",
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
          color: "#FF4F9F",
          textAlign: "center",
          fontSize: "2.5rem",
        }}
      >
        🎀 Place Order
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#7A4D7C",
          marginBottom: "40px",
        }}
      >
        Batch 1 • Order taking until June 21 ✨
      </p>

      <div
        style={{
          background: "#F7D9E8",
          padding: "30px",
          borderRadius: "30px",
          marginBottom: "30px",
        }}
      >
        <h2>Customer Information</h2>

        <input
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          style={inputStyle}
        />

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          style={inputStyle}
        >
          <option>Telegram</option>
          <option>Discord</option>
          <option>Others</option>
        </select>

        {platform === "Others" && (
          <input
            placeholder="Specify Platform"
            value={otherPlatform}
            onChange={(e) => setOtherPlatform(e.target.value)}
            style={inputStyle}
          />
        )}

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div
        style={{
          background: "#E9D9FF",
          padding: "30px",
          borderRadius: "30px",
          marginBottom: "30px",
        }}
      >


        <p>Total Products: {products.length}</p>

<select
  value={product}
  onChange={(e) => setProduct(e.target.value)}
  style={inputStyle}
>
  <option value="">Select Product</option>

  {products.map((p) => (
    <option key={p.code} value={p.code}>
      {p.code} - {p.name}
    </option>
  ))}
</select>
      

        <input
          type="number"
          value={quantity}
          onChange={(e) =>
            setQuantity(Number(e.target.value))
          }
          style={inputStyle}
        />

        <button
          onClick={addToCart}
          style={{
            background: "#FF4F9F",
            color: "white",
            border: "none",
            borderRadius: "20px",
            padding: "18px",
            width: "100%",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          🛒 Add To Cart
        </button>
     <div
  style={{
    background: "#E9D9FF",
    padding: "30px",
    borderRadius: "30px",
    marginBottom: "30px",
  }}
>

  <p>Total Products: {products.length}</p>

  <select
    value={product}
    onChange={(e) => setProduct(e.target.value)}
    style={inputStyle}
  >
    <option value="">Select Product</option>

    {products.map((p) => (
      <option key={p.code} value={p.code}>
        {p.code} - {p.name}
      </option>
    ))}
  </select>
      >
        <h2>💗 Order Cart</h2>

        {cart.length === 0 && (
          <p>No items added yet.</p>
        )}

        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "20px",
              marginBottom: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div>
                <strong>{item.code}</strong>
              </div>

              <div>{item.name}</div>

              <div>
                Qty: {item.quantity}
              </div>

              <div>
                ₱{item.total}
              </div>
            </div>

            <button
              onClick={() =>
                setCart(
                  cart.filter((_, i) => i !== index)
                )
              }
              style={{
                background: "#FF4F9F",
                color: "white",
                border: "none",
                borderRadius: "15px",
                padding: "10px 15px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}

        <hr />

        <h3>Order Summary</h3>

        <p>Subtotal: ₱{subtotal}</p>

        <p>Admin Fee: ₱300</p>

        <h2>Total: ₱{total}</h2>
      </div>

      <div
        style={{
          background: "#E9F3FF",
          padding: "30px",
          borderRadius: "30px",
          marginBottom: "30px",
        }}
      >
        <h2>📦 Shipping Method</h2>

        <select
          value={shipping}
          onChange={(e) => setShipping(e.target.value)}
          style={inputStyle}
        >
          <option>J&T Express</option>
          <option>Lalamove</option>
          <option>Grab Express</option>
          <option>Pickup</option>
        </select>

        <textarea
          placeholder="Additional notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{
            ...inputStyle,
            minHeight: "120px",
          }}
        />
      </div>

      <button
        style={{
          background: "#FF4F9F",
          color: "white",
          border: "none",
          width: "100%",
          padding: "25px",
          borderRadius: "25px",
          fontSize: "22px",
          cursor: "pointer",
        }}
      >
        💗 Submit Order
      </button>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginTop: "15px",
  marginBottom: "20px",
  borderRadius: "20px",
  border: "none",
  fontSize: "16px",
};
