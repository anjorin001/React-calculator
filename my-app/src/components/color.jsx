function Rainbow(props){
    const colors = props.colors;
    return(
        <>
          <h1>
            Rainbow
        </h1>
          
          {colors.length > 0? <h2>you have {colors.length} colours</h2>: <h2>no color available</h2> }
        
        </>

    )
}

export default Rainbow
