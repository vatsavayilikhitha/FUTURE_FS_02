import React from "react";

function ProductDetail({ product, addToCart, onBack }) {
  if (!product) return null;

  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", margin: "16px 0" }}>
      <button onClick={onBack} style={{ marginBottom: "12px" }}>← Back to products</button>

      <h2>{product.name}</h2>
      <p style={{ fontSize: "18px" }}>Price: ₹{product.price}</p>
      <p>
        Description: This is a detailed view for <strong>{product.name}</strong>. Add a short
        description here to meet the product detail requirement.
      </p>

      <div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
