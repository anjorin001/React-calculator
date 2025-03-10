import {useState} from "react";
export default function Showcolour(){
    // const[color, setColor] = useState('blue')
    // const[brand, setBrand] = useState('bez')
    // const[year, setYear] = useState('2087')
    // const[model, setModel] = useState('c56')

    const[car,setCar] = useState({
        brand: 'hondA',
        model: 'accord',
        year : '2020',
        color:'blue'
    });

    const updateColor = ()=> {
        setCar(previousState =>{
            return {...previousState, color: 'green'}
        })
    }
    return(
        <>
            <h1>I love this {car.brand}</h1>
            <p>it is a {car.year} {car.color} {car.model} {car.brand} </p>
            <button type="button" onClick={updateColor}>green</button>
        </>
    ) 


}