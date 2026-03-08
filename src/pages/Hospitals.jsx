const allHospitals = [
  { id: 1, name: "Apollo Hospital", city: "Chennai", wait: 12, beds: 5, doctors: 3, queue: 7 },
  { id: 2, name: "City Care Hospital", city: "Chennai", wait: 25, beds: 2, doctors: 2, queue: 12 },
  { id: 3, name: "Sunrise Medical", city: "Mumbai", wait: 8, beds: 8, doctors: 4, queue: 4 },
  { id: 4, name: "Global Hospital", city: "Mumbai", wait: 18, beds: 3, doctors: 2, queue: 9 },
  { id: 5, name: "LifeLine Hospital", city: "Delhi", wait: 10, beds: 6, doctors: 5, queue: 5 },
];

function getWaitColor(wait) {
  if (wait <= 10) return "#2a9d8f";
  if (wait <= 20) return "#e9c46a";
  return "#e63946";
}

function Hospitals() {
  const userCity = localStorage.getItem("userCity") || "";
  const userName = localStorage.getItem("userName") || "User";
  const nearby = allHospitals
    .filter((h) => h.city.toLowerCase() === userCity.toLowerCase())
    .sort((a, b) => a.wait - b.wait);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Hello, {userName} 👋</h2>
        <p style={styles.sub}>
          Showing hospitals near <strong>{userCity}</strong> — sorted by wait time
        </p>
      </div>

      {nearby.length === 0 ? (
        <div style={styles.noResults}>
          <p style={{ fontSize: "40px" }}>🔍</p>
          <p style={{ fontWeight: "600", fontSize: "16px" }}>No hospitals found for "{userCity}"</p>
          <p style={{ color: "#888", fontSize: "14px" }}>Try: Chennai, Mumbai, or Delhi</p>
        </div>
      ) : (
        <div style={styles.grid}>
          {nearby.map((h) => (
            <div key={h.id} style={styles.card}>
              <h3 style={styles.hospitalName}>{h.name}</h3>
              <div style={{ ...styles.waitBadge, backgroundColor: getWaitColor(h.wait) }}>
                ⏱ {h.wait} min wait
              </div>
              <div style={styles.stats}>
                <div style={styles.stat}>
                  <span style={styles.statNum}>{h.beds}</span>
                  <span style={styles.statLabel}>Beds</span>
                </div>
                <div style={styles.statDivider} />
                <div style={styles.stat}>
                  <span style={styles.statNum}>{h.doctors}</span>
                  <span style={styles.statLabel}>Doctors</span>
                </div>
                <div style={styles.statDivider} />
                <div style={styles.stat}>
                  <span style={styles.statNum}>{h.queue}</span>
                  <span style={styles.statLabel}>In Queue</span>
                </div>
              </div>
              <button style={styles.button}>Get Token</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "40px 30px", backgroundColor: "#f0f4f8", minHeight: "100vh" },
  header: { textAlign: "center", marginBottom: "40px" },
  heading: { fontSize: "28px", fontWeight: "700", color: "#0a0a23", marginBottom: "8px" },
  sub: { color: "#666", fontSize: "15px" },
  noResults: {
    textAlign: "center", padding: "60px", backgroundColor: "white",
    borderRadius: "16px", maxWidth: "400px", margin: "0 auto",
  },
  grid: { display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" },
  card: {
    backgroundColor: "white", borderRadius: "16px", padding: "24px",
    width: "280px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    display: "flex", flexDirection: "column", gap: "16px",
    border: "1px solid #e8edf2",
  },
  hospitalName: { fontSize: "17px", fontWeight: "700", color: "#0a0a23" },
  waitBadge: {
    display: "inline-block", color: "white", padding: "6px 14px",
    borderRadius: "20px", fontSize: "13px", fontWeight: "600", width: "fit-content",
  },
  stats: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    backgroundColor: "#f8fbff", borderRadius: "10px", padding: "14px",
  },
  stat: { display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" },
  statNum: { fontSize: "20px", fontWeight: "700", color: "#0077b6" },
  statLabel: { fontSize: "11px", color: "#888", fontWeight: "500" },
  statDivider: { width: "1px", height: "30px", backgroundColor: "#dde3ea" },
  button: {
    width: "100%", padding: "11px", backgroundColor: "#0077b6", color: "white",
    border: "none", borderRadius: "10px", cursor: "pointer",
    fontWeight: "600", fontSize: "14px",
    boxShadow: "0 3px 10px rgba(0,119,182,0.25)",
  },
};

export default Hospitals;