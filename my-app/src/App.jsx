// import Mycomponent from "./components/Mycomponent" 
// import Football from "./components/shoot" 
// import Money from "./components/Money"
// import Rainbow from "./components/color"
// import Userinput from "./components/Userinput"
// import Car from "./components/Car"
// import Showcolour from "./components/US"

// // const colors = ['red','blue','green'];
// function App(){
//     const student = {
//        name: "favour",
//        message: 'hello',
//        codecampus: 'dms',
//        studentID: 2
//     }
//    return (
//     <>

//     <Car student = {student}/>
//      <h2>Enter your name here</h2>
//      <Football/>
//       <Userinput/>
//      <Money isEspecs={false}/>
//      {/* <Rainbow colors = {colors}/> */}
//      <Showcolour/>

//     </>
//    )
// }
// export default App



//HANDLING EVEN&TS IN REACT
// function Click(){
//     const change = () => alert('hello')
//     return(
//       <button onClick={change}>click</button>
//     )
// }
// export default function App(){
//       return <Click/>
// }


// //PROPS IN REACT
// function Name(props){
//   return <h1>my name is {props.name}</h1>
// }
// export default function App(){
//   return <Name name="favour"/>
// }


//CONDITIONAL IN REACT 
// function Welcome(){
//   const RandomNumber = Math.floor(Math.random()*8);
//   if(RandomNumber < 5){
//     return <h4>project accomplished</h4>
//   }return <h4>project not complete</h4>
// }

// export default function App(){
//   return <Welcome/>
// }



//CONDITION USING TERNARY 
// function StateP(){
//   const RandomNumber = Math.floor(Math.random()*90);
//   return(
//     <>
//        {RandomNumber > 1 ? <h4>project successsful</h4> : <h3>prject failed</h3> }
//     </>
//   )
// }
// export default function App(){
//   return <StateP/>
// }




// MAKING USE OF MAP FUNCTION TO LOOP THROUN AN ARRAY AN RETURN RESULT
// function Array(){
//     const Names = [
//         {id: 1, name:'favour',age: 48 },
//         {id: 2, name:'samuel',age: 88 },
//         {id: 3, name:'jhon',age: 8 }
//     ]
//     return(
//         <>
//             <ul>
//                  {Names.map((names) => (
//                     <li key={names.id}>{names.name}- {names.age}</li>
//                  ))}
//             </ul>
//         </>
//     )
// }

// export default function App(){
//     return <Array/>
// }




//PROPS DESTRUCTURING IN REACT 
// function Student({name, age, school}){
//     return(
//         <h1>my name is {name} i am {age} year old in {school} </h1>
//     )
// }
// export default function App(){
//     return <Student name="favour" age="17" school="au"/>
// }



//USING A DEFAULT PROPS PASSED S AN ARGUMENT
// function Student({ name = "Favour", age = "49", school = "Code Campus" }) {
//     return (
//       <>
//         <h1>My name is {name}, I am {age} years old, and I study at {school}.</h1>
//       </>
//     );
//   }
  
//   export default function App() {
//     return <Student />;
//   }
  


//APPLYINFG DESTRUCTING INSIDE A FUNCTION
// function Teacher(props){
//     const{name, age , school} = props
//     return(
//         <>
//             <h1>my name is {name} i am {age} year old in {school} </h1>
//         </>
//     )
// }
// export default function App(){
//     return <Teacher name="tunde" age="30" school="au"/>




//APPLYING NESTED PROPS IN A COMPONENT 

// function Profile({user:{name, age, address:{city, country}}}){
//     return(
//         <>
//       <h2>Name: {name}</h2>
//       <h3>Age: {age}</h3>
//       <h4>City: {city}, Country: {country}</h4>
//         </>
//     )
// }
// export default function App(){
//     return <Profile user={{name:"favour", age:23, address:{city:"abuja", country:"nigeria"} }} />
// }


//MAKING USE OF ...REST OPERATOR IN REACT
// import { useState } from "react";
// function Userprofile(){
//     const[profile,changeProfile] = useState({
//         name:'Alice',
//         Age: 25,
//         country: 'USA',
//         Hobby: 'painting'
//     })

