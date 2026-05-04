import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css'; 

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Protect from "./pages/Protect";
import CommonNavbar from "./pages/CommonNavbar";

import Userindex from "./pages/User/Userindex";
import UserNavbar from "./pages/User/UserNavbar";
import Cart from "./pages/User/Cart";
import UserOrders from "./pages/User/UserOrders";

import AdminNavbar from "./pages/Admin/AdminNavbar";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageUsers from "./pages/Admin/ManageUsers";
import AdminProduct from "./pages/Admin/AdminProduct";
import AdminOrders from "./pages/Admin/AdminOrders";

function AppContent() {
  useLocation(); 
  const role = localStorage.getItem("Role");

  return (
    <>
      {role === "Admin" ? <AdminNavbar /> : role === "User" ? <UserNavbar /> : <CommonNavbar />}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/user" element={<Protect role="User"><Userindex /></Protect>} />
          <Route path="/cart" element={<Protect role="User"><Cart /></Protect>} />
          <Route path="/user/orders" element={<Protect role="User"><UserOrders /></Protect>} />

          <Route path="/admin/dashboard" element={<Protect role="Admin"><AdminDashboard /></Protect>} />
          <Route path="/admin/users" element={<Protect role="Admin"><ManageUsers /></Protect>} />
          <Route path="/admin/products" element={<Protect role="Admin"><AdminProduct /></Protect>} />
          <Route path="/admin/orders" element={<Protect role="Admin"><AdminOrders /></Protect>} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}