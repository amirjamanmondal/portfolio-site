import React from "react";
// import image from "../../data/images.jpg";

const Card = ({ item }) => {
  return (
    <div className="w-full h-fit p-6 border-2 border-red-400 flex justify-between items-center">
      <div className="w-full h-fit flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white">{item.title}</h1>
        <div className="w-full">{item.description}</div>
      </div>
      <div className="w-fit h-fit flex justify-between p-2 gap-1">
        <button className="px-2 py-1 bg-blue-400 hover:bg-green-400 rounded-md">View</button>
        <button className="px-2 py-1 bg-blue-400 hover:bg-green-400 rounded-md">Visit</button>
      </div>
    </div>
  );
};

export default Card;
