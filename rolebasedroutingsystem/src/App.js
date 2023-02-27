import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useTransition } from "react";

const USER_TYPE = {
  PUBLIC: "Public User",
  NORMAL_USER: "Normal User",
  ADMIN_USER: "Admin User",
};


//  the link are shown depending upon the User Type below ...
const CURRENT_USER_TYPE = USER_TYPE.NORMAL_USER;

function App() {
  return (
    // below the link are begin shown on the page depending upon the tab
    <div>
      <div style={{ display: "flex", gap: 12, padding: 8 }}>
        {CURRENT_USER_TYPE === USER_TYPE.NORMAL_USER ? (
          <>
            <Link to={"/"}>Public</Link>
            <Link to={"/user"}>Normal User</Link>
          </>
        ) : null}

        {CURRENT_USER_TYPE === USER_TYPE.ADMIN_USER ? (
          <>
            <Link to={"/"}>Public</Link>
            <Link to={"/user"}>Normal User</Link>
            <Link to={"/admin"}>Admin</Link>
          </>
        ) : null}

        {CURRENT_USER_TYPE === USER_TYPE.PUBLIC ? (
          <>
            <Link to={"/"}>Public</Link>
            {/* <Link to={"/user"}>Normal User</Link>
            <Link to={"/admin"}>Admin</Link> */}
          </>
        ) : null}





        {/* <Link to={"/user"}>Normal User</Link>
        <Link to={"/admin"}>Admin</Link> */}
      </div>
      <AppRoutes />
    </div>
  );
}

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicElement>
              <Home />
            </PublicElement>
          }
        />
        <Route
          path="/user"
          element={
            <UserElement>
              <User />
            </UserElement>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminElement>
              <Admin />
            </AdminElement>
          }
        />
        <Route
          path="*"
          element={
            <>
              <div>Page not availbale <a href="/">go Home</a> </div>
            </>
          }
        />
      </Routes>
      ;
    </>
  );
}

function Home() {
  return (
    <>
      <h1> Home page here public</h1>
    </>
  );
}

function User() {
  return (
    <>
      <div>
        <h1>Normal User Page</h1>
      </div>
    </>
  );
}

function Admin() {
  return (
    <>
      <div>
        <h1>Admin Page Only</h1>
      </div>
    </>
  );
}

function PublicElement({ children }) {
  return children;
}
function UserElement({ children }) {
  if (
    CURRENT_USER_TYPE === USER_TYPE.NORMAL_USER ||
    CURRENT_USER_TYPE === USER_TYPE.ADMIN_USER
  ) {
    console.log(children)
    return <>{children}</>;
  } else {
    return (
      <>
        <Navigate to={"/"} />
      </>
    );
    // return <><div>page cannot be accessed !!</div></>
  }
}
function AdminElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPE.ADMIN_USER) {
    return <>{children}</>;
  } else {
    return (
      <>
        <Navigate to={"/"} />
      </>
    );
    // return <><div>page cannot be accessed !!</div></>
  }
}

export default App;
