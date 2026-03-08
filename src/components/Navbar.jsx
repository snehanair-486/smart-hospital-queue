import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <span style={styles.logoIcon}>🏥</span>
        <span style={styles.logoText}>SmartQueue</span>
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.loginBtn}>Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "16px 40px", backgroundColor: "#ffffff",
    borderBottom: "1px solid #e8edf2",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    position: "sticky", top: 0, zIndex: 100,
  },
  logo: { display: "flex", alignItems: "center", gap: "10px" },
  logoIcon: { fontSize: "24px" },
  logoText: { fontSize: "20px", fontWeight: "700", color: "#0077b6" },
  links: { display: "flex", alignItems: "center", gap: "24px" },
  link: { color: "#555", textDecoration: "none", fontWeight: "500", fontSize: "15px" },
  loginBtn: {
    color: "white", textDecoration: "none", fontWeight: "600",
    backgroundColor: "#0077b6", padding: "8px 20px",
    borderRadius: "8px", fontSize: "14px",
  },
};

export default Navbar;