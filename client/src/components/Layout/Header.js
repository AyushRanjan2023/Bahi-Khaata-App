import { message } from "antd";
import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfull");
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary bg-gradient  m-4">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand text-white " to="/">
              Bahi-Khata App
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-link text-white"><p>{loginUser && loginUser.name}</p>{" "}</li>
              <li className="nav-item text-white ">
                <button className="btn btn-danger" onClick = {logoutHandler} 
                  >
                Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
