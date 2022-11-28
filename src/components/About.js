import React, { useState } from 'react'

export default function About(props) {

const [myStyle , setMyStyle]= useState({

})
// const [btntext , setBtnText]= useState('enabe dark mode')

//  const toggle=()=>{
//     if(myStyle.color== 'white')
//     {
//         setMyStyle({
//             color : 'black',
//             backgroundColor : 'white'
//         })
//         setBtnText("enable dark mode")
//  }
//  else{
//     setMyStyle({
//         color : 'white',
//         backgroundColor : 'black'
// })
// setBtnText("enable light mode")
// }
//  }
  return (
    <div>
        <h1 style={{ color:props.mode==='light'?'black':'white'}}>About</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={{backgroundColor:props.mode==='light'?'white':'#182747' , color:props.mode==='light'?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <b> What is TextUtils</b>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#182747' , color:props.mode==='light'?'black':'white'}}>
        <strong>It is an utility app for your text piece.</strong><br /> you can manipuate your data using this app , make observations of your text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button"style={{backgroundColor:props.mode==='light'?'white':'#182747' , color:props.mode==='light'?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <b>Creator</b> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#182747' , color:props.mode==='light'?'black':'white'}}>
        <strong>Antas Sachan</strong><br /> <p>B.Tech (IT) <br />IET Lucknow</p>
      </div>
    </div>
  </div>
  {/* <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div> */}
</div>
{/* <button type="button" onClick={toggle} className="btn btn-primary my-2">{btntext}</button> */}
    </div>
  )
}
