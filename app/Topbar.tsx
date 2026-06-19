export default function Topbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "35px",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {/* Left */}
      <div>
        <div
          style={{
            color: "#806C79",
            fontSize: "15px",
            marginBottom: "8px",
          }}
        >
          ✨ Good Evening
        </div>
        <h2
          style={{
            color: "#16131F",
            fontSize: "36px",
            margin: 0,
            fontWeight: 500,
          }}
        >
          Welcome to Peptiéra Lounge
        </h2>
      </div>
      {/* Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <div
          style={{
            width: "55px",
            height: "55px",
            background: "#FFFFFF",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,.05)",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          🔔
        </div>
        <div
          style={{
            width: "55px",
            height: "55px",
            background: "#FFFFFF",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,.05)",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          💗
        </div>
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "25px",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,.05)",
          }}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              background: "#290087",
              borderRadius: "50%",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            T
          </div>
          <div>
            <div
              style={{
                color: "#16131F",
                fontWeight: 600,
                marginBottom: "4px",
              }}
            >
              Tammy
            </div>
            <div
              style={{
                color: "#806C79",
                fontSize: "13px",
              }}
            >
              Member since 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
