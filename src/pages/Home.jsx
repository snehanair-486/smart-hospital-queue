import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <span style={styles.badge}>🚀 Smart Healthcare, Simplified</span>
        <h1 style={styles.heading}>
          Get The Right Care,<br />On Time
        </h1>
        <p style={styles.sub}>
          Skip the uncertainty. SmartQueue helps you find hospitals near you
          with the shortest wait times, available doctors, and open beds —
          so you get the help you need, when you need it most.
        </p>
        <button style={styles.button} onClick={() => navigate("/login")}>
          Get Started →
        </button>
      </div>

      <div style={styles.featuresSection}>
        <h2 style={styles.featuresTitle}>Why SmartQueue?</h2>
        <div style={styles.features}>
          {[
            { icon: "⏱", title: "Real-Time Wait Times", desc: "See live queue lengths before you leave home" },
            { icon: "🏥", title: "Nearby Hospitals", desc: "Find the closest hospitals based on your location" },
            { icon: "🎟", title: "Queue Tokens", desc: "Book your spot in line without physically waiting" },
            { icon: "👨‍⚕️", title: "Doctor Availability", desc: "Check which doctors are available right now" },
          ].map((f) => (
            <div key={f.title} style={styles.featureCard}>
              <span style={styles.featureIcon}>{f.icon}</span>
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: "90vh", backgroundColor: "#f0f4f8" },
  hero: {
    textAlign: "center", padding: "80px 20px 60px",
    maxWidth: "700px", margin: "0 auto",
  },
  badge: {
    display: "inline-block", backgroundColor: "#e0f0fa", color: "#0077b6",
    padding: "6px 16px", borderRadius: "20px",
    fontSize: "13px", fontWeight: "600", marginBottom: "24px",
  },
  heading: {
    fontSize: "48px", fontWeight: "700", color: "#0a0a23",
    lineHeight: "1.2", marginBottom: "20px",
  },
  sub: { fontSize: "17px", color: "#666", lineHeight: "1.8", marginBottom: "36px" },
  button: {
    padding: "14px 36px", backgroundColor: "#0077b6", color: "white",
    border: "none", borderRadius: "10px", fontSize: "16px",
    cursor: "pointer", fontWeight: "600",
    boxShadow: "0 4px 14px rgba(0,119,182,0.35)",
  },
  featuresSection: { padding: "60px 40px", backgroundColor: "white" },
  featuresTitle: {
    textAlign: "center", fontSize: "28px", fontWeight: "700",
    color: "#0a0a23", marginBottom: "40px",
  },
  features: {
    display: "flex", gap: "24px", flexWrap: "wrap",
    justifyContent: "center", maxWidth: "900px", margin: "0 auto",
  },
  featureCard: {
    backgroundColor: "#f8fbff", borderRadius: "14px", padding: "28px 24px",
    width: "200px", textAlign: "center", border: "1px solid #e0eef8",
  },
  featureIcon: { fontSize: "32px", marginBottom: "12px", display: "block" },
  featureTitle: { fontSize: "15px", fontWeight: "600", color: "#0a0a23", marginBottom: "8px" },
  featureDesc: { fontSize: "13px", color: "#777", lineHeight: "1.6" },
};

export default Home;