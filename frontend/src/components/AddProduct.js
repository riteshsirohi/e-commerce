import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/products`, { name, price, image });
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Image URL" onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
