export default function Topbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <div>
        <h2
          style={{
            color: "#16131F",
            marginBottom: "6px",
          }}
        >
          Good Evening ✨
        </h2>

        <p
          style={{
            color: "#806C79",
          }}
        >
          Welcome to Peptiéra Lounge
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "18px",
            padding: "14px",
            boxShadow: "0 8px 20px rgba(0,0,0,.06)",
          }}
        >
          🔔
        </div>

        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "18px",
            padding: "14px",
            boxShadow: "0 8px 20px rgba(0,0,0,.06)",
          }}
        >
          💗
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "#290087",
              borderRadius: "50%",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            T
          </div>

          <div>
            <div
              style={{
                fontWeight: "bold",
                color: "#16131F",
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
