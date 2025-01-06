import React, {useState } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const MainLayout = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleToggle = (newState) => {
    setMenuToggle(newState);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="fixed w-full border border-lightgray z-40 bg-white py-[15px]">
        <Topbar isToggled={menuToggle} onToggle={handleToggle} />
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 pt-[55px] md:pt-[45px] relative">

        {/* Sidebar */}
        <aside
          className={`${
            menuToggle
              ? 'w-[15%] md:w-[10%] lg:w-[7%]'
              : 'hidden md:block md:w-[20%] lg:w-[18.5%]'
          } border border-lightgray py-[47px] px-[14px] md:px-[10px] lg:px-[24px] overflow-y-auto`}
        >
          <Sidebar isToggled={menuToggle} />
        </aside>

        {/* Main Content */}
        <main
          className={`transition-all duration-300${
            menuToggle
              ? "w-[85%] md:w-[90%] lg:w-[93%]"
              : 'w-full md:w-[80%] lg:w-[81.5%]'
          } flex-1 pt-[30px] md:pt-[41px] px-[20px] py-[75px] overflow-y-auto`}
        >
          <div className="main-wrapper min-h-[70vh]">
            <Outlet />
          </div>

          <div className="flex justify-end gap-[30px] px-[36px] border-b border-lightgray pb-[34px] -mb-3">
            <div className="cursor-pointer">
              <img
                className="bg-primary-lighter p-[12px] rounded-md"
                src="/chatIcon.svg"
                alt="Chat Icon"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

