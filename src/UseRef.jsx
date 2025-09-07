import { useRef } from "react";
import ForwardRef from "./ForwardRef";

function UseRef(){

    const Ref = useRef(null);

    const save =()=>{
        Ref.current.value = 1000;
        Ref.current.style.color = 'red'
    }

    return(
        <div>
            <ForwardRef forwardedRef={Ref}></ForwardRef>
            <button onClick={save}>Click me</button>
        </div>
    )
}
export default UseRef;