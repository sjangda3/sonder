import React,{useState} from "react";
import {
    IconBriefcase,
    IconBulb,
    IconSchool,
    IconWriting,
    IconMoodSmile,
    IconHeart,
} from "@tabler/icons-react";

const categories = [
    { icon: IconBriefcase, label: "Business" },
    { icon: IconSchool, label: "Education" },
    { icon: IconBulb, label: "Creative" },
    { icon: IconHeart, label: "Health" },
    { icon: IconWriting, label: "Journaling" },
    { icon: IconMoodSmile, label: "Communication" },
]

const CategoryLinks: React.FC = () => {
    return (
        <div className="mt-10 sm:mt-20">
            {categories.map(({icon:Icon, label}) => (
                <div 
                  key={label} 
                  className="
                  m-1 py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm font-medium rounded-lg
                  border border-gray-200 shadow-sm hover:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none 
                  bg-neutral-900 text-white transition-all duration-200 ease-in-out cursor-pointer
                  "
                >
                <Icon size={24}/>
                <p className="text-lg">{label}</p>
                </div>
            ))}
        </div>
    )
}

export default CategoryLinks;