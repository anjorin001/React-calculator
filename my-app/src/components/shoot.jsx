function Football(){
    const Shoot = (x) =>{
        alert(x)
    }
    return(
        <button onClick={() => Shoot('goal')}>click</button>
    )
}
export default Football