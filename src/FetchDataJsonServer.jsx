import { useEffect, useState } from "react";

function DataFromJsonServer() {
  const [usersData, setUsersData] = useState();
  const [loadingData, setLoadingData] = useState(false);
  useEffect(() => {
    setLoadingData(true);
    getUsersData();
  }, []);

  async function getUsersData() {
    const url = "http://localhost:3000/Users";
    var response = await fetch(url);
    let jsondata = await response.json();
    console.log(jsondata);
    setUsersData(jsondata);
    setLoadingData(false);
  }
  return (
    <div>
      <h1>Fetch Data from API</h1>
      {!loadingData ? (
        usersData &&
        usersData.map((u) => (
          <ul key={u.id}>
            <li>{u.name}</li>
            <li>{u.age}</li>
          </ul>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
export default DataFromJsonServer;
