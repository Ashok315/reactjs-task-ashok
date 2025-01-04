import React, { useState } from "react";

const CategoryWiseRatings = () => {

  const ratings = [
    {
      name: "Smit Panchal",
      categories: [
        { label: "Skills and Qualifications", stars: 2, remark: "Poor+" },
        { label: "Cultural Fit", stars: 2, remark: "Poor+" },
        { label: "Problem-solving and Critical Thinking", stars: 2, remark: "Poor+" },
        { label: "Communication and Interpersonal Skills", stars: 2, remark: "Poor+" },
      ],
    },
    {
      name: "Devarsh Patel",
      categories: [
        { label: "Skills and Qualifications", stars: 2, remark: "Poor+" },
        { label: "Cultural Fit", stars: 2, remark: "Poor+" },
        { label: "Problem-solving and Critical Thinking", stars: 2, remark: "Poor+" },
        { label: "Communication and Interpersonal Skills", stars: 2, remark: "Poor+" },
      ],
    },
  ];

  
 const [isExpanded, setIsExpanded] = useState(ratings.reduce((acc, _, index) => {
    acc[index] = true;
    return acc;
  }, {}));

 const toggleSection = (index) => {
    setIsExpanded((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the specific section's state
    }));
  };
    

  const renderStars = (count) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < count ? "#FFB200" : "#dcdcdc"}
          className="w-5 h-5 p-[0.7px]"
        >
          <path d="M12 .587l3.668 7.431L24 9.75l-6 5.857 1.416 8.25L12 18.605 4.584 23.857 6 15.607 0 9.75l8.332-1.732L12 .587z" />
        </svg>


      ));
  };

  return (
    <div className="px-[30px] pt-[28px] pb-[30px]">
      
      <div className="flex justify-between items-center gap-[10px]">
            <div className="text-sm text-primary-dark font-semibold">Categories Wise Ratings</div>
            <button className="cursor-pointer text-[10px] rounded-md bg-secondary py-[4px] px-[20px] font-semibold  text-white">Edit</button>
      </div>
   
      <div>
        {ratings.map((person, index) => (
          <div key={index} className="py-[25px]">
            <div className="flex items-center justify-between mb-4">
                 <div className="text-[16px] font-semibold text-darkslate">{person.name}&apos;s Ratings</div>
                 <div onClick={()=>toggleSection(index)} className="cursor-pointer">
                    <img src={isExpanded[index] ? "/upArrowIcon.svg" : "/downArrowIcon.svg"} width="15px" className="" alt="" />
                </div>
            </div>

            {isExpanded[index]&&
                <div className="grid md:grid-cols-2 gap-4">
                {person.categories.map((category, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col space-y-2 pt-2"
                  >
                    <span className="text-[15px] font-poppins">
                      {category.label}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">{renderStars(category.stars)}</div>
                      <span className="text-sm">
                        {category.remark}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            }
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryWiseRatings;
