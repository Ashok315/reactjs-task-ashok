import React, { useState, useEffect, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    console.log(newSteps);
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-darkslate font-poppins font-semibold">
          <div className={`rounded-md bg-slate transition duration-500 ease-in-out h-[40px] w-[40px] flex items-center justify-center py-3  ${
              step.selected
                ? "!bg-lightslate text-secondary-light"
                : ""
            }`}
          >
             {index + 1}

          </div>

          <div
            className={`absolute top-0 text-[12px] lg:text-[14px]  text-center mt-[56px] lg:w-32 ${
              step.highlighted||step.completed? "!text-secondary-light" : "text-darkslate"
            }`}
          >
            {step.description}
            {step.completed&&<div className="text-darkslate mt-[7px] text-[11px]">Completed <span className="text-[7.2px] font-bold text-white rounded-full px-[3.68px] py-[1.4px]  bg-green">&#10003;</span></div>}
             
          </div>
        </div>
        <div
          className={`flex-auto border-t transition duration-500 ease-in-out  ${
            step.completed ? "border-secondary-light" : "border-darkslate "
          }  `}
        ></div>
      </div>
    );
  });

  return (
    <div className="px-[30px] md:px-[80px] lg:px-[96px] pt-[50px] pb-[36px] flex justify-between items-center">
      {stepsDisplay}
    </div>
  );
};

export default Stepper;