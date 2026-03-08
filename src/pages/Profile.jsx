import { useState } from "react";
import { useNavigate } from "react-router-dom";

const fields = [
  { label: "Full Name", name: "name", placeholder: "Enter your full name", type: "text" },
  { label: "Age", name: "age", placeholder: "Enter your age", type: "number" },
  { label: "Phone Number", name: "phone", placeholder: "Enter your phone number", type: "tel" },
  { label: "Address", name: "address", placeholder: "Street address", type: "text" },
  { label: "City", name: "city", placeholder: "Your city", type: "text" },
  { label: "State", name: "state", placeholder: "Your state", type: "text" },
];

function Profile() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    fields.forEach((f) => {
      if (!form[f.name] || !String(form[f.name]).trim())
        newErrors[f.name] = `${f.label} is required`;
    });
    if (form.age && (isNaN(form.age) || form.age < 1 || form.age > 120))
      newErrors.age = "Enter a valid age";
    return newErrors;
  };

  const handleSubmit = () => {
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) { setErrors(foundErrors); return; }
    localStorage.setItem("userCity", form.city);
    localStorage.setItem("userName", form.name);
    navigate("/hospitals");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.topAccent} />
        <div style={styles.inner}>
          <h2 style={styles.title}>Set Up Your Profile</h2>
          <p style={styles.subtitle}>We'll use your location to find hospitals near you</p>

          <div style={styles.grid}>
            {fields.map((f) => (
              <div key={f.name} style={f.name === "address" ? styles.fullWidth : styles.field}>
                <label style={styles.label}>{f.label}</label>
                <input
                  style={{ ...styles.input, borderColor: errors[f.name] ? "#e63946" : "#dde3ea" }}
                  name={f.name} type={f.type} placeholder={f.placeholder}
                  onChange={handleChange}
                />
                {errors[f.name] && <p style={styles.error}>⚠ {errors[f.name]}</p>}
              </div>
            ))}
          </div>

          <button style={styles.button} onClick={handleSubmit}>
            Find Hospitals Near Me →
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex", justifyContent: "center", alignItems: "center",
    minHeight: "90vh", backgroundColor: "#f0f4f8", padding: "40px 20px",
  },
  card: {
    backgroundColor: "white", borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)", width: "520px", overflow: "hidden",
  },
  topAccent: { height: "6px", backgroundColor: "#0077b6" },
  inner: { padding: "36px" },
  title: { fontSize: "24px", fontWeight: "700", color: "#0a0a23", marginBottom: "6px" },
  subtitle: { color: "#888", fontSize: "14px", marginBottom: "28px" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" },
  field: { display: "flex", flexDirection: "column", gap: "6px" },
  fullWidth: { display: "flex", flexDirection: "column", gap: "6px", gridColumn: "1 / -1" },
  label: { fontSize: "13px", fontWeight: "600", color: "#444" },
  input: {
    padding: "12px 14px", borderRadius: "8px", border: "1.5px solid #dde3ea",
    fontSize: "14px", color: "#1a1a2e",
  },
  error: { color: "#e63946", fontSize: "12px" },
  button: {
    width: "100%", padding: "13px", backgroundColor: "#0077b6", color: "white",
    border: "none", borderRadius: "10px", fontSize: "15px",
    cursor: "pointer", fontWeight: "600",
    boxShadow: "0 4px 12px rgba(0,119,182,0.3)",
  },
};

export default Profile;