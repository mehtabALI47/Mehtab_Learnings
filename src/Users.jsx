import { Route, Routes, NavLink } from "react-router";
import UsersList from "./UsersList";
import AddUsers from "./UserAdd";
import UpdateUsers from "./UserUpdate";

function Users() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ 
        display: "flex", 
        justifyContent: "flex-end", 
        gap: "20px", 
        padding: "10px 20px", 
        backgroundColor: "#333" 
      }}>
        <NavLink 
          to="/UsersList" 
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal"
          })}
        >
          Users List
        </NavLink>

        <NavLink 
          to="/AddUsers" 
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal"
          })}
        >
          Add New User
        </NavLink>
      </nav>

      {/* Content below navbar */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/UsersList" element={<UsersList />} />
          <Route path="/AddUsers" element={<AddUsers />} />
          <Route path="/Edit/:id" element={<UpdateUsers/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default Users;
