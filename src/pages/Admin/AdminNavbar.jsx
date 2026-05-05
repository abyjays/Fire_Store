import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("Role");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  if (role !== "Admin") return <Navigate to="/login" replace />;

  const handleLogout = () => {
    localStorage.removeItem("Role");
    localStorage.removeItem("loggeduser");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
          <Link to="/admin/dashboard" className="nav-brand">Admin Panel</Link>
        </div>

        <div className="nav-desktop">
          <div className="nav-links">
            <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/admin/users" className="nav-link">Users</Link>
            <Link to="/admin/products" className="nav-link">Products</Link>
            <Link to="/admin/orders" className="nav-link">Orders</Link>
          </div>
        </div>

        <div className="nav-profile">
          <button className="profile-btn admin" onClick={() => setIsProfileOpen(!isProfileOpen)}>A</button>
          {isProfileOpen && (
            <div className="dropdown-menu">
              <button onClick={handleLogout} className="dropdown-item">Sign out</button>
            </div>
          )}
        </div>

      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/admin/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link">Dashboard</Link>
          <Link to="/admin/users" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link">Users</Link>
          <Link to="/admin/products" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link">Products</Link>
          <Link to="/admin/orders" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link">Orders</Link>
        </div>
      )}
    </nav>
  );
}