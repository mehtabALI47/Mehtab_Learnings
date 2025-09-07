import { useState } from "react"

function Checkbox(){
    const [skill, setSkill] = useState([])

    const handlechecks=(event) =>{
        if(event.target.checked){
            setSkill([...skill,event.target.value])
        }
        else{
            setSkill(skill.filter((item) => item != event.target.value))
        }
    }
    return(
        <div>
            <h1>Skill set</h1>

            <input type="checkbox" id="php" onChange={handlechecks} value="PHP"/>
            <label htmlFor="php">PHP</label>
            <br></br>
            <input type="checkbox" id="csharp" onChange={handlechecks} value="C#"/>
            <label htmlFor="csharp">C#</label>
            <br></br>
            <input type="checkbox" id="java" onChange={handlechecks} value="JAVA"/>
            <label htmlFor="java">JAVA</label>
            <br></br>
            <input type="checkbox" id="js" onChange={handlechecks} value="JS"/>
            <label htmlFor="js">JS</label>
            <br></br>
            <h1>{skill}</h1>
        </div>
    )
}
export default Checkbox