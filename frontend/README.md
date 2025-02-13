# E-Commerce Store

## Overview
A simple e-commerce store with product management and a shopping cart, built using **React (frontend)** and **Flask (backend)**. Users can add products, delete products, and manage their shopping cart.

## Features
- ✅ **Add Products** – Users can add new products with a name, price, and image.
- ✅ **Delete Products** – Users can remove existing products from the listing.
- ✅ **Add to Cart** – Users can add products to their shopping cart.
- ✅ **Cart Management** – The cart displays selected products and allows users to remove items.
- ✅ **Backend Integration** – All product and cart data is stored and managed in a database.

## Tech Stack
### Frontend
- React.js
- React Bootstrap
- Axios
- React Router

### Backend
- Flask
- Flask-CORS
- MongoDB
- dotenv

## Folder Structure
```
commerce/
│-- backend/
│   │-- .env
│   │-- app.py
│   │-- requirements.txt
│
│-- frontend/
│   │-- node_modules/
│   │-- public/
│   │-- src/
│       │-- components/
│       │   │-- AddProduct.js
│       │   │-- AdminPanel.js
│       │   │-- Cart.js
│       │   │-- Navigation.js
│       │   │-- ProductionList.js
│       │-- App.js
│       │-- index.js
│       │-- App.css
│       │-- index.css
│
│-- .env
│-- .gitignore
│-- package.json
│-- package-lock.json
│-- README.md
```

## Installation & Setup

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Create a `.env` file in the `backend/` folder with the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
5. Run the Flask server:
   ```bash
   python app.py
   ```

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend/` folder with:
   ```env
   REACT_APP_API_URL=http://127.0.0.1:5000
   ```
4. Start the React application:
   ```bash
   npm start
   ```

## API Endpoints
| Method | Endpoint          | Description           |
|--------|------------------|----------------------|
| GET    | `/api/products`  | Fetch all products   |
| POST   | `/api/products`  | Add a new product    |
| DELETE | `/api/products/:id` | Delete a product  |
| POST   | `/api/cart`      | Add item to cart     |
| GET    | `/api/cart`      | Get cart items       |
| DELETE | `/api/cart/:id`  | Remove from cart     |

## Usage
1. Open `http://localhost:3000` in your browser.
2. Add, delete, and manage products.
3. Add products to the cart and remove them as needed.



