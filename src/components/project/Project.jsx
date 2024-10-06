import React from "react";
import Card from "../card/Card";

const data = [
  {
    title: "SocialEngine app -backend",
    description: "This is a social media app with storing images features",
  },
  {
    title: "Todo-app -backend",
    description: "Simple task manager app backend",
  },
  {
    title: "Calculator",
    description: "Simple calculator using reactjs",
  },
  {
    title: "Chat-app",
    description: "simple messageing app single user messaging app",
  },
];

const Project = () => {
  return (
    <div className="w-3/4 h-fit my-8 overflow-x-hidden flex flex-wrap flex-row gap-5">
      <div className="w-full h-40 my-8 bg-slate-400 rounded-md flex justify-center items-center gap-3">
        <input
          type="search"
          placeholder="Search..."
          className="w-1/2 h-10 relative outline-none  drop-shadow-xl rounded-md px-4"
        />
        <button
          type="submit"
          className=" block w-fit h-10 p-2 btn bg-green-400 rounded-lg drop-shadow-2xl"
        >
          Search
        </button>
      </div>
      <div className="w-full overflow-x-hidden flex flex-wrap flex-row gap-5">
        {data.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Project;
