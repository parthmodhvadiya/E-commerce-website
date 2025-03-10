import Navigation from './customer/components/navigation/Navigation'
import './App.css';
import HomePage from './customer/components/pages/homepage/HomePage';
import Product from './customer/components/Product/Product';
import Footer from './customer/components/Footer/Footer';
import ProductDetail from '../src/customer/components/ProductDetail/ProductDetail'
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetailPage from './customer/components/Order/OrderDetailPage';
import { Routes ,Route} from 'react-router';
import CustomerRoutes from './Routes/CutomerRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
        {/* <Order/> */}
        {/* <OrderDetailPage/> */}
      
    </div>
  );
}

export default App;
