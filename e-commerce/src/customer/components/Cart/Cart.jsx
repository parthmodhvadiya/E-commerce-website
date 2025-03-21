import React from "react";
import CartItems from "./CartItems";
import { useNavigate } from "react-router";
const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="py-10">
      <div className="lg:grid grid-flow-col grid-col-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1,1,1,1].map((item)=> <CartItems />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh]  mt-5 lg:mt-0">
          <div className="border ">
            <p className="uppercase font-bold opacity-60 py-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-normal p-3">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$46</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-300 ">-$10</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivary Charges</span>
                <span className="text-green-300 ">Free</span>
              </div>
              <hr />
              <div className="flex justify-between py-3 text-black">
                <span className="font-bold">Total Amount</span>
                <span className="text-green-400 font-semibold">$36</span>
              </div>
              <button
                type="submit"
                onClick={()=>navigate('/checkout?steps=1')}
                className="mt-10 flex w-full items-center justify-center rounded-sm border border-transparent bg-indigo-600  py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
