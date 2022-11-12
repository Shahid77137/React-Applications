import React, {useState} from 'react'

export default function TextForm(props) {

// const handleUpClick = () => {
//     // console.log("Uppercase was clicked" +text)
//     // setText("You have clicked on handleUpClick")
//     let newText = text.toUpperCase();
//     setText(newText);
// }

const handleDownClick = () => {
    // console.log("Uppercase was clicked" +text)
    // setText("You have clicked on handleUpClick")
    let newText = text.toLowerCase();
    setText(newText);
}



const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
}


    const [text, setText] = useState("Enter text here");
    // text = "new text";  // wrong way to change the state
    // setText("new text");  // correct way to change state

    return (
        <div>
            {/* <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div> */}
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            {/* <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button> */}
            <button className='btn btn-primary' onClick={handleDownClick}>Convert to Uppercase</button>
        </div>
    )
}
