import { useState } from "react";
export default function AdminProduct() {
  const [product, setProduct] = useState({ productname: "", productprice: "", quantity: "" });
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem("Products")) || []);
  const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });
  const handleAdd = (e) => {
    e.preventDefault(); const updated = [...products, product]; setProducts(updated); localStorage.setItem("Products", JSON.stringify(updated)); setProduct({ productname: "", productprice: "", quantity: "" });
  };
  const handleDelete = (index) => {
    if (!window.confirm("Delete product?")) return; const updated = products.filter((_, i) => i !== index); setProducts(updated); localStorage.setItem("Products", JSON.stringify(updated));
  };
  const handleQuantityChange = (index, value) => {
    const updated = [...products]; updated[index].quantity = value; setProducts(updated); localStorage.setItem("Products", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h1 className="page-title">Manage Products</h1>
      <div className="form-card" style={{ maxWidth: "800px", margin: "0 auto 2rem" }}>
        <h3>Add New Product</h3>
        <form className="admin-add-form" onSubmit={handleAdd} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '1rem' }}>
          <input type="text" name="productname" placeholder="Name" value={product.productname} onChange={handleChange} required />
          <input type="number" name="productprice" placeholder="Price" value={product.productprice} onChange={handleChange} required />
          <input type="number" name="quantity" placeholder="Qty" value={product.quantity} onChange={handleChange} required />
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
      </div>
      <div className="table-responsive">
        {products.length > 0 ? (
          <table>
            <thead><tr><th>#</th><th>Name</th><th>Price</th><th>Quantity</th><th>Actions</th></tr></thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={i}><td>{i + 1}</td><td>{p.productname}</td><td>₹{p.productprice}</td><td><input type="number" value={p.quantity} onChange={(e) => handleQuantityChange(i, e.target.value)} style={{ width: "80px", padding: "0.4rem" }} /></td><td><button className="action-btn delete-btn" onClick={() => handleDelete(i)}>Delete</button></td></tr>
              ))}
            </tbody>
          </table>
        ) : <p style={{ padding: "1rem" }}>No products available.</p>}
      </div>
    </div>
  );
}