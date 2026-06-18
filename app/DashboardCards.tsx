import Link from "next/link";

export default function DashboardCards() {
 const cards = [
  {
    emoji: "📚",
    title: "Library",
    subtitle: "Guides, FAQs & Resources",
    href: "/library",
  },
  {
    emoji: "📢",
    title: "Announcements",
    subtitle: "Latest updates",
    href: "/announcements",
  },
  {
    emoji: "🧬",
    title: "Peptide Encyclopedia",
    subtitle: "Learn about peptides",
    href: "/encyclopedia",
  },
  {
    emoji: "💗",
    title: "Price List",
    subtitle: "Latest prices",
    href: "/pricelist",
  },
  {
    emoji: "🛍️",
    title: "Products",
    subtitle: "Browse available products",
    href: "/products",
  },
  {
    emoji: "📝",
    title: "Place Order",
    subtitle: "Submit your order",
    href: "/order",
  },
  {
    emoji: "🎀",
    title: "Product Calculator",
    subtitle: "Estimate products, shipping & total",
    href: "/calculator",
  },
  {
    emoji: "💉",
    title: "Dosage Calculator",
    subtitle: "Calculate BAC water & units",
    href: "/dosage",
  },
  {
    emoji: "📦",
    title: "Order Tracker",
    subtitle: "Track your orders",
    href: "/tracker",
  },
  {
    emoji: "📈",
    title: "Progress Tracker",
    subtitle: "Track your journey",
    href: "/progress",
  },
  {
    emoji: "🚚",
    title: "Shipping Updates",
    subtitle: "International shipment updates",
    href: "/shipping",
  },
  {
    emoji: "👤",
    title: "Account",
    subtitle: "Manage your profile",
    href: "/account",
  },
];
}
