function Card({ title, price, img, qty = 0, addToCart, removeFromCart }) {
  return (
    <div className="card">
      <img src={img} alt={title} className="food-img" />

      <h3>{title}</h3>

      <p className="price">₹{price}</p>

      <div className="card-actions">
        <button onClick={addToCart}>Add To Cart</button>
        {qty > 0 && (
          <>
            <button onClick={removeFromCart} style={{ marginLeft: "8px" }}>
              Remove
            </button>
            <p style={{ marginTop: "10px" }}>Qty: {qty}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;