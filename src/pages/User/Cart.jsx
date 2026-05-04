import { useState } from "react";

const generateId = () => Date.now().toString() + Math.floor(Math.random() * 1000).toString();

export default function Cart() {
  const user = JSON.parse(localStorage.getItem("loggeduser") || "null");
  const userKey = user ? `Cart_${user.email}` : null;

  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem(userKey)) || []);

  const handleDelete = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem(userKey, JSON.stringify(updated));
  };

  const handleBuySingle = (item, index) => {
    const orders = JSON.parse(localStorage.getItem("Orders") || "[]");
    orders.push({ id: generateId(), userEmail: user.email, items: [item], status: "Pending" });
    localStorage.setItem("Orders", JSON.stringify(orders));
    
    handleDelete(index);
    alert("Order placed successfully!");
  };

  const handleBuyAll = () => {
    if (cart.length === 0) return;
    const orders = JSON.parse(localStorage.getItem("Orders") || "[]");
    orders.push({ id: generateId(), userEmail: user.email, items: cart, status: "Pending" });
    localStorage.setItem("Orders", JSON.stringify(orders));

    localStorage.removeItem(userKey);
    setCart([]);
    alert("All items ordered successfully!");
  };

  const cartTotal = cart.reduce((total, item) => total + (Number(item.productprice) * Number(item.cartQuantity || 1)), 0);

  return (
    <div className="container">
      <h1 className="page-title">Your Cart</h1>
      
      {cart.length > 0 ? (
        <>
          <div className="product-grid">
            {cart.map((item, i) => (
              <div key={i} className="product-card">
                <div>
                  <h3>{item.productname}</h3>
                  <p className="price">₹{item.productprice}</p>
                  <p className="stock">Quantity in Cart: {item.cartQuantity}</p>
                  <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Subtotal: ₹{item.productprice * item.cartQuantity}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button className="btn btn-danger" onClick={() => handleDelete(i)}>Remove</button>
                  <button className="btn btn-primary" onClick={() => handleBuySingle(item, i)}>Buy Now</button>
                </div>
              </div>
            ))}
          </div>

          <div className="form-card" style={{ marginTop: "2rem", marginLeft: "auto", marginRight: "0", textAlign: "right" }}>
            <h2>Total: ₹{cartTotal}</h2>
            <button className="btn btn-success" onClick={handleBuyAll}>Checkout All Items</button>
          </div>
        </>
      ) : <p style={{ textAlign: "center" }}>Your cart is empty.</p>}
    </div>
  );
}