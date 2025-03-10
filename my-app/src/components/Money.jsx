function Dollar(){
    return <h1>
        this is dolars 
    </h1>
}
function Especs(){
    return <h2>
        This is especs
    </h2>
}
function Money(props){
    const isEspecs = props.isEspecs
    if(isEspecs){
        return < Especs/>;
    }
    return <Dollar/>;
}
export default Money