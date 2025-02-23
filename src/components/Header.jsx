/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function Header({ totalCartItems }) {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/"><h1 className="text-3xl font-bold">E-commerce Store</h1></Link> 
        <Link to="/cart">
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Cart ({totalCartItems})
            </button>
          </Link>
      </div>
    </header>
  );
}
