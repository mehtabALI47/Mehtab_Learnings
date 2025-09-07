import FuncAsProp from "./FuncAsProp";

function PassFuncAsProp(){

    const displayName =(user)=>{
        alert(user);
    }
    return (
        <div>
            <FuncAsProp Name={displayName} User={"Mehtab"}></FuncAsProp>

        </div>
    )
}
export default PassFuncAsProp;