import React from 'react'
import { Route,Routes } from 'react-router'
import HomePage from '../customer/components/pages/homepage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetail from '../customer/components/ProductDetail/ProductDetail'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetailPage from '../customer/components/Order/OrderDetailPage'
const CutomerRoutes = () => {
  return (
    <div>
      
      <Navigation/>
      <div>
        <Routes>
            <Route>
              
            <Route path='/login' element={<HomePage/>}></Route>
            <Route path='/register' element={<HomePage/>}></Route>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
              <Route path='/product/:productId' element={<ProductDetail/>}></Route>
              <Route path='/checkout' element={<Checkout/>}></Route>
              <Route path='/account/order' element={<Order/>}></Route>
              <Route path='/account/order/:orderId' element={<OrderDetailPage/>}></Route>
            </Route>
        </Routes>
        </div>
        <Footer/>
    </div>
  )
}

export default CutomerRoutes