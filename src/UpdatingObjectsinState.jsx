import { useState } from "react"

function UpdatingObjectsInState(){

    const [user, SetUser] = useState
    (
        {
            husbandName: 'Husband Name',
            wifeName: 'Wife Name',
            kids:{
                boys:'Son Name',
                girls: 'Daughter Name'
            }
        }
    )

    const updateHusband=(val)=>{
        user.husbandName = val
        SetUser({...user})
    }
    const updateWife=(val)=>{
        user.wifeName = val
        SetUser({...user})
    }
    const updateDaughter=(val)=>{
        user.kids.girls = val
        SetUser({...user})
    }
    const updateSon=(val)=>{
        user.kids.boys = val
        SetUser({...user})
    }


    return(
        <div style={{margin:"20px"}}>
            <h1>Updating Objects in State</h1>
            <br></br>
            <input type ='text' placeholder="Enter Husband Name" onChange={(event)=>updateHusband(event.target.value)}/>
            <br /><br></br>
            <input type ='text' placeholder="Enter Wife Name" onChange={(event)=>updateWife(event.target.value)}/>
            <br /><br></br>
            <input type ='text' placeholder="Enter Daughter Name" onChange={(event)=>updateDaughter(event.target.value)}/>
            <br /><br></br>
            <input type ='text' placeholder="Enter Son Name" onChange={(evnet)=>updateSon(event.target.value)}/>
            
            <hr></hr>
            <h3>Husband Name: {user.husbandName}</h3>
            <h3>Wife Name: {user.wifeName}</h3>
            <h2>Childeren Names</h2>
            <h3>Daughter Name: {user.kids.girls}</h3>
            <h3>Son Name: {user.kids.boys}</h3>
        </div>
    )
}

export default UpdatingObjectsInState