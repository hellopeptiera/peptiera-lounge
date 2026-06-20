"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function HeroBanner() {
  const [orderCount, setOrderCount] =
    useState(0);
  useEffect(() => {
    const savedOrders =
      JSON.parse(
        localStorage.getItem(
          "orders"
        ) || "[]"
      );
    setOrderCount(
      savedOrders.length
    );
  }, []);
  const cards = [
    {
      title: "Batch Status",
      value: "Open",
      emoji: "🧪",
      bg: "#F8F5FF",
      circle: "#E3D4FF",
    },
    {
      title: "My Orders",
      value:
        orderCount.toString(),
      emoji: "📦",
      bg: "#FFF8E6",
      circle: "#FFE9A9",
    },
    {
      title: "Hearts Club",
      value: "0",
      emoji: "💗",
      bg: "#FFEAF7",
      circle: "#FFD1E8",
    },
    {
      title:
        "Outstanding Balance",
      value: "₱0",
      emoji: "👛",
      bg: "#FFF1F7",
      circle: "#FFD8E9",
    },
    {cards.map((card) =>
  card.title ===
  "My Orders" ? (
    <Link
      href="/orders"
      key={card.title}
      style={{
        textDecoration:
          "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          background: card.bg,
          borderRadius: "28px",
          padding: "25px",
          display: "flex",
          justifyContent:
            "space-between",
          alignItems:
            "center",
          cursor: "pointer",
          transition:
            ".2s",
        }}
      >
        <div>
          <div
            style={{
              color: "#806C79",
              fontSize: "14px",
            }}
          >
            {card.title}
          </div>
          <div
            style={{
              color: "#290087",
              fontSize: "32px",
              fontWeight:
                "bold",
              marginTop:
                "10px",
            }}
          >
            {card.value}
          </div>
        </div>
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius:
              "50%",
            background:
              card.circle,
            display: "flex",
            justifyContent:
              "center",
            alignItems:
              "center",
            fontSize: "32px",
          }}
        >
          {card.emoji}
        </div>
      </div>
    </Link>
  ) : (
        <div
      key={card.title}
      style={{
        background: card.bg,
        borderRadius: "28px",
        padding: "25px",
        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            color: "#806C79",
            fontSize: "14px",
          }}
        >
          {card.title}
        </div>
        <div
          style={{
            color: "#290087",
            fontSize: "32px",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {card.value}
        </div>
      </div>
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          background:
            card.circle,
          display: "flex",
          justifyContent:
            "center",
          alignItems:
            "center",
          fontSize: "32px",
        }}
      >
        {card.emoji}
      </div>
    </div>
  )
)}
      </div>
    </>
  );
}
  ];
