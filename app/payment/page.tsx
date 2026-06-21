"use client";
import Link from "next/link";

export default function PaymentPage() {

return (
<main
style={{
minHeight:"100vh",
background:"#FFF8FB",
padding:"30px",
fontFamily:"Arial"
}}
>

<Link
href="/orders"
style={{
textDecoration:"none",
color:"#160029"
}}
>
← Back
</Link>

<h1
style={{
color:"#FF4F9F",
marginTop:"20px"
}}
>
💗 GCash Payment
</h1>
  <div
style={{
background:"white",
padding:"30px",
borderRadius:"30px",
marginTop:"30px"
}}
>

<h2>🛒 Order Summary</h2>

<p>
GHK-Cu 50 ×1
</p>

<hr />

<p>
Products Total: ₱529
</p>

<p>
Shipping Fee: ₱250
</p>

<h2
style={{
color:"#290087"
}}
>
Grand Total: ₱779
</h2>

</div>
  <div
style={{
background:"white",
padding:"30px",
borderRadius:"30px",
marginTop:"30px",
textAlign:"center"
}}
>

<h2>
🟣 GCash
</h2>

<div
style={{
width:"220px",
height:"220px",
background:"#F5F5F5",
margin:"20px auto",
borderRadius:"20px",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}
>
QR IMAGE HERE
</div>

<h1
style={{
color:"#FF4F9F"
}}
>
₱779
</h1>

<p>
Scan using GCash app
</p>

</div>
  <button
style={{
background:"#FF4F9F",
color:"white",
border:"none",
width:"100%",
padding:"22px",
borderRadius:"25px",
fontSize:"20px",
marginTop:"30px",
cursor:"pointer"
}}
>
💗 I've Paid
</button>
  </main>
);
}
  
