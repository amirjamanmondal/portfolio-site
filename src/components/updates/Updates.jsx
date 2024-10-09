import React from "react";
import Update from "../card/Update";

const data = [
  {
    name: "SocialEngine app",
    link: "https://github.com/amirjamanmondal/SocialEngine-app",
  },
  {
    name: "Chat app",
    link: "https://github.com/amirjamanmondal/Chat-app",
  },
  {
    name: "Todo app",
    link: "https://github.com/amirjamanmondal/Todo-app",
  },
];

const Updates = () => {
  return (
    <div className="w-full h-fit flex p-2 flex-col justify-center items-center">
      {data.map((item, index) => {
        return <Update key={index} item={item} />;
      })}
    </div>
  );
};

export default Updates;
