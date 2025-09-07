import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UpdateUsers() {
  const { id } = useParams();

  const [name, setUserName] = useState("");
  const [age, setUserAge] = useState("");
  const url = "http://localhost:5000/Users/" + id;
  const navigate = useNavigate();

  useEffect(() => {
    GetUserInfo();
  }, []);
  async function GetUserInfo() {
    const response = await fetch(url);
    const jsondata = await response.json();
    if (response.status == 200) {
      // alert('User Founded')
      setUserName(jsondata.name);
      setUserAge(jsondata.age);
    } else {
      alert("User Not Found");
    }
  }
  async function UpdateuserDetail(){
    const response = await fetch(url, {
      method: "Put",
      body: JSON.stringify({name,age})
    })
    if (response.status == 200){
      navigate("/UsersList");
    }
    else{
      alert('Something went wrong')
    }
      }

  return (
    <>
      <h2>Update User Info</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setUserAge(e.target.value)}
      />
      <br />
      <br />
      <button onClick={UpdateuserDetail}>Update</button>
    </>
  );
}
export default UpdateUsers;
