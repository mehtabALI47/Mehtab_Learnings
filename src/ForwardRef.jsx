const ForwardRef = ({forwardedRef})=>{
    return(
        <div>
            <input type="text" ref={forwardedRef}/>
        </div>
    )
}

export default ForwardRef;