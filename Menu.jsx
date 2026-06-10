import { useState } from "react";
import Card from "./Card";

function Menu() {
  const [cart, setCart] = useState([]);

  const foods = [
    {
      id: 1,
      title: "Pizza 🍕",
      price: 199,
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      id: 2,
      title: "Burger 🍔",
      price: 99,
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      id: 3,
      title: "Pasta 🍝",
      price: 149,
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    },
    {
      id: 4,
      title: "Sandwich 🥪",
      price: 79,
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    },
  ];

  const addToCart = (food) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === food.id);
      if (existing) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...food, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div>
      <h1>🍔 Our Menu</h1>

      <h2>🛒 Cart Items: {cartCount}</h2>

      <div className="card-container">
        {foods.map((food) => {
          const cartItem = cart.find((item) => item.id === food.id);
          return (
            <Card
              key={food.id}
              title={food.title}
              price={food.price}
              img={food.img}
              qty={cartItem?.qty ?? 0}
              addToCart={() => addToCart(food)}
              removeFromCart={() => removeFromCart(food.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;