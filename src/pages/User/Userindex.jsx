export default function Userindex() {
  const products = JSON.parse(localStorage.getItem("Products")) || [];
  
  const handleAddToCart = (product) => {
    const user = JSON.parse(localStorage.getItem("loggeduser"));
    const userKey = `Cart_${user.email}`;
    let cart = JSON.parse(localStorage.getItem(userKey)) || [];
    const existingIndex = cart.findIndex((item) => item.productname === product.productname);
    if (existingIndex >= 0) {
      cart[existingIndex].cartQuantity = (cart[existingIndex].cartQuantity || 1) + 1;
    } else {
      cart.push({ ...product, cartQuantity: 1, userEmail: user.email });
    }
    localStorage.setItem(userKey, JSON.stringify(cart));
    alert(`${product.productname} added to cart!`);
  };

  return (
    <div className="container">
      <h1 className="page-title">Shop Our Products</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((p, i) => (
            <div key={i} className="product-card">
              <div>
                {p.image && <img src={p.image} alt={p.productname} className="product-image" />}
                <h3 title={p.productname}>{p.productname}</h3>
                <p className="price">₹{p.productprice}</p>
                <p className="stock">Stock Available: {p.quantity}</p>
              </div>
              <button className="btn btn-primary" onClick={() => handleAddToCart(p)}>Add to Cart</button>
            </div>
          ))
        ) : <p>No products available.</p>}
      </div>
    </div>
  );
}