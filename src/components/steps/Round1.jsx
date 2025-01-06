import React from 'react'
import SkillRatings from './SkillRatings'
import CategoryWiseRatings from './CategoryWiseRatings'
import DropdownMenu from '../common/DropdownMenu'

const Round1 = () => {
  return (
    <div>
       
       {/* Interview round rating details */}
        <div  className='feedback-section border-t border-lightgray mt-5 md:mt-0'>

             {/* Feedback Section */}
            <div className='flex justify-between items-center gap-2 px-[20px] md:px-[30px] py-[20px] border-b-[1.5px] border-dashed border-lightgray'>
                  <div className="text-[16px] md:text-[20px] text-primary-dark">Interview Round 1</div>
                  <div>
                        <DropdownMenu
                            options={["Completed", "In Progress", "Pending", "On Hold"]}
                            defaultOption="Completed"
                        />
                    </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between py-[30px] px-[15px] md:px-[30px] gap-[20px] md:gap-[50px] border-b-[1.5px] border-dashed border-lightgray">
                <div className="feedback-given flex basis-1/2 justify-between items-center px-[20px] md:px-[40px] py-[17px]">
                    <div className="text-sm text-primary-dark font-semibold">Feedback Given</div>
                    <div className="text-[36px] font-semibold text-secondary">2/2</div>  
                </div>
                <div className="feedback-pending flex basis-1/2 justify-between items-center px-[20px] md:px-[40px] py-[17px]">
                    <div className="text-sm text-primary-dark font-semibold">Feedback Pending</div>
                    <div className="text-[36px] font-semibold text-secondary">0/2</div>
                </div>
            </div>

            {/* overall ratings */}
            <SkillRatings></SkillRatings>

            {/* category wise ratings */}
            <CategoryWiseRatings></CategoryWiseRatings>

        </div>

       
       
    </div>
  )
}

export default Round1