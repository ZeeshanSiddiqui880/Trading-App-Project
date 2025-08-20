import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Menu.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setisProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setisProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const toastShown = useRef(false);

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = "https://fintradeapp.netlify.app/login";
        return;
      }
      const { data } = await axios.post(
        "https://trading-app-project.onrender.com",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);

      if (status && !toastShown.current) {
        toastShown.current = true;
        toast(`${user.toUpperCase()}`, {
          position: "top-right",
        });
      } else if (!status) {
        removeCookie("token");

        window.location.href = "https://fintradeapp.netlify.app/signup";
        return
      }
    };
    verifyCookie();
  }, [cookies.token]);

  const Logout = () => {
    removeCookie("token", { path: "/" });
    window.location.href = "https://fintradeapp.netlify.app/login";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <>
      <ToastContainer />
      <img className="p-2" src="logo.png" style={{ width: "50px" }} />
      <div className="container-fluid d-flex justify-content-end">
        <div className="menus ">
          <div className="menu-container mt-3">
            <ul>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  onClick={() => handleMenuClick(0)}
                >
                  <p
                    className={selectedMenu === 0 ? activeMenuClass : menuClass}
                  >
                    Dashboard
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/orders"
                  onClick={() => handleMenuClick(1)}
                >
                  <p
                    className={selectedMenu === 1 ? activeMenuClass : menuClass}
                  >
                    Orders
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/holdings"
                  onClick={() => handleMenuClick(2)}
                >
                  <p
                    className={selectedMenu === 2 ? activeMenuClass : menuClass}
                  >
                    Holdings
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/positions"
                  onClick={() => handleMenuClick(3)}
                >
                  <p
                    className={selectedMenu === 3 ? activeMenuClass : menuClass}
                  >
                    Positions
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/funds"
                  onClick={() => handleMenuClick(4)}
                >
                  <p
                    className={selectedMenu === 4 ? activeMenuClass : menuClass}
                  >
                    Funds
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/logout"
                  onClick={Logout}
                >
                  <p
                    className={selectedMenu === 5 ? activeMenuClass : menuClass}
                  >
                    Logout
                  </p>
                </Link>
              </li>
            </ul>
            <hr />
            <div className="profile" onClick={handleProfileClick}>
              <div className="avatar mb-3">
                {String(username).charAt(0).toUpperCase()}
              </div>
              <p className="username">{String(username).toLocaleUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
