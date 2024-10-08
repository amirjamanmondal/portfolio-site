import React from "react";

const Update = () => {
  return (
    <div className="w-2/3 my-4 border-2 drop-shadow-2xl bg-gray-300 rounded-lg font-mono flex justify-around items-start p-4 flex-col">
      <div className="w-full h-fit flex  justify-around items-center">
        <div className="w-full h-fit p-4 flex justify-start gap-3 items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D5635AQHKRsUvxNYZuA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727597024594?e=1728748800&v=beta&t=iZ6iLmMsdkqfJ1I_5R269UFhhvfPYIQDR2eIlEaAAvg"
            alt="profiel"
            id="profile"
            height={"40px"}
            width={"40px"}
            className="rounded-full"
          />
          <span>amirjamanmonda</span>
          <h1>
            New project{" "}
            <span className="bg-green-500 font-mono font-semibold text-white px-2 py-1 rounded-xl">
              added
            </span>{" "}
          </h1>
        </div>
        <button className="bg-slate-400 py-2 px-4 rounded-lg">Go</button>
      </div>
      <div className="w-full h-fit p-4 border-white rounded-md flex gap-3 flex-col ">
        <h1 className="text-purple-800">SocialEngine app now hosted</h1>
        <p className="text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          assumenda architecto officiis? Exercitationem non laborum optio
          suscipit labore eaque quibusdam eius accusantium, quaerat dicta
          dolores facilis fuga doloremque quod vel quasi beatae fugit assumenda
          laudantium deleniti placeat expedita illo. Ab eveniet vero facere
          nulla blanditiis!
        </p>
      </div>
    </div>
  );
};

export default Update;
