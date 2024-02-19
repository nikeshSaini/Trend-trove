import "./App.css"
import Navbar from "./components/navbar/navbar"
import {BrowserRouter, Routes, Route, Form} from "react-router-dom";
import Home from './pages/Home.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/LoginSignup.jsx';


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar/>  
      <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/men" element ={<ShopCategory category ="men"/>}/>
            <Route path="/women" element ={<ShopCategory category ="women"/>}/>
            <Route path="/kids" element ={<ShopCategory category ="kids"/>}/>
            <Route path="/product" element ={<Product/>}/>
            <Route path=":productId" element ={<Cart/>}/>
            <Route path="/cart" element ={<Cart/>}/>
            <Route path="/login" element ={<LoginSignup/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
