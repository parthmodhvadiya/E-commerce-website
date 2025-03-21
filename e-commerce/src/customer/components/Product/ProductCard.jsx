import React from "react";
import './ProductCard.css'
import { useNavigate } from "react-router";
const ProductCard = ({Product}) => {
  const navigate = useNavigate(); 
  return (
    
    <div onClick={()=>navigate(`/product/${5}`)} className="ProductCard border border-black-700 w-[15rem] m-3 transition-all cursor-pointer mx-4 my-7">
      <div className="h-[20rem]">
        <img
          className="w-full h-full bg-cover "
          src={Product.imageUrl}
          alt="#"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{Product.brand} </p>
          <p className="text-gray-500">{Product.title}</p>
        </div>
        <div className="flex flex-row justify-center space-x-2">
          <p className="font-semibold">₹{Product.discountedPrice}</p>
          <p className="line-through opacity-50">{Product.price}</p>
          <p className="text-green-500 font-semibold">{Product.discountPersent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
