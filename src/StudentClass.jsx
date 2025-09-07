import { useContext } from "react"
import SubjectContext from "./ContextAPI";

function StudentClass(){
    const studentClass = useContext(SubjectContext); // get value from provider
    return(
        <div style={{backgroundColor:'green', padding:"20px"}}>
            <h1>Class is {studentClass}</h1>
        </div>
    )
}
export default StudentClass