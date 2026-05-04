export default function Home() {
  const products = JSON.parse(localStorage.getItem("Products")) || [];

  return (
    <div className="container">
      <h1 className="page-title">Welcome to Our Store</h1>
      
      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((p, i) => (
            <div key={i} className="product-card">
              <h3>{p.productname}</h3>
              <p className="price">₹{p.productprice}</p>
              <p className="stock">Available: {p.quantity}</p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>No products available yet. Check back later!</p>
      )}
    </div>
  );
}