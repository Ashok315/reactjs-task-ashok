import React from 'react'

const StepperControl = ({ handleNextClick,handleBackClick, currentStep }) => {
  return (
    <div className="container mt-4 mb-8 py-[38px] px-[36px] flex justify-end gap-[30px] text-[14px] border-t-2 border-dashed border-secondary-lighter">
        <button
          onClick={() => handleBackClick()}
          className={`cursor-pointer rounded-md bg-offwhite py-[6px] px-[36px]  font-semibold  text-primary ${currentStep === 1 ? "!cursor-not-allowed" : ""
          }`}
        >
          Back
        </button>

  
       <button
       onClick={() => handleNextClick()}
       className="cursor-pointer rounded-md bg-primary py-[6px] px-[36px] font-semibold  text-white"
     >
       Submit
     </button>
    
   
  </div>
  )
}

export default StepperControl;