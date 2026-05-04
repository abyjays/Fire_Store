export default function UserOrders() {
  const user = JSON.parse(localStorage.getItem("loggeduser") || "null");
  const orders = JSON.parse(localStorage.getItem("Orders")) || [];
  
  const userOrders = orders.filter((o) => o.userEmail === user?.email);

  return (
    <div className="container">
      <h1 className="page-title">My Order History</h1>
      <div className="table-responsive">
        {userOrders.length > 0 ? (
          <table>
            <thead>
              <tr><th>Order ID</th><th>Items Ordered</th><th>Total Paid</th><th>Status</th></tr>
            </thead>
            <tbody>
              {userOrders.map((o) => {
                const total = o.items.reduce((sum, item) => sum + (item.productprice * item.cartQuantity), 0);
                return (
                  <tr key={o.id}>
                    <td>#{o.id.split('-')[0]}</td>
                    <td>
                      {o.items.map((item, idx) => (
                        <div key={idx}>• {item.productname} (x{item.cartQuantity})</div>
                      ))}
                    </td>
                    <td style={{ fontWeight: "bold" }}>₹{total}</td>
                    <td><span style={{ color: "orange", fontWeight: "bold" }}>Pending Shipping</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : <p style={{ padding: "1rem" }}>You haven't placed any orders yet.</p>}
      </div>
    </div>
  );
}