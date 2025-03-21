import React from "react";
import AdressCard from "../Checkout/AdressCard";
import OrderTracker from "./OrderTracker";
import { Button, Grid2 } from "@mui/material";
import OrderRateCard from "./OrderRateCard";

const OrderDetailPage = () => {
  return (
    <div>
      <div className="px-5 lg:px-20 mt-10">
        <div className="text-start shadow-md border w-full p-4">
          <h1 className="text-lg font-bold mt-1 mb-3">Delivary Address</h1>
          <AdressCard />
        </div>
        <div className="px-4 flex items-center py-10 mt-5 border shadow-md  justify-between">
          <div className="w-8/12">
            <OrderTracker activeStep={0} />
          </div>
          <Button>Cancel Order</Button>
        </div>
        {[1, 1, 1, 1].map((item) => (
          <OrderRateCard />
        ))}
      </div>
    </div>
  );
};

export default OrderDetailPage;
