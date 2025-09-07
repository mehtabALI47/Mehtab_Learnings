import LiftingStateA from "./LiftingStateA"
import { useState } from "react"

function LiftingState(){
    const [user, SetUser] = useState('');
    return(
        <div>
        <h2>Lifting State Up {user}</h2>
        <br/>
        <LiftingStateA SetUser={SetUser}></LiftingStateA>
        </div>
    )
}
export default LiftingState

// Jb hum Ek component sy dosray component ma data transfer krty hain state ki help sy to isko hum
// LifitngStateUp kehty hain. For example LiftingState parent component hy ur LiftingStateA child
// component hy, to child component ka data jo ky user (state type var) ma store hota (SetUser ki madad sy)
//  usko parent ma transfer kr rhy hain ur use kr ry hain.