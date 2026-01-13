import { useState } from "react";

function ProductList({ addToCart, viewProduct }) {
  const [query, setQuery] = useState("");

  const products = [
    { id: 1, name: "T-Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1200 },
    { id: 3, name: "Bag", price: 800 },
    { id: 4, name: "Jeans", price: 1500 },
    { id: 5, name: "Hat", price: 300 },
    { id: 6, name: "Sunglasses", price: 700 },
    { id: 7, name: "Jacket", price: 2500 },
    { id: 8, name: "Watch", price: 2200 },
    { id: 9, name: "Belt", price: 350 },
    { id: 10, name: "Socks", price: 100 }
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Products</h2>
      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="products">
        {filtered.map((p) => (
          <div key={p.id} className="card">
            <h3 style={{ cursor: "pointer", color: "#0077cc" }} onClick={() => viewProduct && viewProduct(p)}>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
        {filtered.length === 0 && <p style={{ textAlign: "center" }}>No products found.</p>}
      </div>
    </div>
  );
}

export default ProductList;
