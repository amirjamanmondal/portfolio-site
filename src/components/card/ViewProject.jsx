import React from "react";

const ViewProject = () => {
  return (
    <div className="w-3/4 h-fit bg-slate-400 border-2 p-2 mb-1 flex flex-col gap-3">
      <div className="w-full h-fit flex gap-2 border-b p-4">
        <img
          src="https://media.licdn.com/dms/image/v2/D5635AQHKRsUvxNYZuA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727597024594?e=1728748800&v=beta&t=iZ6iLmMsdkqfJ1I_5R269UFhhvfPYIQDR2eIlEaAAvg"
          alt="profiel"
          id="profile"
          className="size-12 rounded-full"
        />
        <div className="w-full h-fit flex flex-col">
          <div className="text-2xl font-semibold text-lime-400">
            SocialEngine app
          </div>
          <span className="w-full h-fit font-thin text-sm text-yellow-50">
            Amir Jaman Mondal
          </span>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col gap-3">
        <h2 className="text-xl font-mono font-semibold text-blue-600">
          This is a backend project using nodejs and mongodb
        </h2>
        <p className="text-base font-mono text-white">
          A simple backend app that can be store images and video and can send
          message to user and publich post that can visible to everyone who has
          logged in
        </p>
      </div>
      <div className="w-full h-fit flex flex-col gap-2">
        <span className="w-full bg-lime-500 font-semibold p-2">Images</span>
        <div className="w-full h-fit flex justify-center items-start gap-3">
          <span className="p-1 bg-lime-400 border rounded-lg">
            No images uploaded!
          </span>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col gap-5">
        <span className="w-full bg-lime-500 font-semibold p-2">
          Used Technologies & Database |
        </span>
        <ul className="w-full flex flex-col gap-2">
          <li className="w-fit p-2 bg-blue-400 font-serif rounded-md">
            Nodejs
          </li>
          <li className="w-fit p-2 bg-blue-400 font-serif rounded-md">
            Expressjs
          </li>
          <li className="w-fit p-2 bg-blue-400 font-serif rounded-md">Cors</li>
          <li className="w-fit p-2 bg-blue-400 font-serif rounded-md">
            Bcrypt
          </li>
          <li className="w-fit p-2 bg-blue-400 font-serif rounded-md">
            Cookie-parser
          </li>
          <li className="w-fit p-2 bg-blue-400 font-serif rounded-md">
            MongoDB
          </li>
          <li className="w-fit p-2 bg-blue-400 font-serif rounded-md">
            Nodemon
          </li>
        </ul>
        <div className="w-full flex flex-col items-center gap-2">
          <span className="w-full bg-lime-500 font-semibold p-2">
            Usefull Links |
          </span>
          <span>No Links found.</span>
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
