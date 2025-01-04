import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Sidebar from './Sidebar';


const MainLayout = () => {
  const [menuToggle,setMenuToggle]=useState(false);

  // handle menu toggle
  const handleToggle = (newState) => {
    setMenuToggle(newState);  
  };

  return (

    <div>

         {/* header */}
        <header className='fixed w-full border border-lightgray z-40 bg-white py-[15px]'>
              <Topbar isToggled={menuToggle} onToggle={handleToggle}></Topbar>
        </header>
           
         {/* Main Content Area */}
        <div className='flex min-h-screen relative pt-[55px] md:pt-[45px]'> 
          {/* check menu opened or not */}
            {
            !menuToggle
            ?
              <>        
                  {/* left-section */}
                  <aside className='md:w-[19%] lg:w-[17%] border border-lightgray py-[47px] px-[27px] md:px-[10px] lg:px-[27px] relative'>
                          <Sidebar isToggled={menuToggle}></Sidebar>
                  </aside>
          
                  {/* right-section */}
                  <main className='w-full md:w-[81%] lg:w-[83%] pt-[30px] md:pt-[41px] px-[20px] py-[75px]'> 
                     <div className='main-wrapper min-h-[70vh]'>
                          <Outlet></Outlet>
                     </div>

                     <div className='flex justify-end gap-[30px] px-[36px] border-b border-lightgray pb-[34px] -mb-3'>
                        <div className='cursor-pointer'>
                            <img className='bg-primary-lighter p-[12px] rounded-md' src="/chatIcon.svg" alt="" />
                        </div>
                     </div>
                      
                 </main>
              </>
            :
              <>
              
                  {/* right-section */}
                  <main className='w-full pt-[30px] md:pt-[41px] px-[20px] py-[75px]'> 
                     <div className='main-wrapper min-h-[70vh]'>
                          <Outlet></Outlet>
                     </div>

                     <div className='flex justify-end gap-[30px] px-[36px] border-b border-lightgray pb-[34px] -mb-3'>
                        <div className='cursor-pointer'>
                            <img className='bg-primary-lighter p-[12px] rounded-md' src="/chatIcon.svg" alt="" />
                        </div>
                     </div>
                      
                 </main>
                  
              </>
            }
          
        </div>
    </div>
    
  )
}

export default MainLayout