//     const update = () =>{
//     const Newname = prompt('enter your name')
//     const Newage = prompt('enter your age')
//     const Newcountry = prompt('enter your country')
//     const Newhobby = prompt('enter your hobby')
//         if(Newname && Newage && Newcountry && Newhobby ){
//             changeProfile(() => ({
//                 name: Newname,
//                 Age: Newage,
//                 country: Newcountry,
//                 Hobby: Newhobby
//             }))
//         }
//     }
//     return(
//         <>
//              <h1>User Info</h1>
//              <ul>
//                 {Object.entries(profile).map(([key, value]) =>{
//                   return <li key={key}>{key}:{value}</li>
//              } )}
//              </ul>
//              <button type="button" onClick={update} >Add your profile here</button>
//         </>
//     )

// }
//  export default function App(){
//     return <Userprofile/>
//  }




//MAKING USE OF CONTROLLED COMPONENT IN REACT

// import { useState } from "react";

// function Forminput(){
//     const[data,setData] = useState({
//         name:'',
//         email:''
//     })
//     const saveData = (event) => {
//         setData(others => ({
//            ...others, [event.target.name]:event.target.value
//         }))
//     }

//     const handleSubmit = (event) => {
//            event.preventDefault();

//         if(!data.name|| !data.email){
//             return alert(`please fill up  input`)
//         }return alert(`your name is ${data.name} and your eamil ${data.email}` )
//     }
        

//     return(
//         <>
//          <form onSubmit={handleSubmit}> 
//              <label>
//                  Name:
//                  <input type="text" placeholder="Enter your name" name="name" value={data.name} onChange={saveData} />
//              </label>
//              <label>
//                  Email:
//                  <input type="email" value={data.email} name="email" id="" onChange={saveData}/>
//             </label> 

//             <button type="submit"> Submit</button>
//          </form>
//         </>
//     )
// }



//MAKING USE OF UNCONTROOLED COPONET IN REACT
//  export default function App(){
//     return <Forminput/>
//  }


// import { useRef } from "react";
// function Form(){
//     const nameRef = useRef(null)
//     const emailRef = useRef(null)


//     const submitForm = (event) =>{
//         event.preventDefault;
//         {nameRef.current.value === "" || nameRef.current.value === '' ? alert('your  input is empty') : alert(`name: ${nameRef.current.value} Email: ${emailRef.current.value}`) }
//     }

//     return(
//         <>
//         <form onSubmit={submitForm}> 
//             <label>
//                 Name:
//                 <input type="text" name="name" ref={nameRef} id="" placeholder="enter your name"/>
//             </label>
//             <label htmlFor="">
//                 Email:
//                 <input type="email" name="email" ref={emailRef} id="" />
//             </label>
//             <button type="submit">submit</button>
//         </form>
           
//         </>
//     )
// }

// export default function App(){
//     return <Form/>
// }



//DROPDOWN IN REACT
// import { useState } from "react";
// function Dropdown(){
//     const[seletedColor, setSelectedColor] = useState('');
     
//     const newColor = (event) =>{
//         setSelectedColor(event.target.value)
//     }

//     const submit = () => {
//         return alert(`you choose ${seletedColor} color`)
//     }

//     return(
//         <><form action="" onSubmit={submit}>
//             <select value={seletedColor} onChange={newColor}>
//                 <option value="red">red</option>
//                 <option value="green">green</option>
//                 <option value="blue">blue</option>
//                 <option value="yellow">yellow</option>
//             </select>
//             <button type="submit">submit</button>
//         </form>
//         </>
//     )
// }
//  export default function App(){
//      return <Dropdown/>
//  }






//APPLYING LIFTTNG UP STATE IN REACT

// import React from "react";
// import { useState } from "react";
// const InputText = ({inputValue,handleOnchange} ) => {
//     return(
//         <input
//          type="text"
//          value={inputValue}
//          onChange={handleOnchange}
//          />
//     )
// }

// const DisplayText = ({inputValue} ) => {
//     return(
//         <>
//           <h1>Here is the text you entred</h1>
//           <p>{inputValue}</p>
//         </>
//     )
// }


// export default function App(){
//     const[text, setText] = useState('')

//     const handleOnchange = (e) =>{
//         setText(e.target.value)
//     }
//     return(
//         <>
//             <InputText inputValue={text} handleOnchange={handleOnchange} />
//             <InputText inputValue={text} handleOnchange={handleOnchange} />
//             <DisplayText inputValue = {text} />
//         </>
//     )

// }




//CREATING A   Fahrenheit to Celsius COVERTER VISE VERSA
// import React from "react";
// import { useState } from "react";
// function  FahrenheitInput({ Fahrenheit, handleFInput }){
//     return(
//         <>
//         <h1>Enter Fahrenheit</h1>
//             <input type="number" 
//              value={Fahrenheit}
//              onChange={handleFInput}
//             />
//         </>
//     )
// }

