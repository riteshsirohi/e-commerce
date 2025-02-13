from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson import ObjectId
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

# MongoDB configuration
app.config["MONGO_URI"] = os.getenv("MONGO_URI", "mongodb://localhost:27017/ecommerce")
mongo = PyMongo(app)
print("MongoDB Initialized:", mongo.db)

@app.route('/')
def home():
    return """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #121212;
                color: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .container {
                text-align: center;
            }
            h1 {
                font-size: 3rem;
            }
            p {
                font-size: 1.5rem;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Welcome to the E-commerce API! 🎉</h1>
            <p>Use the endpoints to fetch data.</p>
        </div>
    </body>
    </html>
    """


@app.route('/api/products', methods=['GET', 'POST'])
def products():
    if request.method == 'GET':
        products = list(mongo.db.products.find())
        return jsonify([{**p, '_id': str(p['_id'])} for p in products])
    elif request.method == 'POST':
        data = request.json
        new_product = {
            'name': data['name'],
            'price': data['price'],
            'image': data['image']
        }
        result = mongo.db.products.insert_one(new_product)
        return jsonify({'message': 'Product added successfully', 'id': str(result.inserted_id)}), 201

@app.route('/api/products/<id>', methods=['DELETE'])
def delete_product(id):
    result = mongo.db.products.delete_one({'_id': ObjectId(id)})
    if result.deleted_count:
        return jsonify({'message': 'Product deleted successfully'}), 200
    return jsonify({'message': 'Product not found'}), 404

@app.route("/api/cart", methods=["POST"])
def add_to_cart():
    data = request.json
    mongo.db.cart.insert_one(data)
    return jsonify({"message": "Added to cart"}), 201

# Get cart items
@app.route("/api/cart", methods=["GET"])
def get_cart():
    cart_items = list(mongo.db.cart.find({}, {"_id": 0}))
    return jsonify(cart_items)

# Remove item from cart
@app.route("/api/cart/<name>", methods=["DELETE"])
def remove_from_cart(name):
    mongo.db.cart.delete_one({"name": name})
    return jsonify({"message": "Removed from cart"}), 200

if __name__ == '__main__':
    app.run(debug=True)