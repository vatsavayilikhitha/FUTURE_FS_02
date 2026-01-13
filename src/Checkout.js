function Checkout() {
  const placeOrder = (e) => {
    e.preventDefault();
    alert("🎉 Order placed successfully!");
  };

  return (
    <form className="checkout" onSubmit={placeOrder}>
      <h2>Checkout</h2>
      <input required placeholder="Full Name" />
      <input required placeholder="Address" />
      <button type="submit">Place Order</button>
    </form>
  );
}

export default Checkout;
