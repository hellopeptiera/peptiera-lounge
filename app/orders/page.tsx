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
          Order #
          {(index + 1)
            .toString()
            .padStart(4, "0")}
        </h2>
        <p>
          Status:{" "}
          {order.status ===
            "Pending Payment" && (
            <strong
              style={{
                color: "#FFB300",
              }}
            >
              🟡 Pending Payment
            </strong>
          )}
          {order.status ===
            "Order Placed" && (
            <strong
              style={{
                color: "#4CAF50",
              }}
            >
              🟢 Order Placed
            </strong>
          )}
          {order.status ===
            "Paid" && (
            <strong
              style={{
                color: "#9C27B0",
              }}
            >
              🟣 Paid
            </strong>
          )}
          {order.status ===
            "Preparing" && (
            <strong
              style={{
                color: "#FF9800",
              }}
            >
              🟠 Preparing
            </strong>
          )}
          {order.status ===
            "Shipped" && (
            <strong
              style={{
                color: "#2196F3",
              }}
            >
              🔵 Shipped
            </strong>
          )}
          {order.status ===
            "Delivered" && (
            <strong
              style={{
                color: "#4CAF50",
              }}
            >
              🟢 Delivered
            </strong>
          )}
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

<p>
  Products Total:
  ₱
  {order.total.toLocaleString()}
</p>

<p>
  Shipping Fee:
  ₱250
</p>

<h3>
  Grand Total:
  ₱
  {(order.total + 250).toLocaleString()}
</h3>
<p>
  Payment Method:
  {" "}
  {order.paymentMethod ||
    "GCash"}
</p>
<p>
  Shipping Method:
  {" "}
  {order.shippingMethod ||
    "J&T Express"}
</p>
        {order.status ===
  "Pending Payment" && (
  <>
    <Link href="/checkout">
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
          cursor:
            "pointer",
          marginRight:
            "15px",
        }}
      >
        💳 Proceed to
        Checkout
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
        cursor:
          "pointer",
      }}
    >
      ❌ Cancel Order
    </button>
  </>
)}
{order.status ===
  "Order Placed" && (
  <div
    style={{
      marginTop: "20px",
      background:
        "#E8F5E9",
      padding: "20px",
      borderRadius:
        "20px",
    }}
  >
    <h3
      style={{
        color:
          "#4CAF50",
      }}
    >
      ✅ Order Placed
    </h3>
    <p>
      Thank you for
      ordering with
      Peptiéra.
      Your order is
      being processed.
    </p>
  </div>
)}
{order.status ===
  "Paid" && (
  <div
    style={{
      marginTop: "20px",
      background:
        "#F3E5F5",
      padding: "20px",
      borderRadius:
        "20px",
    }}
  >
    <h3
      style={{
        color:
          "#9C27B0",
      }}
    >
      🟣 Paid
    </h3>
    <p>
      Payment has
      been verified.
    </p>
  </div>
)}
{order.status ===
  "Preparing" && (
  <div
    style={{
      marginTop: "20px",
      background:
        "#FFF3E0",
      padding: "20px",
      borderRadius:
        "20px",
    }}
  >
    <h3
      style={{
        color:
          "#FF9800",
      }}
    >
      🟠 Preparing
    </h3>
    <p>
      Your order is
      currently being
      packed.
    </p>
  </div>
)}
{order.status ===
  "Shipped" && (
  <div
    style={{
      marginTop: "20px",
      background:
        "#E3F2FD",
      padding: "20px",
      borderRadius:
        "20px",
    }}
  >
    <h3
      style={{
        color:
          "#2196F3",
      }}
    >
      🔵 Shipped
    </h3>
    <p>
      Your parcel is
      on the way.
    </p>
  </div>
)}
{order.status ===
  "Delivered" && (
  <div
    style={{
      marginTop: "20px",
      background:
        "#E8F5E9",
      padding: "20px",
      borderRadius:
        "20px",
    }}
  >
    <h3
      style={{
        color:
          "#4CAF50",
      }}
    >
      🟢 Delivered
    </h3>
    <p>
      Package has
      been delivered.
    </p>
  </div>
)}
              </div>
    ))}
  </main>
);
}
