import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({ email: "", pass: "" });

  const handlesubmit = (e) => {
    e.preventDefault();

    const adminmail = "admin@gmail.com";
    const adminpass = "admin";

    if (user.email === adminmail && user.pass === adminpass) {
      localStorage.setItem("Role", "Admin");
      localStorage.setItem("loggeduser", JSON.stringify(user));
      window.location.href = "/admin/dashboard";
      return;
    }

    const users = JSON.parse(localStorage.getItem("User")) || [];
    const exist = users.find((i) => i.email === user.email && i.pass === user.pass);

    if (!exist) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("Role", "User");
    localStorage.setItem("loggeduser", JSON.stringify(exist));
    window.location.href = "/user";
  };

  const handlechange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div className="auth-container">
      <div className="form-card">
        <h2>Login</h2>
        <form onSubmit={handlesubmit}>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" onChange={handlechange} required />
          </div>
          <div className="form-group">
            <input type="password" name="pass" placeholder="Password" onChange={handlechange} required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}