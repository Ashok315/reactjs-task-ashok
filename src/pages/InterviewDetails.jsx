import React, { useState } from 'react'
import Stepper from '../components/Stepper';
import StepperControl from '../components/StepperControl';
import Round1 from '../components/steps/Round1';
import Round2 from '../components/steps/Round2';
import Round3 from '../components/steps/Round3';
import HrRound from '../components/steps/HrRound';

const InterviewDetails = () => {

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Interview Round 1",
    "Interview Round 2",
    "Interview Round 3",
    "HR Round"
  ];

  const displayStepContent = (step) => {
    switch (step) {
      case 1:
        return <Round1 />;
      case 2:
        return <Round2 />;
      case 3:
        return <Round3 />;
      case 4:
        return <HrRound />;
      default:
    }
  };

  const handleNextClick = () => {
    let newStep = currentStep;

      newStep++
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const handleBackClick = () => {
    let newStep = currentStep;

      newStep--
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };



  return (  
       <div>
          {/* Steps and progress-bar */}
          <Stepper steps={steps} currentStep={currentStep}></Stepper>

          {/* each step wise content */}
          <div className="my-10 p-[24px] ">
              {displayStepContent(currentStep)}
          </div>
          
          {/* navigation button */}
          {currentStep !== steps.length && (
            <StepperControl
              handleNextClick={handleNextClick}
              handleBackClick={handleBackClick}
              currentStep={currentStep}
            />
          )}
       </div>
  )
}

export default InterviewDetails;