import { useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState(() => JSON.parse(localStorage.getItem("Orders")) || []);

  const handleSend = (index) => {
    const updated = [...orders];
    updated.splice(index, 1);
    setOrders(updated);
    localStorage.setItem("Orders", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h1 className="page-title">Customer Orders</h1>
      <div className="table-responsive">
        {orders.length > 0 ? (
          <table>
            <thead>
              <tr><th>#</th><th>User Email</th><th>Items Ordered</th><th>Total Cost</th><th>Action</th></tr>
            </thead>
            <tbody>
              {orders.map((o, i) => {
                const total = o.items.reduce((sum, item) => sum + (item.productprice * item.cartQuantity), 0);
                return (
                  <tr key={o.id}>
                    <td>{i + 1}</td>
                    <td>{o.userEmail}</td>
                    <td>
                      {o.items.map((item, idx) => (
                        <div key={idx}>• {item.productname} (x{item.cartQuantity})</div>
                      ))}
                    </td>
                    <td style={{ fontWeight: "bold" }}>₹{total}</td>
                    <td><button className="action-btn send-btn" onClick={() => handleSend(i)}>Mark as Sent</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : <p style={{ padding: "1rem" }}>No pending orders.</p>}
      </div>
    </div>
  );
}