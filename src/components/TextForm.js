import React from "react";

import { useState } from 'react';


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Button is clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!!!","success");
    }

    const handleLoClick = ()=>{
        // console.log("Button is clicked "+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!!!","success");
        
    }

    const handleToClear = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("All text is cleared!!!","success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Chnage");
        setText(event.target.value);
    }

    const handleReverseText = () => {
      let newText = text.split("").reverse().join("");
      setText(newText);
      props.showAlert("All text is reversed!!!","success");
    };

    const handleRemoveSpaces = () => {
      let newText = text.split(/\s+/).join(" ").trim();
      setText(newText);
      props.showAlert("Extra spaces are removed!!!","success");
    };

    const handleCopyToClipboard = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied to clipboard!!!","success");
    };
    
    const handleFindAndReplace = () => {
      let findWord = prompt("Enter the word to find:");
      let replaceWord = prompt("Enter the replacement word:");
      if (findWord && replaceWord) {
        let newText = text.replaceAll(findWord, replaceWord);
        setText(newText);
        props.showAlert(`${findWord} word is replaced with ${replaceWord} !!!`,"success");
      }
    };

    const handleSentenceCase = () => {
      let newText = text
        .toLowerCase()
        .split(". ")
        .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
        .join(". ");
      setText(newText);
      props.showAlert("Converted to sentence case!!!","success");
    };

    const handleTitleCase = () => {
      let newText = text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      setText(newText);
      props.showAlert("Converted to title case!!!","success");
    };
    
    const handleDownloadText = () => {
      const element = document.createElement("a");
      const file = new Blob([text], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "textfile.txt";
      document.body.appendChild(element);
      element.click();
      props.showAlert("Text is downloaded!!!","success");
    };
    
    
    
    // const countVowelsAndConsonants = () => {
    //   const vowels = text.match(/[aeiouAEIOU]/g)?.length || 0;
    //   const consonants = text.match(/[a-zA-Z]/g)?.length - vowels || 0;
    //   return { vowels, consonants };
    // };
    
    // const { vowels, consonants } = countVowelsAndConsonants();

    // <p>Vowels: {vowels}, Consonants: {consonants}</p>

    // <button className="btn btn-primary mx-2" onClick={countVowelsAndConsonants}>Count Vowels and Consonants </button>


  

    
    

    const [text, setText] = useState("Enter your text")
  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'black'}} className="container">
        <h1 >{props.heading}</h1>
      <div className="container my-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#1E3A5F':'white', color: props.mode==='dark'?'white':'black' }} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert To Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Covert To lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleReverseText}>Reverse Text</button>
      <button className="btn btn-primary mx-2" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyToClipboard}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleFindAndReplace}>Find and Replace</button>
      <button className="btn btn-primary mx-2" onClick={handleSentenceCase}>Sentence Case</button>
      <button className="btn btn-primary mx-2" onClick={handleTitleCase}>Title Case</button>
      <button className="btn btn-primary mx-2" onClick={handleDownloadText}>Download Text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleToClear}>Clear</button>

    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes is taken to read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in above textarea to preview it"}</p>
    </div>
    </>
  );
}
