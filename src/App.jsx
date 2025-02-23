import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddtoCart = (id) => {
    let item = cartItems.find((item) => item === id);
    if (item === undefined) {
      setCartItems((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    fetch("./src/assets/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <BrowserRouter>
      <Header totalCartItems={cartItems.length}></Header>
        <Routes>
          <Route
            path="/"
            element={<ProductList
              products={products}
              handleAddToCart={handleAddtoCart}
            />}
          />
          <Route path="/cart" element={<Cart products={products} cartItems={cartItems} setCartItems={setCartItems}/>} />
          <Route path="/products" element={<ProductList
                products={products}
                handleAddToCart={handleAddtoCart}
              />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*const handleAddtoCart =(id)=>{
  let item = cartItems.find((item)=> item.id === id);
  if(item){
    item.quantity += 1;
  }
  else{
    item = {id:id, quantity:1}
  }
  setCartItems((prev)=> [...prev, item])
}*/
