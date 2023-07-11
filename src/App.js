import Login from './Login/login';
import Products from './Products/product';
import Navbar from './Navbar/nav';
import './App.css';
import ProductDetails from './ProductDetails/productdetails';


import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
     <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Products/>}/>
        <Route path='/home' element={<Products/>} />
        <Route path='/about' element={<Products/>} />
        <Route path='/Products/:productId' element={<ProductDetails/>} />
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;