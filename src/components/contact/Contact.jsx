import React from "react";
import PdfViewer from "../card/PdfViewer";
const Contact = () => {
  return (
    <div className="w-2/3 my-12 border-2 drop-shadow-2xl bg-gray-300 rounded-lg font-mono flex justify-around items-start p-4 flex-row ">
      <div className="w-full h-fit flex flex-row justify-between p-4">
        <ul>
          <h1 className="text-2xl m-2 font-semibold text-green-700 ">
            <span className="material-symbols-outlined">partner_exchange</span>{" "}
            Contact
          </h1>
          <li className="text-blue-500">
            <span className="material-symbols-outlined">
              admin_panel_settings
            </span>
            Amir Jaman Mondal
          </li>
          <li className="text-blue-500">
            <span className="material-symbols-outlined">mail</span>{" "}
            amirjamanmondal@gmail.com
          </li>
          <li className="text-blue-500 text-base py-2">
            <a href="tel:+91">
              <span className="material-symbols-outlined">call</span> 9749899596
            </a>
          </li>
          <li className="m-3 font-semibold text-green-700 ">
            <span className="material-symbols-outlined">code</span>Web Developer
          </li>
          <li className="text-red-600">
            <span className="material-symbols-outlined " id="status">
              online_prediction
            </span>{" "}
            <label htmlFor="status" className="text-green-500">
              Active
            </label>
          </li>
        </ul>
        <PdfViewer/>
      </div>
      {/* <span className="w-4 h-60 rounded-xl drop-shadow-2xl bg-gray-400 border-2 border-lime-300 shadow-xl rotate-25" /> */}
    </div>
  );
};

export default Contact;
