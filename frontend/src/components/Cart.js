import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/cart`);
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const removeFromCart = async (name) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/cart/${name}`);
      fetchCart();
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <Card key={item.name}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>${item.price}</Card.Text>
              <Button variant="danger" onClick={() => removeFromCart(item.name)}>Remove</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
