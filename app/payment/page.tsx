"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function PaymentPage() {
  const [order, setOrder] =
    useState<any>(null);
  useEffect(() => {
    const savedOrder =
      localStorage.getItem(
        "currentOrder"
      );
    if (savedOrder) {
      setOrder(
        JSON.parse(savedOrder)
      );
    }
  }, []);
  if (!order) {
    return (
      <h2>
        Loading...
      </h2>
    );
  }
  const shippingFee = 250;
