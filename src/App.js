import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory/ShopCategory";
import womenBanner from "./components/Assets/images/women_banner.png";
import menBanner from "./components/Assets/images/men_banner.png";
import kidsBanner from "./components/Assets/images/kids_banner.png";
import WishList from "./components/WishList/WishList";
import Compare from "./components/Compare/Compare";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category = "men" img = {menBanner} />} />
          <Route path="/women" element={<ShopCategory category = "women" img = {womenBanner} />} />
          <Route path="/kids" element={<ShopCategory category = "kids" img = {kidsBanner} />} />
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
