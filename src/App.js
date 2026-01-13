import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Checkout from "./Checkout";

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>🛒 Mini E-Commerce Store</h1>

      <div className="container">
        {!showCheckout && (
          <>
            <ProductList addToCart={addToCart} />
            <Cart cart={cart} removeFromCart={removeFromCart} />

            {cart.length > 0 && (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button onClick={() => setShowCheckout(true)}>
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        )}

        {showCheckout && <Checkout />}
      </div>
    </div>
  );
}

export default App;
