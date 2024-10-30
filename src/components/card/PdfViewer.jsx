import React, {useState, useEffect} from "react";


const PdfViewer = () => {
const [fileUrl, setFileUrl] = useState(null);
const [Error, setError] = useState(null);


  useEffect(()=>{
    const file = async() =>{
      try {
        const res = await fetch()
      } catch (error) {
        
      }
    }
  })

  return (
    <button
      id="idownload"
      className="h-fit w-fit px-2 py-1 bg-blue-400 rounded-md"
    >
      <a href="http://localhost:4000/resume/Amir_Jaman_Mondal.pdf" >Download Resume</a>
    </button>
  );
};

export default PdfViewer;
