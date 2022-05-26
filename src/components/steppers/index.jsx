import React from "react";
import "./style.css";

const StepByStep = ({ step }) => {
  return (
    <div className={`container-steppers active-${step}`}>
      <p className="frist-step">
        <span>1</span>Select campaign settings
      </p>
      <p className="second-step">
        <span>2</span>Created an ad group (Ops)
      </p>
      <p className="third-step">
        <span>3</span>Created an ad
      </p>
    </div>
  );
};

export default StepByStep;
