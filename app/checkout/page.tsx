"use client";
import { useState } from "react";
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
          placeholder="Full Name"
          value={fullName}
          onChange={(e) =>
            setFullName(e.target.value)
          }
          style={inputStyle}
        />
        <input
          placeholder="Telegram / Discord Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          style={inputStyle}
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
          placeholder="Phone Number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          style={inputStyle}
        />
        <input
          placeholder="Complete Address"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
          style={inputStyle}
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
        <p>Products Total: ₱0</p>
        <h2
          style={{
            color: "#5A2EA6",
          }}
        >
          Grand Total: ₱0
        </h2>
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
            marginTop: "20px",
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
