import React from "react";
import Typed from "typed.js";

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Backend Developer", "Software Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-2/3 flex font-sans justify-center items-center text-lime-300 flex-col my-24 gap-20">
      <div className="w-2/3 h-fit flex justify-start items-center flex-col gap-3">
        <h1 className="text-2xl ">Welcome, I'm Amir Jaman Mondal</h1>
        <h2 className="text-xl">
          I am passionate about <span ref={el} className="text-blue-300"></span>
        </h2>
        <h3>Job Status- Searching...</h3>
        <span className="text-2xl">
      <button className="w-fit h-fit rounded-md bg-blue-500 hover:bg-green-300 flex justify-center items-center px-2 pb-1 font-semibold text-white">more</button>
      </span>
      </div>
      <div className="h-fit p-4 w-full flex flex-col gap-10">
        <h1 className="text-2xl bg-teal-500 py-1 px-2">Skills |</h1>
        <div className="w-fit flex gap-3">
          <span className="w-fit py-1 px-2 bg-red-400 rounded-md">
            Javascript
          </span>
          <span className="w-fit py-1 px-2 bg-red-400 rounded-md">Nodejs</span>
          <span className="w-fit py-1 px-2 bg-red-400 rounded-md">
            Expressjs
          </span>
          <span className="w-fit py-1 px-2 bg-red-400 rounded-md">MongoDB</span>
          <span className="w-fit py-1 px-2 bg-red-400 rounded-md">Reactjs</span>
          <span className="w-fit py-1 px-2 bg-red-400 rounded-md">Java</span>
          <span className="w-fit py-1 px-2 bg-red-400 rounded-md">SQL</span>
        </div>
        <div className="w-4/5 flex items-center flex-col gap-5 text-lg">
          <span className="w-full flex gap-3 items-center justify-between">
            <label htmlFor="javascript">Javascript</label>
            <progress
              id="javascript"
              value="40"
              max="100"
              className="w-[25rem]"
            >
              32%
            </progress>
          </span>
          <span className="w-full flex gap-3 items-center justify-between">
            <label htmlFor="nodejs">Nodejs</label>
            <progress id="nodejs" value="60" max="100" className="w-[25rem]">
              60%
            </progress>
          </span>
          <span className="w-full flex gap-3 items-center justify-between">
            <label htmlFor="expressjs">Expressjs</label>
            <progress id="expressjs" value="50" max="100" className="w-[25rem]">
              50%
            </progress>
          </span>
          <span className="w-full flex gap-3 items-center justify-between">
            <label htmlFor="mongodb">MongoDB</label>
            <progress id="mongodb" value="70" max="100" className="w-[25rem]">
              70%
            </progress>
          </span>
          <span className="w-full flex gap-3 items-center justify-between">
            <label htmlFor="reactjs">Reactjs</label>
            <progress id="reactjs" value="60" max="100" className="w-[25rem]">
              60%
            </progress>
          </span>
          <span className="w-full flex gap-3 items-center justify-between">
            <label htmlFor="java">Java</label>
            <progress id="java" value="80" max="100" className="w-[25rem]">
              80%
            </progress>
          </span>
          <span className="w-full flex gap-3 items-center justify-between">
            <label htmlFor="sql">SQL</label>
            <progress id="sql" value="40" max="100" className="w-[25rem]">
              65%
            </progress>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
