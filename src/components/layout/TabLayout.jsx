import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const TabLayout = () => {
    const navItems=[
        {
            label:"basic details",
            path:"/basic-details"
        },
        {
            label:"contact details",
            path:"/contact-details"
        },
        {
            label:"academic details",
            path:"/academic-details"
        },
        {
            label:"interview rounds & ratings",
            path:"/"
        }
      ]
      
    return (
        <>
            {/* Details tabs */}
            <nav className='capitalize text-[14px] md:text-[12px] lg:text-[15px] py-[30px] px-[5px] md:px-[20px] border-b-2 border-dashed border-secondary-lighter'>
            <ul className='flex items-center justify-center  md:justify-start px-[5px]'>
                {navItems.map((item)=>(
                    <li key={item.label} className='tablinks px-[10px] md:pr-[15px] text-wrap lg:pr-[60px] text-center'>
                        <NavLink to={item.path} className={({isActive})=>`${isActive?"text-primary active":"text-primary-light"} font-dmSans`}>
                            {item.label}
                        </NavLink>
                    </li>
                ))}       
            </ul>         
            </nav>

            <Outlet></Outlet>
        </>
    )
}

export default TabLayout;