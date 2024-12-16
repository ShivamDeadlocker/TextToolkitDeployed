import React from "react";
import { useState } from 'react';

export default function About() {

  const [myStyle, setmyStyle] = useState ({
        color: 'black',
        backgroundColor: 'white'
    })

  const [btntext,setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=> {
      if(myStyle.color === 'black')
      {
        setmyStyle({
          color: 'white',
        backgroundColor: 'black',
        border:'1px solid white'
        })

        setBtnText("Enable Light Mode")
      }
      else{

        setmyStyle({
          color: 'black',
        backgroundColor: 'white'
        })

        setBtnText("Enable Dark Mode")
      }
    }

  return (
    <div className="container my-2" style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>About The Application</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>"This application, <strong>ShiamProTextToolkit</strong>, is a text utility tool designed to assist users in analyzing and modifying text efficiently. Whether converting text to uppercase, calculating word count, or switching between dark and light themes, this tool is intuitive and user-friendly.</p> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
               <strong>About The Developer</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Hi! I'm Shivam Prajapati, a passionate Full stack developer who enjoys creating tools that make life easier. I built this application as a part of my React.js learning journey, focusing on creating dynamic and user-friendly interfaces. I hope you find it helpful!"
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>About The Technical Details</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            "This application is built using React.js for the frontend, with Bootstrap for styling and responsive design. It includes features like text analysis, light/dark mode toggling, and dynamic background colors. Future updates may include additional text manipulation tools and export options."
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button onClick={toggleStyle} className="btn btn-primary my-3">{btntext}</button>

      </div>
    </div>
    
  );
}
