import React, { useState } from "react";

const SkillRatings = () => {
  const [isExpanded, setIsExpanded]=useState(true);

  const ratings = [
    { name: "Skills and Qualifications", score: 2, max: 5 },
    { name: "Cultural Fit", score: 2, max: 5 },
    { name: "Problem-solving and Critical Thinking", score: 2, max: 5 },
    { name: "Communication and Interpersonal Skills", score: 2, max: 5 },
  ];

  const ratingRemarks=[
    {
      score:1,
      remark:"poor"
    },
    {
      score:2,
      remark:"poor+"
    },
    {
      score:3,
      remark:"good"
    },
    {
      score:4,
      remark:"very good"
    },
    {
      score:5,
      remark:"excellent"

    }

  ]

  // Calculate the overall rating

  const calculateOverallRating = () => {
    const totalScore = ratings.reduce((sum, rating) => sum + rating.score, 0);
    const maxScore = ratings.reduce((sum, rating) => sum + rating.max, 0);
    return (totalScore / maxScore) * 5;
  };

  const overallRating = Math.floor(calculateOverallRating().toFixed(1));

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < Math.round(rating) ? "#FFB200" : "#dcdcdc"}
          viewBox="0 0 24 24"
          strokeWidth="0"
          stroke="currentColor"
          className="w-[22px] h-[22px] p-[2.5px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.062 6.319a1 1 0 00.95.69h6.631c.969 0 1.371 1.24.588 1.81l-5.37 3.885a1 1 0 00-.364 1.118l2.062 6.319c.3.921-.755 1.688-1.54 1.118l-5.37-3.886a1 1 0 00-1.175 0l-5.37 3.886c-.785.57-1.84-.197-1.54-1.118l2.062-6.319a1 1 0 00-.364-1.118l-5.37-3.885c-.783-.57-.38-1.81.588-1.81h6.631a1 1 0 00.95-.69l2.062-6.319z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="px-[30px] pt-[28px] pb-[15px] bg-white border-b-[1.5px] border-dashed border-lightgray">

        {/* overall average rating */}

        <div className="mb-6">
            <div className="text-sm text-primary-dark font-semibold">Overall Ratings</div>
            <div className="flex items-center mt-2">
                 <div className="text-[32px] md:text-[40px] font-medium pr-[14px]">{overallRating}/5</div> 
                {renderStars(overallRating)}  
                
                {ratingRemarks.map((item)=>{          
                  if(item===overallRating){
                     return (
                        <div className="capitalize">
                            {item.remark}
                         </div>
                     )}
                  }
                 )}
                 
                 {ratingRemarks.map((item,index)=>
                     item.score===overallRating?<div key={index} className="capitalize ml-5">{item.remark}</div>:""
                )}
                
            </div>
           
            <div className="flex items-center justify-between mb-4">
               <div className="text-[14px] mt-[5px] text-darkslate">Based on the all the categories</div>
                
                 <div onClick={()=>setIsExpanded(!isExpanded)} className="cursor-pointer">
                    <img src={isExpanded ? "/upArrowIcon.svg" : "/downArrowIcon.svg"} width="15px" className="" alt="" />
                 </div>
            </div>

        </div>
        
         {/* skills rating */}
         {isExpanded&&
         <>
             {ratings.map((rating, index) => (
            
            <div key={index} className="md:flex text-center items-center justify-start mb-5 gap-[26px]">
                <div className="flex-shrink-0 text-gray-700 text-[13px] md:text-[15px] font-poppins">{rating.name}</div>

                <div className="relative flex-1 mx-4 h-1 bg-lightgray rounded-md z-30 my-[6px] md:my-0">
                    <div
                        className="absolute top-0 left-0 h-full bg-secondary rounded-full"
                        style={{ width: `${(rating.score / rating.max) * 100}%` }}
                    ></div>
                </div>
                
                <div className="md:flex-shrink-0 text-gray-500 text-sm">
                    {rating.score}/{rating.max}
                </div>
            </div>
             ))}

         </>}
       
    </div>
  );
};

export default SkillRatings;
