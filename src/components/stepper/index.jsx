import React from "react";
import StepByStep from "../steppers";
import "./style.css";

const Stepper = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [finished, setFinished] = React.useState(false);

  const handleNext = () => {
    if (activeStep === 3) return;
    setActiveStep(activeStep + 1);
  };

  const handleReturn = () => {
    if (activeStep === 1) return;
    setActiveStep(activeStep - 1);
  };

  const handleFinish = () => setFinished(true);

  const handleReset = () => {
    alert("Parabens você concluiu o tutorial!");
    setActiveStep(1);
    setFinished(false);
  };

  return (
    <div className="container-stepper">
      <StepByStep step={activeStep} />

      <p>
        {finished
          ? "All steps completed - you're finished"
          : `Step ${activeStep}`}
      </p>

      <div className="container-btn">
        <button
          className={`return ${finished ? "disabled" : ""}`}
          onClick={handleReturn}
          disabled={activeStep === 1}
        >
          Return
        </button>
        <div className="content-actions-btns">
          {activeStep !== 3 ? (
            <>
              <button
                onClick={handleNext}
                className={`skip ${activeStep === 1 ? "disabled" : ""}`}
              >
                skip
              </button>
              <button onClick={handleNext} className="next">
                Next
              </button>
            </>
          ) : !finished ? (
            <button onClick={handleFinish} className="next">
              finish
            </button>
          ) : (
            <button onClick={handleReset} className="next">
              reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
