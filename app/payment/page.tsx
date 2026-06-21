"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PaymentPage() {
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const savedOrder =
      localStorage.getItem("currentOrder");

    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return <h2>Loading...</h2>;
  }

  const shippingFee = 250;

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
        href="/orders"
        style={{
          textDecoration: "none",
          color: "#160029",
        }}
      >
        ← Back
      </Link>

      <h1
        style={{
          color: "#FF4F9F",
          marginTop: "20px",
        }}
      >
        💗 GCash Payment
      </h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "30px",
          marginTop: "30px",
        }}
      >
        <h2>🛒 Order Summary</h2>

        {order.items.map(
          (item: any, index: number) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
              }}
            >
              <strong>
                {item.name}
              </strong>

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
          )
        )}

        <hr />

        <p>
          Products Total:
          ₱
          {order.total.toLocaleString()}
        </p>

        <p>
          Shipping Fee:
          ₱250
        </p>

        <h2
          style={{
            color: "#290087",
          }}
        >
          Grand Total:
          ₱
          {(order.total + shippingFee).toLocaleString()}
        </h2>
      </div>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "30px",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <h2>🟣 GCash</h2>

        <div
          style={{
            width: "220px",
            height: "220px",
            background: "#F3F3F3",
            margin: "20px auto",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          QR IMAGE HERE
        </div>

        <h1
          style={{
            color: "#FF4F9F",
          }}
        >
          ₱
          {(order.total + shippingFee).toLocaleString()}
        </h1>

        <p>
          Scan using GCash app
        </p>

        <button
          style={{
            background: "#FF4F9F",
            color: "white",
            border: "none",
            width: "100%",
            padding: "22px",
            borderRadius: "25px",
            fontSize: "20px",
            marginTop: "30px",
            cursor: "pointer",
          }}
        >
          💗 I've Paid
        </button>
      </div>
    </main>
  );
}
