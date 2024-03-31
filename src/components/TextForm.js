import React, { useState } from "react";

export default function TextForm(props) {
  
  const [text, settext] = useState("");
  //if i want to change Text
  // text='hemlo Moto ' // This is a Wrong Syntac here
  // We have to use an updation Function to do that Work like The Below
  // settext("Hemlo MOTO : ") //This is the Right Syntax




  function handleUpClick() {
    console.log("Uppercase has been clicked");
    settext(text.toUpperCase());
    props.showalert("UpperCase is Done","success");
  }
  function handleLoClick() {
    console.log("Lowercase has been clicked");
    settext(text.toLowerCase());
    props.showalert("LowerCase is Done","success");
  }
  function handleCleClick() {
    console.log("Text Board Has Been Cleared");
    settext("");
    props.showalert("Text Board Has Been Cleared","success");
  }
  function handleOnChange(event) {
    console.log("On change");
    settext(event.target.value);
  }
  return (
    <>
      
      <div className="containert mb-3">
        <h4 className="textheading">{props.heading} :</h4>
        <textarea
          className="form-control"
          id="textareabox1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter Your Text Here ; "
        ></textarea>
        <div className="buttons">
          <button className="btn btn-primary my-3 mr-2" disabled={text.length===0} onClick={handleUpClick}>
            Convert To Uppercase
          </button>
          <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={handleLoClick}>
            Convert To Lowercase
          </button>
          <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={handleCleClick}>
            Clear Text
          </button>
        </div>
      </div>
      <div className="Summary">
        <h4>Your Text Summary</h4>
        <p>
          
          {text.split(/\s+/).filter((element)=>{if(element.length!==0){return element}}).length } Words and {text.length} Characters
        </p>
      </div>
    </>
  );
}
