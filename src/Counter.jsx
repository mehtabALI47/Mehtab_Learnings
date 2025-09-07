
function Counter({children, color="Green"}){
    return(
        <div style={{color:color, border:"5px solid"}}>
            <h1>Upcoming Marriage</h1>
            {children}
        </div>
    ) 
}

export default Counter