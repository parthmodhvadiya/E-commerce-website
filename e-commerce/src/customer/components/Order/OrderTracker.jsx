import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Box,Button } from "@mui/material";

const steps = ["Placed", "Order Confirmed", "Shipped", "Out For Delivery","Delivered"];
const OrderTracker = ({activeStep}) => {
      
  return (
    
    <div className="w-full">
      <Stepper  activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
