import React from 'react'

 const Topbar = ({ isToggled, onToggle }) => {
 
   const toggleState = () => {
      onToggle(!isToggled); 
    };
     
  return (
    <div className='flex justify-end md:justify-between gap-[7px] items-center px-[45px]'>

         {/*Menu bar  */}
         <div onClick={toggleState} className='lg:ml-[16%] md:ml-[5%] cursor-pointer'>
                     <img src="/menuBarIcon.svg" alt=""  width="22px"/>
         </div>

        {/* search button */}
        <div className='lg:mr-[40%] relative'>
            <input type="text" className='text-[14px] w-full ring-1 ring-lightgray py-[6px] ps-[30px] pe-[12px] rounded-sm outline-none' placeholder='Search'/>
             <img  src="/searchIcon.svg" alt="" width="13px" className='absolute ml-[10px] top-[50%] -translate-y-1/2' />
        </div>
        
        {/* user-section */}
        <div className='flex justify-between items-center gap-[21px]'>
             
             <div className='cursor-pointer hidden md:block'>
                <img src="/helpIcon.svg" width="18px" alt="" />
             </div>

             <div className='cursor-pointer hidden md:block'>
                <img src="/notificationIcon.svg" width="22px" alt="" />
             </div>

             <div className='cursor-pointer'>
                <img src="/profileImage.svg" alt="" />
             </div>

             <div className='leading-4 cursor-pointer'>
                  <p className='user-name text-wrap font-semibold text-[14px] capitalize'>Aarohi Shah</p>
                  <p className='created-date text-gray text-[12px]'>Applicant</p>
            </div> 

        </div>

    </div>
  )
}

export default Topbar;
