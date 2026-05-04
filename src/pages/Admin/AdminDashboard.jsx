export default function AdminDashboard() {
  const loggeduser = JSON.parse(localStorage.getItem("loggeduser"));

  return (
    <div className="container">
      <h1 className="page-title">Admin Dashboard</h1>
      <div className="form-card" style={{ margin: "0 auto" }}>
        <h3>Logged In As:</h3>
        <p><strong>Role:</strong> Admin</p>
        <p><strong>Email:</strong> {loggeduser?.email || "Admin"}</p>
        <p><strong>Name:</strong> {loggeduser?.ename || "Administrator"}</p>
      </div>
    </div>
  );
}