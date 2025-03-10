import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DelivaryAdressForm from "./DelivaryAdressForm";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Add Delivery Address", "Order Summary", "Payment"];

export default function HorizontalLinearStepper() {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);
  const stepFromQuery = parseInt(querySearch.get("steps") || "0", 10);

  // State for active step
  const [activeStep, setActiveStep] = React.useState(stepFromQuery);

  // Sync state with URL parameter
  React.useEffect(() => {
    setActiveStep(stepFromQuery);
  }, [stepFromQuery]);

  // Function to update step in URL
  const updateStepInURL = (step) => {
    navigate(`?steps=${step}`);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      updateStepInURL(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      updateStepInURL(activeStep - 1);
    }   
  };

  return (
    <Box sx={{ width: "100%" }} className="px-10 lg:px-20 items-center text-start mt-10">
      <Stepper className="mb-10" activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          
          <div>
            {
                stepFromQuery===1?<DelivaryAdressForm/>:<OrderSummary/>
            }
          </div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
