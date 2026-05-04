import { Link, Navigate, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("Role");

  if (role !== "Admin") return <Navigate to="/login" replace />;

  const handleLogout = () => {
    localStorage.removeItem("Role");
    localStorage.removeItem("loggeduser");
    navigate("/login", { replace: true });
  };

  return (
    <nav>
      <Link to="/admin/dashboard" style={{ fontSize: "1.2rem", fontWeight: "bold", color: "var(--primary)" }}>Admin Panel</Link>
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/users">Users</Link>
      <Link to="/admin/products">Products</Link>
      <Link to="/admin/orders">Orders</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}