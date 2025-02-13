import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Spinner, Alert, Button } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/products`);
      setProducts(response.data);
    } catch (error) {
      setError('Error fetching products. Please try again later.');
    }
    setLoading(false);
  };

  const addToCart = async (product) => {
    try {
      await axios.post(`${API_BASE_URL}/api/cart`, product);
      alert("Added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h2 className="mb-4">Products</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Row xs={1} md={3} className="g-4">
          {products.length > 0 ? (
            products.map(product => (
              <Col key={product._id}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button variant="success" onClick={() => addToCart(product)}>Add to Cart</Button>
                    <Button variant="danger" className="ms-2" onClick={() => deleteProduct(product._id)}>Delete</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col className="text-center">No products available</Col>
          )}
        </Row>
      )}
    </div>
  );
};

export default ProductList;
