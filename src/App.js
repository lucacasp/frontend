import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import sunglasses_banner from './Components/Assets/sunglasses_banner.png';
import eyewear_banner from './Components/Assets/eyewear_banner.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/sunglasses' element={<ShopCategory banner={sunglasses_banner} category="sunglasses"/>} />
        <Route path='/eyewear' element={<ShopCategory banner={eyewear_banner} category="eyewear"/>} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignUp />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
