import { useState } from "react";
export default function ManageUsers() {
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem("User")) || []);
  const handleDelete = (index) => {
    if (!window.confirm("Delete user?")) return;
    const updated = users.filter((_, i) => i !== index); setUsers(updated); localStorage.setItem("User", JSON.stringify(updated));
  };
  return (
    <div className="container">
      <h1 className="page-title">Manage Users</h1>
      <div className="table-responsive">
        {users.length > 0 ? (
          <table>
            <thead><tr><th>Name</th><th>Email</th><th>Actions</th></tr></thead>
            <tbody>
              {users.map((u, i) => (<tr key={i}><td>{u.ename}</td><td>{u.email}</td><td><button className="action-btn delete-btn" onClick={() => handleDelete(i)}>Delete</button></td></tr>))}
            </tbody>
          </table>
        ) : <p style={{ padding: "1rem" }}>No users found.</p>}
      </div>
    </div>
  );
}