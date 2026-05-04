import { Link, Navigate, useNavigate } from "react-router-dom";

export default function UserNavbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("Role");

  const handleLogout = () => {
    localStorage.removeItem("Role");
    localStorage.removeItem("loggeduser");
    navigate("/login", { replace: true });
  };

  if (role !== "User") return <Navigate to="/login" replace />;

  return (
    <nav>
      <Link to="/user" style={{ fontSize: "1.2rem", fontWeight: "bold", color: "var(--primary)" }}>FireStore</Link>
      <Link to="/user">Shop</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/user/orders">My Orders</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}