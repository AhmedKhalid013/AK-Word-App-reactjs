import React, {useState} from 'react';

export default function TextForm(props) {


const handleUpClick=()=>{
console.log("Upper Case was clicked");
let newText=text.toUpperCase();
setText(newText);
}

const handleLowClick=()=>{
let lowText=text.toLowerCase();
setText(lowText);
props.showAlert("Converted to Lower Case","success");

}

const handleOnChange=(event)=>{
    console.log("On Changed");
    setText(event.target.value);
    }

    const handleClearClick=()=>{
        setText('');

    }

    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text).then(() => alert('Text copied to clipboard!')).catch((error) => console.error('Failed to copy text: ', error))
    }

    const handleExtraSpaceClick=()=>{
        let newspace=text.split(/[ ]+/);
        setText(newspace.join(" "))
    }



const[text,setText]=useState("");

const wordCount=text.trim()===''?0:text.trim().split(/\s+/).length;

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" placeholder="Enter text here" id="floatingTextarea" rows="8" value={text}  style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-danger mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
<button className="btn btn-warning mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-info mx-2" onClick={handleCopyClick}>Copy Text</button>
<button className="btn btn-success mx-2" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
</div>

<div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text here</h1>
   {/* <p>{text.split(" ").length} words, and {text.length} characters</p>*/}
   <p>{wordCount} words, and {text.length} characters</p>

   {
  (() => {
    if (wordCount === 0) {
      return <p>0 Minutes</p>;
    } else {
      return <p>{0.008 * text.split(" ").length} Minutes read</p>;
    }
  })()
}


    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
    
</div>

</>
  );
}
