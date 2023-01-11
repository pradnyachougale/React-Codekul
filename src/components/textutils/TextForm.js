
// import { Select } from '@mui/material';
import React , {useState} from 'react'

export default function TextForm(props) {
    const btnupclick = ()=>{
        console.log("Button has been clicked")
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleonchange =(event)=>{
        console.log("Value changed")
        setText(event.target.value)
    }
    const btnlowerclick =()=>
    {
        let lowertxt = text.toLowerCase();
        setText(lowertxt);
    }
    
    const btnclearclick =()=>
    {
        let cleartxt = " ";
        setText(cleartxt);
    }
    const btncopyclick=()=>
    {
        let copy = document.getElementById("mybox");
        copy.select();
        navigator.clipboard.writeText(copy.value);

    }
    const btnremoveextraspc=()=>
    {
      let newtxt = text.split(/[ ]+/);
      setText(newtxt.join(" "))

    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
            <div className="mb-3 my-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control" id="mybox"  value={text} onChange={handleonchange} rows="8" placeholder='Enter the text '></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick = {btnupclick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={btnlowerclick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={btnclearclick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={btncopyclick}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={btnremoveextraspc}>Remove Extra Space</button>

            </div>
            <div className="container">
                <h4>Your Text Summary</h4>
                 <p> {text.split(" ").length} Words and {text.length} Characters</p>
                 <p>{0.008* text.split(" ").length} Minutes to read</p>
                 <h3>Preview</h3>
                 <p>{text}</p>
            </div> 
        </>
    )
}
