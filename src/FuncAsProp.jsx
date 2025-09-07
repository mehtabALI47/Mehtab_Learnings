function FuncAsProp({Name,User}){
    return(
        <div>
            <button onClick={()=>Name(User)}>Click me</button>
        </div>
    )
}
export default FuncAsProp;