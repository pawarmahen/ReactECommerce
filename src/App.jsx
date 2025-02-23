import { useState,useEffect  } from 'react'
import './App.css'
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  const[products, setProducts] = useState([]);
  const[cartItems, setCartItems] = useState([]);

  const handleAddtoCart =(id)=>{
    let item = cartItems.find((item)=> item === id);
    if(item === undefined){
      setCartItems((prev)=> [...prev, id])
    }
  }

  useEffect(()=>{
    fetch('./src/assets/products.json')
    .then((response)=> response.json())
    .then((data)=> setProducts(data))
  },[])
  return (
    <>
    <Header totalCartItems={cartItems.length}></Header>
    <main className="container mx-auto p-4">
        <ProductList products={products} handleAddToCart={handleAddtoCart}></ProductList>
    </main>
    </>
  )
}

export default App

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