"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function OrdersPage() {
  const [orders, setOrders] =
    useState<any[]>([]);
  useEffect(() => {
    const savedOrders =
      localStorage.getItem(
        "orders"
      );
    if (savedOrders) {
      setOrders(
        JSON.parse(savedOrders)
      );
    }
  }, []);
  function cancelOrder(id: number) {
    const updatedOrders =
      orders.filter(
        (order) =>
          order.id !== id
      );
    setOrders(updatedOrders);
    localStorage.setItem(
      "orders",
      JSON.stringify(
        updatedOrders
      )
    );
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
      <Link href="/">
        ← Back
      </Link>
      <h1
        style={{
          color: "#FF4F9F",
          marginBottom: "30px",
        }}
      >
        📦 My Orders
      </h1>
            {orders.length === 0 && (
        <p>No orders yet.</p>
      )}
      {orders.map((order, index) => (
        <div
          key={order.id}
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "30px",
            marginBottom: "30px",
          }}
        >
          <h2>
            Order #{index + 1}
          </h2>
          <p>
            Status:
            <strong
              style={{
                color: "#FFB300",
              }}
            >
              {" "}
              🟡 {order.status}
            </strong>
          </p>
          {order.items.map(
            (
              item: any,
              itemIndex: number
            ) => (
              <div
                key={itemIndex}
                style={{
                  marginBottom:
                    "15px",
                }}
              >
                <strong>
                  {item.name}
                </strong>
                <div>
                  Qty:
                  {item.quantity}
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
          <h3>
            Total:
            ₱
            {order.total.toLocaleString()}
          </h3>
          <Link
            href="/checkout"
          >
            <button
              style={{
                background:
                  "#FF4F9F",
                color: "white",
                border: "none",
                padding:
                  "15px 25px",
                borderRadius:
                  "20px",
                cursor: "pointer",
                marginRight:
                  "15px",
              }}
            >
              💳 Proceed to Checkout
            </button>
          </Link>
          <button
            onClick={() =>
              cancelOrder(
                order.id
              )
            }
            style={{
              background:
                "#E57373",
              color: "white",
              border: "none",
              padding:
                "15px 25px",
              borderRadius:
                "20px",
              cursor: "pointer",
            }}
          >
            Cancel Order
          </button>
        </div>
      ))}
          </main>
  );
}
