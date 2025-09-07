import { useTransition } from "react"
import HookFormStatus from "./UseFormStatus"

function HookUseTransition(){

    const [pending, SetTransition] = useTransition();

    function HandleTransition(){
        SetTransition( async()=>{
            await new Promise (res=>(setTimeout(res,2000)))
        })
    }

    return(
        <div>

            <button disabled={pending} onClick={HandleTransition}>Click</button>
        </div>
    )
}

export default HookUseTransition