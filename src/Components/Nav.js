import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userStatus } from "../Context/userStatus";
import SearchBar from "../Parts/SearchInput";
import Logo from "../Images/Logo.jpg";
import Default from "../Images/DefaultProfile.jpg";
import "./css/Nav.css";
const Nav = () => {
  const {user} = useContext(userStatus);
  return (
    <nav className={`NavigationBar`}>
      <SearchBar />
      <ol>
        <li>
          <Link to="/shop" className={`Shop`}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/" className={`Home`}>
            <img src={Logo} alt="Home" />
          </Link>
        </li>
        <li>
          <Link to="/about" className={`About`}>
            About
          </Link>
        </li>
      </ol>
      <ol>
        {user.status ? (
          <li className="ProfileDrop">
            <img
              src={user.profile ? user.profile : Default}
              className={`Profile`}
              alt={`profile`}
            />
            <div className="Profile_drop">
            {
            user.type==="Admin"?
            <Link to="/dashboard">Dashboard</Link>
            :
            null
            }
            <Link to="/profile">Profile</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">Cart</Link>
            </div>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login" className={`Login`}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className={`SignupBtn`}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Nav;
