import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function NavBar(props) {
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();

  function signOut() {
    let user = { email: "", password: "" };
    dispatch({ type: "LOG_OUT", payload: user });
  }
  console.log(user);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
            <Link to="/"> <img
            style={{ width: "100px" }}
            src="https://itviec.com/assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png"
          ></img></Link>
         
        </Navbar.Brand>
        <div></div>
        <Nav>
          {user.isAuthenticated ? (
            <>
              <Nav.Link href="#features">{user.email}</Nav.Link>
              <Nav.Link onClick={() => signOut()}>Sign Out</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
