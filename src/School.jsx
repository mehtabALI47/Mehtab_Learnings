import SubjectContext from "./ContextAPI";
import StudentClass from "./StudentClass"

function Studentschool(){
    return(
        <div style={{backgroundColor:'yellow', padding:"20px"}}>
               <SubjectContext.Provider value="2nd Year">
               <h1>School</h1>
               <StudentClass></StudentClass>
              </SubjectContext.Provider>
        </div>
    )
}
export default Studentschool