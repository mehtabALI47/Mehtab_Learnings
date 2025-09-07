import { useActionState } from "react"

function ActionState(){

    const handlesubmit= async (previouseData, formData)=>{
        let name = formData.get('name');
        let passw = formData.get('password');
    await new Promise(res =>setTimeout(res, 2000))
        console.log("form submitted", name, passw)
    }

// data is data of form
// action is called in from action attr, is ki madad sy from ko useActionSate hook handle krta
// pending bool hy true ya false, jb form submit hojata iski value false hojati,
// handlesubmit ye koi b function jo hook ky adnr call kia jata form ki mazeed handling ky liey
// undefined ye option parameter hy is ma b kuch bhj skty agr nai bhjna to undefined rkhna parta.
const [data, action, pending] = useActionState(handlesubmit, undefined);

return(
    <div style={{margin:"20px"}}>
        <form action={action}>
            <h2>User Action State Hook in React</h2>
            <br></br>
            <input type="text" placeholder="Enter Name" name="name"/>
            <br /> <br></br>
            <input type="password" placeholder="Enter Password" name="password"/>
            <br /> <br />
            <button disabled={pending}>Submit</button>
        </form>

    </div>
)
}
export default ActionState

// UseActionState Hook react ky andr form ko control krny ky liey use ki jati hy for e.g form ky data ko submit 
// krty huay usko handle krna validation wagaira, ya phr jb tk form ka data submit ni ho jata tb tk submit
// button ko disable rkhna, ya phr form submit hony ky bad kuch krna,
// form ki submission ky liey useActionState hook use ki jati
//