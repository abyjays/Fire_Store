import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({ ename: "", email: "", pass: "" });
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("User")) || [];
    if (users.find((i) => i.email === user.email)) {
      alert("Email already registered."); navigate("/login"); return;
    }
    users.push(user);
    localStorage.setItem("User", JSON.stringify(users));
    alert("Registration Complete"); navigate("/login");
  };
  const handlechange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div className="auth-container">
      <div className="form-card">
        <h2>Register</h2>
        <form onSubmit={handlesubmit}>
          <div className="form-group"><input type="text" name="ename" placeholder="Name" onChange={handlechange} required /></div>
          <div className="form-group"><input type="email" name="email" placeholder="Email" onChange={handlechange} required /></div>
          <div className="form-group"><input type="password" name="pass" placeholder="Password" onChange={handlechange} required /></div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
}