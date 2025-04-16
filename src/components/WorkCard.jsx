import React from 'react';
import { Link } from 'react-router';
import AddToHeart from './AddToHeart';
{/* <AddToHeart /> */ }
const WorkCard = ({ item }) => {
  return (
    <>
      <div className="bg-[#FFFBF3] shadow-md p-3 hover:scale-105 transition-transform duration-200 flex flex-col  w-full sm:w-[45%] md:w-[30%] lg:w-[22%] flex-shrink-0">

        <figure className="w-full h-32 m-0 p-0 bg-gray-200">
          <Link to={`/gallery/work/${item.category}/${item.id}`} className="">

            <img
              src={item.photo}
              alt={`Image of ${item.name}`}
              className="w-full h-full object-cover opacity-50 hover:opacity-80 transition-opacity duration-200"
            />
          </Link>
        </figure>

        <div className="flex flex-col mt-2 flex-grow">
          <Link to={`/gallery/work/${item.category}/${item.id}`} className="">
            <h4 className="truncate text-wrap font-bold text-left text-black text-[20px] sm:text-[20px] md:text-[24px]">
              {item.name}
            </h4>
          </Link>
          
          <div className="flex align-center mt-auto">
            <p className="w-1/2 flex text-left items-center text-sm text-black opacity-60 sm:text-[12px] md:text-[14px]">
              {item.author}
            </p>
            <AddToHeart />
          </div>
        </div>
      </div>

    </>
  );
};

export default WorkCard;
