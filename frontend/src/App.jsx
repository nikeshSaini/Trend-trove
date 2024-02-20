import "./App.css"
import Navbar from "./components/navbar/navbar"
import {BrowserRouter, Routes, Route, Form} from "react-router-dom";
import Home from './pages/Home.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Hero from "./components/hero/Hero.jsx";
import Footer from "./components/footer/footer.jsx";
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar/> 
      <Routes>     
            <Route path="/" element ={<Home/>}/>
            <Route path="/men" element ={<ShopCategory banner={men_banner} category ="men"/>}/>
            <Route path="/women" element ={<ShopCategory  banner={women_banner} category ="women"/>}/>
            <Route path="/kids" element ={<ShopCategory  banner={kid_banner} category ="kid"/>}/>
            <Route path="/product" element ={<Product/>}/>
            <Route path=":productId" element ={<Cart/>}/>
            <Route path="/cart" element ={<Cart/>}/>
            <Route path="/login" element ={<LoginSignup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
