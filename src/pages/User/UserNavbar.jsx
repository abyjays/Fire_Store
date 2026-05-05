import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function UserNavbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("Role");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("Role");
    localStorage.removeItem("loggeduser");
    navigate("/login", { replace: true });
  };

  if (role !== "User") return <Navigate to="/login" replace />;

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
          <Link to="/user" className="nav-brand">FireStore</Link>
        </div>

        <div className="nav-desktop">
          <div className="nav-links">
            <Link to="/user" className="nav-link">Shop</Link>
            <Link to="/cart" className="nav-link">Cart</Link>
            <Link to="/user/orders" className="nav-link">My Orders</Link>
          </div>
        </div>

        <div className="nav-profile">
          <button className="profile-btn" onClick={() => setIsProfileOpen(!isProfileOpen)}>U</button>
          {isProfileOpen && (
            <div className="dropdown-menu">
              <button onClick={handleLogout} className="dropdown-item">Sign out</button>
            </div>
          )}
        </div>

      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/user" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link">Shop</Link>
          <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link">Cart</Link>
          <Link to="/user/orders" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link">My Orders</Link>
        </div>
      )}
    </nav>
  );
}