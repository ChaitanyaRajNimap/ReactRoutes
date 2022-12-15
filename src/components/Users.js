import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <nav className="user-nav">
      <h2>
        <NavLink to="1">User 1</NavLink>
      </h2>
      <h2>
        <NavLink to="2">User 2</NavLink>
      </h2>
      <h2>
        <NavLink to="3">User 3</NavLink>
      </h2>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </nav>
  );
}

export default Users;
