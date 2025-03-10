import { useState } from "react";
function Counter(){
    const[count, Counter] = useState(0)
    return(
        <>
           <h3>current:{count}</h3>
           <button onClick={() => Counter(count + 1)}>Increament</button>
           <button onClick={() => Counter(count - 1)}>Increament</button>
           <button onClick={() => Counter(0)}>reset</button>
        </>
    )
}
export default Counter