import { useFormStatus } from "react-dom"

function HookFormStatus(){

    const Save = async ()=>{
        await new Promise (res=>setTimeout(res, 2000))
        alert('Save Successfully')
    }
    function FormHtml(){

        // React Hook useFormState
        const {pending} = useFormStatus();
        console.log(pending);
        return(
            <div>
                <input type="text" placeholder="Enter your name"/>
                <br></br><br></br>               
                <input type="password" placeholder="Enter Password"/>
                <br></br><br></br>
                <button disabled={pending}>{pending?'Submitting':'Submit'}</button>
            </div>
        )
    }
    return(
        <div>
            <form action={Save}>
                <FormHtml/>               
            </form>
        </div>
    )
}
export default HookFormStatus