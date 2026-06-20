"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [platform, setPlatform] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1>👤 My Profile</h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "25px",
        }}
      >
        <input
          placeholder="Full Name"
          value={fullName}
          onChange={(e) =>
            setFullName(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="Nickname"
          value={nickname}
          onChange={(e) =>
            setNickname(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="Telegram / Discord Username"
          value={platform}
          onChange={(e) =>
            setPlatform(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="Contact Number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="Province"
          value={province}
          onChange={(e) =>
            setProvince(e.target.value)
          }
          style={inputStyle}
        />

        <input
          placeholder="City"
          value={city}
          onChange={(e) =>
            setCity(e.target.value)
          }
          style={inputStyle}
        />

        <textarea
          placeholder="Complete Shipping Address"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
          style={{
            ...inputStyle,
            minHeight: "120px",
          }}
        />

        <button
          style={{
            background: "#FF5CA8",
            color: "white",
            border: "none",
            padding: "20px",
            width: "100%",
            borderRadius: "25px",
            cursor: "pointer",
          }}
        >
          💗 Save Profile
        </button>
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "20px",
  borderRadius: "20px",
  border: "1px solid #EEE",
};
