import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";

/* eslint-disable react/prop-types */
export default function Cart({ products, cartItems, setCartItems }) {
  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item !== id));
  };
  const filterCartItems = products.filter((product) =>
    cartItems.includes(product.id)
  );
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {filterCartItems.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-6 mb-6"
          >
            <div className="flex items-center border-b-2 border-gray-200 py-2">
              <div className="w-16 h-16 bg-gray-200 rounded mr-4">
                <img src={product.image} alt="product" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
              <div className="w-24 text-right">
                <p className="text-lg font-semibold">${product.price}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded ml-4"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-end mb-6">
          <Link to="/products">
            <button className="bg-blue-500 text-white px-6 py-3 rounded">
              Add More Items
            </button>
          </Link>
        </div>

        <CartSummary cartItems={filterCartItems}></CartSummary>
      </div>
    </>
  );
}
