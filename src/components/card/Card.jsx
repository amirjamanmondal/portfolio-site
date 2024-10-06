import React from "react";
// import image from "../../data/images.jpg";


const Card = ({item}) => {
  return (
    <div className=" relative w-64 h-52 bg-red-800 flex justify-start gap-3 items-center flex-col flex-wrap border-2 border-green-900 rounded-b-md ">
      {/* <img src={image} alt="pic" className="w-full h-28 object-cover" /> */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <h1 className="text-2xl pl-4 font-bold text-white">
          {item.title}
        </h1>
      </div>
      <div className="w-full px-2 ">{item.description}</div>
    </div>
  );
};

export default Card;
