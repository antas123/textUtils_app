import React , {useState} from 'react'



export default function TexthtmlForm(props) {
    
const handleUpClik=()=>{
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setCount(newtext);
}

const handlecopy=()=>{
  let text = document.getElementById("mybox")
  text.select()
  navigator.clipboard.writeText(text.value) 
}

const handleLoClik=()=>{
  let newtext = text.toLowerCase();
  setCount(newtext);
}
const handleClearClick=()=>{
  let newtext = ("");
  setCount(newtext);
}

const handleonchange=(event)=>{
    // console.log("on change");
   setCount(event.target.value);
}


    const [text, setCount] = useState("");
  return (
<>
<div className="container" style={{color:props.mode==='light'?'black':'white'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='light'?'white':'#182747' , color:props.mode==='light'?'black':'white'}}  id="mybox" rows="12"></textarea>
</div>
<button type="button" className="btn btn-primary mx-2 my-1" onClick={handleUpClik}>Convert to Uppercase</button>
<button type="button" className="btn btn-primary mx-2 my-1" onClick={handleLoClik}>Convert to Lowercase</button>
<button type="button" className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
<button type="button" className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy text</button>
</div>

<div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} minutes to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:'Enter text in textbox to preview'}</p>
</div>

</>
  )
}
