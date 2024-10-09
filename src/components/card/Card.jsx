import React from "react";
import { useNavigate } from "react-router-dom";
// import image from "../../data/images.jpg";

const Card = ({ item }) => {

  const navigate = useNavigate();

  const handleLink = (e)=>{
    e.preventDefault();
    navigate("/portfolio-site/updates/project");
  }

  return (
    <div className="w-full h-fit p-6 border-2 border-red-400 flex justify-between items-center">
      <div className="w-full h-fit flex flex-col gap-2">
        <h1 className="text-2xl text-white underline uppercase">
          {item.title}
        </h1>
        <span className="text-sm font-thin">12 / 5 / 2024</span>
        <div className="w-full">{item.description}</div>
      </div>
      <div className="w-fit h-fit flex justify-between p-2 gap-1">
        <button className="px-2 py-1 bg-blue-400 hover:bg-green-400 rounded-md" onClick={handleLink}>
          View
        </button>
        <button className="px-2 py-1 bg-blue-400 hover:bg-green-400 rounded-md">
          Visit
        </button>
      </div>
    </div>
  );
};

export default Card;
