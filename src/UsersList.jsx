import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UsersList() {
  const [usersData, setUsersData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoadingData(true);
    getUsersData();
  }, []);

  const url = "http://localhost:5000/Users";

  async function getUsersData() {
    const response = await fetch(url);
    const jsondata = await response.json();
    console.log(jsondata);
    setUsersData(jsondata);
    setLoadingData(false);
  }
  const deleteUser = async (id) => {
    const response = await fetch(url + "/" + id, {
      method: "delete",
    });
    if (response.status == 200) {
      getUsersData();
      alert("User Deleted Successfully");
    }
  };

  const editUser = (id) => {
    navigate("/Edit/" + id);
  };

  return (
    <div>
      <h2>Fetch Data from API</h2>
      {loadingData ? (
        <h1>Loading...</h1>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
          border="1"
          cellPadding="10"
        >
          <thead style={{ backgroundColor: "#f0f0f0" }}>
            <tr>
              <th style={{ textAlign: "left" }}>Name</th>
              <th style={{ textAlign: "left" }}>Age</th>
              <th style={{ textAlign: "left" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td>
                  <button onClick={() => editUser(u.id)}>Edit</button> &nbsp;
                  <button onClick={() => deleteUser(u.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UsersList;
