"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function CheckoutPage() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [platform, setPlatform] =
    useState("Telegram");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] =
    useState("GCash");
  const [shippingMethod, setShippingMethod] =
    useState("J&T Express");
  const [submitting, setSubmitting] =
  useState(false);
  const [cart, setCart] = useState<any[]>([]);
  useEffect(() => {
    const savedProfile =
      localStorage.getItem("profile");
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setFullName(profile.fullName || "");
      setUsername(profile.platform || "");
      setPhone(profile.phone || "");
      setAddress(profile.address || "");
    }
    const savedCart =
      localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );
  function submitOrder() {
  setSubmitting(true);
  const existingOrders =
    JSON.parse(
      localStorage.getItem(
        "orders"
      ) || "[]"
    );
  const newOrder = {
    id: Date.now(),
    items: cart,
    total,
    paymentMethod,
    shippingMethod,
    status: "Pending Payment",
  };
  localStorage.setItem(
    "orders",
    JSON.stringify([
      ...existingOrders,
      newOrder,
    ])
  );
  localStorage.removeItem("cart");
  window.location.href =
    "/orders";
}
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
        href="/products"
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
          color: "#FF4F9F",
          textAlign: "center",
          fontSize: "2.5rem",
        }}
      >
        💗 Checkout
      </h1>
            <div
        style={{
          background: "#F7D9E8",
          padding: "30px",
          borderRadius: "30px",
          marginTop: "30px",
        }}
      >
        <h2>Customer Information</h2>
        <input
          value={fullName}
          style={inputStyle}
          readOnly
        />
        <input
          value={username}
          style={inputStyle}
          readOnly
        />
        <select
          value={platform}
          onChange={(e) =>
            setPlatform(e.target.value)
          }
          style={inputStyle}
        >
          <option>Telegram</option>
          <option>Discord</option>
        </select>
        <input
          value={phone}
          style={inputStyle}
          readOnly
        />
        <input
          value={address}
          style={inputStyle}
          readOnly
        />
      </div>
            <div
        style={{
          background: "#E9D9FF",
          padding: "30px",
          borderRadius: "30px",
          marginTop: "30px",
        }}
      >
        <h2>💳 Payment Method</h2>
        <select
          value={paymentMethod}
          onChange={(e) =>
            setPaymentMethod(e.target.value)
          }
          style={inputStyle}
        >
          <option>GCash</option>
          <option>Maya</option>
          <option>Bank Transfer</option>
        </select>
      </div>
      <div
        style={{
          background: "#E9F3FF",
          padding: "30px",
          borderRadius: "30px",
          marginTop: "30px",
        }}
      >
        <h2>📦 Shipping Method</h2>
        <select
          value={shippingMethod}
          onChange={(e) =>
            setShippingMethod(e.target.value)
          }
          style={inputStyle}
        >
          <option>J&T Express</option>
          <option>Lalamove</option>
          <option>Grab Express</option>
          <option>Pickup</option>
        </select>
      </div>
            <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "30px",
          marginTop: "30px",
        }}
      >
        <h2>🛒 Order Summary</h2>
        {cart.length === 0 && (
          <p>No items found.</p>
        )}
        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              paddingBottom: "20px",
              borderBottom:
                "1px solid #EEE",
            }}
          >
            <strong>{item.name}</strong>
            <div>
              Qty: {item.quantity}
            </div>
            <div>
              ₱
              {(
                item.price *
                item.quantity
              ).toLocaleString()}
            </div>
          </div>
        ))}
        <p>
          Products Total:
          ₱{total.toLocaleString()}
        </p>
        <h2
          style={{
            color: "#5A2EA6",
          }}
        >
          Grand Total:
          ₱{total.toLocaleString()}
        </h2>
     <button
  onClick={submitOrder}
  disabled={
    cart.length === 0 ||
    submitting
  }
  style={{
    background: "#FF4F9F",
    color: "white",
    border: "none",
    width: "100%",
    padding: "25px",
    borderRadius: "25px",
    fontSize: "22px",
    cursor: "pointer",
    marginTop: "20px",
    opacity:
      cart.length === 0
        ? 0.5
        : 1,
  }}
>
  💗 Submit Order
</button>
      </div>
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
