import { useState } from "react"

function LiftingStateA({SetUser}){

    return(
        <div>
            <input type='text' onChange={(event)=>SetUser(event.target.value)}/>
        </div>
    )
}
export default LiftingStateA