import { Link } from "react-router-dom";

export default function CommonNavbar() {
  return (
    <nav>
      <Link to="/" style={{ fontSize: "1.2rem", fontWeight: "bold", color: "var(--primary)" }}>FireStore</Link>
      <Link to="/">Home</Link>
      <div style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
        <Link to="/login" style={{ color: "var(--primary)", fontWeight: "bold" }}>Login</Link>
        <Link to="/register" style={{ color: "var(--text-main)" }}>Register</Link>
      </div>
    </nav>
  );
}