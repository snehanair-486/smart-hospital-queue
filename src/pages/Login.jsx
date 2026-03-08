import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email";
    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "At least 6 characters required";
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) { setErrors(foundErrors); return; }
    navigate("/profile");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.topAccent} />
        <div style={styles.inner}>
          <h2 style={styles.title}>Welcome Back 👋</h2>
          <p style={styles.subtitle}>Login to access SmartQueue</p>

          <div style={styles.field}>
            <label style={styles.label}>Email Address</label>
            <input
              style={{ ...styles.input, borderColor: errors.email ? "#e63946" : "#dde3ea" }}
              type="email" placeholder="you@example.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }}
            />
            {errors.email && <p style={styles.error}>⚠ {errors.email}</p>}
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              style={{ ...styles.input, borderColor: errors.password ? "#e63946" : "#dde3ea" }}
              type="password" placeholder="Enter your password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: "" })); }}
            />
            {errors.password && <p style={styles.error}>⚠ {errors.password}</p>}
          </div>

          <button style={styles.button} onClick={handleLogin}>Login →</button>

          <p style={styles.switchText}>
            Don't have an account?{" "}
            <span style={styles.link} onClick={() => alert("Register coming soon!")}>
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex", justifyContent: "center", alignItems: "center",
    minHeight: "90vh", backgroundColor: "#f0f4f8", padding: "20px",
  },
  card: {
    backgroundColor: "white", borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)", width: "380px", overflow: "hidden",
  },
  topAccent: { height: "6px", backgroundColor: "#0077b6" },
  inner: { padding: "36px" },
  title: { fontSize: "24px", fontWeight: "700", color: "#0a0a23", marginBottom: "6px" },
  subtitle: { color: "#888", fontSize: "14px", marginBottom: "28px" },
  field: { display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" },
  label: { fontSize: "13px", fontWeight: "600", color: "#444" },
  input: {
    padding: "12px 14px", borderRadius: "8px", border: "1.5px solid #dde3ea",
    fontSize: "14px", color: "#1a1a2e",
  },
  error: { color: "#e63946", fontSize: "12px" },
  button: {
    width: "100%", padding: "13px", backgroundColor: "#0077b6", color: "white",
    border: "none", borderRadius: "10px", fontSize: "15px",
    cursor: "pointer", fontWeight: "600", marginTop: "6px",
    boxShadow: "0 4px 12px rgba(0,119,182,0.3)",
  },
  switchText: { textAlign: "center", fontSize: "13px", color: "#777", marginTop: "20px" },
  link: { color: "#0077b6", cursor: "pointer", fontWeight: "600" },
};

export default Login;