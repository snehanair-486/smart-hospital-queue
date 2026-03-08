import { useState } from "react";
import { useNavigate } from "react-router-dom";

const fields = [
  { label: "Full Name", name: "name", placeholder: "Enter your full name", type: "text" },
  { label: "Date of Birth", name: "dob", placeholder: "", type: "date" },
  { label: "Phone Number", name: "phone", placeholder: "Enter your phone number", type: "tel" },
  { label: "Address", name: "address", placeholder: "Street address", type: "text" },
  { label: "City", name: "city", placeholder: "Your city", type: "text" },
  { label: "State", name: "state", placeholder: "Your state", type: "text" },
];

const genderOptions = ["Male", "Female", "Prefer not to say"];
const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

function Profile() {
  const [form, setForm] = useState({ gender: "", bloodGroup: "" });
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
    if (!form.gender) newErrors.gender = "Gender is required";
    if (!form.bloodGroup) newErrors.bloodGroup = "Blood group is required";
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
          <p style={styles.subtitle}>We'll use your details to find hospitals near you</p>

          <div style={styles.grid}>

            {/* Full Name */}
            <div style={styles.field}>
              <label style={styles.label}>Full Name</label>
              <input
                style={{ ...styles.input, borderColor: errors.name ? "#e63946" : "#dde3ea" }}
                name="name" type="text" placeholder="Enter your full name"
                onChange={handleChange}
              />
              {errors.name && <p style={styles.error}>⚠ {errors.name}</p>}
            </div>

            {/* Date of Birth */}
            <div style={styles.field}>
              <label style={styles.label}>Date of Birth</label>
              <input
                style={{ ...styles.input, borderColor: errors.dob ? "#e63946" : "#dde3ea" }}
                name="dob" type="date"
                onChange={handleChange}
              />
              {errors.dob && <p style={styles.error}>⚠ {errors.dob}</p>}
            </div>

            {/* Gender */}
            <div style={styles.field}>
              <label style={styles.label}>Gender</label>
              <select
                style={{ ...styles.input, borderColor: errors.gender ? "#e63946" : "#dde3ea" }}
                name="gender"
                value={form.gender}
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                {genderOptions.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              {errors.gender && <p style={styles.error}>⚠ {errors.gender}</p>}
            </div>

            {/* Blood Group */}
            <div style={styles.field}>
              <label style={styles.label}>Blood Group</label>
              <select
                style={{ ...styles.input, borderColor: errors.bloodGroup ? "#e63946" : "#dde3ea" }}
                name="bloodGroup"
                value={form.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select blood group</option>
                {bloodGroups.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
              {errors.bloodGroup && <p style={styles.error}>⚠ {errors.bloodGroup}</p>}
            </div>

            {/* Phone */}
            <div style={styles.field}>
              <label style={styles.label}>Phone Number</label>
              <input
                style={{ ...styles.input, borderColor: errors.phone ? "#e63946" : "#dde3ea" }}
                name="phone" type="tel" placeholder="Enter your phone number"
                onChange={handleChange}
              />
              {errors.phone && <p style={styles.error}>⚠ {errors.phone}</p>}
            </div>

            {/* Address - full width */}
            <div style={styles.fullWidth}>
              <label style={styles.label}>Address</label>
              <input
                style={{ ...styles.input, borderColor: errors.address ? "#e63946" : "#dde3ea" }}
                name="address" type="text" placeholder="Street address"
                onChange={handleChange}
              />
              {errors.address && <p style={styles.error}>⚠ {errors.address}</p>}
            </div>

            {/* City */}
            <div style={styles.field}>
              <label style={styles.label}>City</label>
              <input
                style={{ ...styles.input, borderColor: errors.city ? "#e63946" : "#dde3ea" }}
                name="city" type="text" placeholder="Your city"
                onChange={handleChange}
              />
              {errors.city && <p style={styles.error}>⚠ {errors.city}</p>}
            </div>

            {/* State */}
            <div style={styles.field}>
              <label style={styles.label}>State</label>
              <input
                style={{ ...styles.input, borderColor: errors.state ? "#e63946" : "#dde3ea" }}
                name="state" type="text" placeholder="Your state"
                onChange={handleChange}
              />
              {errors.state && <p style={styles.error}>⚠ {errors.state}</p>}
            </div>

          </div>

          <button style={styles.button} onClick={handleSubmit}>
            Save Details ✓
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
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)", width: "560px", overflow: "hidden",
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
    fontSize: "14px", color: "#1a1a2e", backgroundColor: "white",
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