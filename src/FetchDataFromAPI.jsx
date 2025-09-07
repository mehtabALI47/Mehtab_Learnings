import { useEffect, useState } from "react";

function CallApi(){

    const [usersData, setUsersData] = useState();

    useEffect(()=>{
        getUsersData();
    },[])

    async function getUsersData(){
        const url = 'https://dummyjson.com/users';
        var response = await fetch(url);
        let jsondata = await response.json();
        console.log(jsondata.users);
        setUsersData(jsondata.users);
    }
    return(
        <div>
            <h1>Fetch Data from API</h1>
            {
                usersData && usersData.map((u)=>(
                    <ul key={u.id}>
                        <li>{u.firstName}</li>
                        <li>{u.lastName}</li>
                    </ul>
                ))
            }
        </div>
    )
}
export default CallApi