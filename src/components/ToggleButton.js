import { useState } from "react";
function ToggleButton(){
    const[words,setWords]=useState(true);
    return(
    <div>
        <button onClick={() => setWords(!words)}> I'm gona  disappear </button>
       <h1>{words? "gg" : ""}</h1>
    </div>
    );
}




export default ToggleButton;