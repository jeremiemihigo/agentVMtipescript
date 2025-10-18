import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import * as React from "react";
import Header from "../../Header";
import FormulaireActeEngagement from "./ActeEngagement";
import { ActeEngagementContext } from "./Context";
import DemandeActeEngagement from "./Demande";

const steps = ["Visit menage", "Acte d'engagement"];

export default function StepDemande() {
  const { activeStep, setActiveStep } = React.useContext(ActeEngagementContext);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        <Box sx={{ mt: 2, mb: 1 }}>
          {activeStep === 0 && <DemandeActeEngagement />}
          {activeStep === 1 && <FormulaireActeEngagement />}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", p: 2 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />

          {activeStep === steps.length - 1 ? (
            <></>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </Box>
      </React.Fragment>
    </Box>
  );
}
