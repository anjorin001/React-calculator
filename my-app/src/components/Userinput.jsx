import { useState } from "react";
function Userinput(){
    const[name, Newname] = useState("")
    return(
        <>  
            <h3>Your name is {name}</h3>
            <input type="text" 
            placeholder="Enter your name"
            value={name}
            onChange={(event) => Newname(event.target.value)}
            />
        </>
    )
}
export default Userinput