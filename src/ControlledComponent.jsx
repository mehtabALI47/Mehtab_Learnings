import { useState } from "react"
function ControlledComponent(){
  
  const [name, SetName] = useState("")
  const [password, SetPassword] = useState('')
  const [email, SetEmail] = useState("")

  const clearform = () =>{
    SetName("");
    SetPassword("");
    SetEmail("");
  }
  return(
    <div>
      <h1>Controlled Component</h1>
      <div>

        <input type="text" value={name} onChange={(e) => SetName(e.target.value)}/>
        <br></br>
        <input type="password" value={password} onChange={(e) => SetPassword(e.target.value)}/>
        <br></br>
        <input type="text" value={email} onChange={(e) => SetEmail(e.target.value)}/>
        <br></br>
        <button>Submit</button>
        <button onClick={clearform}>Clear</button>
        <br></br>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{password}</h1>
      </div>

    </div>   
  )
}
export default ControlledComponent