import React from 'react'
import {NavLink, useLocation } from 'react-router-dom';

export const Sidebar = () => {

    // nav items data
    const navItems=[
        {
            label:"dashboard",
            path:"/dashboard",
            icon:(
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill="currentColor" />
                </svg>
            )
        },

        {
            label:"job notification",      
            path:"/",
            icon:(
                <svg width="18" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.7791 10.2694V0.884766H0.325317V43.1155H47.2329V10.2694H23.7791V10.2694ZM9.70684 38.4232H5.01608V33.7309H9.70684V38.4232V38.4232ZM9.70684 29.0386H5.01608V24.3463H9.70684V29.0386V29.0386ZM9.70684 19.654H5.01608V14.9617H9.70684V19.654V19.654ZM9.70684 10.2694H5.01608V5.57707H9.70684V10.2694V10.2694ZM19.0884 38.4232H14.3976V33.7309H19.0884V38.4232V38.4232ZM19.0884 29.0386H14.3976V24.3463H19.0884V29.0386V29.0386ZM19.0884 19.654H14.3976V14.9617H19.0884V19.654V19.654ZM19.0884 10.2694H14.3976V5.57707H19.0884V10.2694V10.2694ZM42.5422 38.4232H23.7791V33.7309H28.4699V29.0386H23.7791V24.3463H28.4699V19.654H23.7791V14.9617H42.5422V38.4232V38.4232ZM37.8514 19.654H33.1607V24.3463H37.8514V19.654V19.654ZM37.8514 29.0386H33.1607V33.7309H37.8514V29.0386V29.0386Z" fill="currentColor" />
                </svg>
            ),
            subNavItem:[
                "/basic-details",
                "/contact-details",
                "/academic-details",
                "/"
            ]
        }
    ]

    const location = useLocation();

    // active parent navItem if it has sub nav-item
    const isActiveParent = (item) => {
        if (item.subNavItem) {
          return (
            item.subNavItem.some((childPath) => location.pathname === childPath)
          );
        }
        return location.pathname === item.path;
      };


  return (
       <nav className='sidebar capitalize text-[14px] md:text-[12px] lg:text-[14px]'>
           <ul>
              {navItems.map((item)=>(
                <li key={item.label} className='mb-[17px]'>
                    <NavLink to={item.path} className={`flex items-center gap-[12px] text-gray ${ isActiveParent(item)?"text-primary":""}`}>
                        {item.icon}
                        <div className='hidden md:block font-inter'>{item.label}</div>
                    </NavLink>
                </li>
              ))}       
           </ul>         
       </nav>
  )
}

export default Sidebar;