// function CelsiusInput({ Celsius, handleCInput }){
//     return(
//         <>
//         <h1>Enter Celsius</h1>
//         <input type="number" 
//          value={Celsius}
//          onChange={handleCInput}
//         />
//     </>
//     )
// }

// export default function App(){
//     const[FahrenheitValue, setFahrenheitValue] = useState(0);
//     const[CelsiusValue, setCelsiusValue] = useState(0);

//  const converterF = (e) => {
//     const newF = e.target.value
//     setFahrenheitValue(newF);
//     setCelsiusValue((newF - 32) * 5/9)
//  }
//  const converterC = (e) => {
//     const newC  = e.target.value
//     setCelsiusValue(newC)
//     setFahrenheitValue((newC * 9/5) + 32)
//  }

//     return(
//         <>
//            <FahrenheitInput Fahrenheit = {FahrenheitValue} handleFInput = {converterF}  />
//            <CelsiusInput Celsius = {CelsiusValue} handleCInput={converterC} />
//         </>
//     )
// }

// 1️⃣ Install Redux Toolkit: npm install @reduxjs/toolkit react-redux




//APPLICATION OF USEEFFECT IN REACT 

//1 USE-EFFECT SYNTAX
// import { useEffect } from "react";
// useEffect(() => {

//     return () => {

//     }
// },[depencies])


//Running useEffect on Every Render
// import { useState, useEffect } from "react";

// export default function App(){
//     const[count, setCount] = useState(0);
    
//     useEffect(() => {
//         console.log('Component re-rendered!');
//     }, []);
//     return(
//         <>
//         <input type="text" value={count} />
//           <button onClick={() => setCount(count + 1)}>increase</button>
//           <button onClick={() => setCount(count - 1)}>decrease</button>
//           <button onClick={() => setCount(count * 0)}>reset</button>
//         </>
//     )
// }


// Example 2: Running useEffect Only Once (on Mount)
// import { useState, useEffect } from "react";

// export default function App(){
//     const[count, setCount] = useState(0);
    
//     useEffect(() => {
//         console.log('Component mountted!');

//         return () => {
//             console.log('Component un-mounted!')
//         }
//     }, []);
//     return(
//         <>
//         <input type="text" value={count} />
//           <button onClick={() => setCount(count + 1)}>increase</button>
//           <button onClick={() => setCount(count - 1)}>decrease</button>
//           <button onClick={() => setCount(count * 0)}>reset</button>
//         </>
//     )
// }



//🔹 Example 3: Running useEffect When a Variable Changes
// import { useState, useEffect } from "react";

// export default function App(){
//     const[count, setCount] = useState(0);
    
//     useEffect(() => {
//         console.log(`Count changed: ${count}`);
//     }, [count]);
//     return(
//         <>
//         <input type="text" value={count} />
//           <button onClick={() => setCount(count + 1)}>increase</button>
//           <button onClick={() => setCount(count - 1)}>decrease</button>
//           <button onClick={() => setCount(count * 0)}>reset</button>
//         </>
//     )
// }


// USE OF ASYNC IN USEEEFFECT
// import { useState, useEffect } from "react";

// export default function App(){
//     const[data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
    
//     useEffect(() => {
//         const fetchData= async () => {
//             try{
//              const data1 = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//              const resp = await data1.json()
//                 setData(resp);
//             }catch(error){
//                 console.log(error);
//             }finally{
//                 setLoading(false)
//             }
//         }
//         fetchData()
//     })

//     return(
//         <>
//             <h1>Fetched data:</h1>
//             {loading ? <p>loading...</p> : <p>{data?.title} </p> }
//         </>
//     )
// }



// import { useState, useEffect } from "react";

// export default function App() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
    
//     window.addEventListener("resize", handleResize); // Add event listener

//     return () => {
//       window.removeEventListener("resize", handleResize); // Cleanup
//     };
//   }, []);

//   return <h1>Window Width: {width}</h1>;
// }


// 🚀 Key Takeaways
// ✔ useEffect can add event listeners.
// ✔ Always clean up event listeners inside the return function.
// ✔ Helps prevent memory leaks & unwanted side effects.



//applying api fetching in USEEFFECT 
import { useState, useEffect } from "react";
export default function App(){
    const[time, setTime] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
            setTime((prev) => prev + 1)
        },1000);
        return () => {
            clearInterval(timer)
        }
    },[])

    return(
        <>
            <h1>CURRENT TIME</h1>
            <p>PRESENT SECS:{time}sec </p>
        </>
    )
}