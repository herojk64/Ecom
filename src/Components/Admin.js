import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Products from "./Products";
import Users from "./Users";
import "./css/Admin.css";
import Requests from "./Requests";
import Logs from "./Logs";
const Admin = () => {
  const location = useLocation();
  return (
    <main className="Admin_dashboards">
      <nav className="Admin_Navigation">
        <ol>
          <li
            className={
              location.pathname === "/dashboard/products"
              ||
              location.pathname === "/dashboard/products/add"
              ||
              location.pathname === "/dashboard/products/modify"
              ? "Active" : null
            }
          >
            <Link to="products">Products</Link>
          </li>
          <li
            className={
              location.pathname === "/dashboard/users" 
              ||
              location.pathname === "/dashboard/users/add"
              ||
              location.pathname === "/dashboard/users/modify"
              ? "Active" : null
            }
          >
            <Link
              to="users"
            >
              Users
            </Link>
          </li>
          <li
            className={
              location.pathname === "/dashboard/requests" 
              ?
               "Active" : null
            }
          >
            <Link to="requests">Requests</Link>
          </li>
          <li
          className={
            location.pathname === "/dashboard/logs" 
            ?
             "Active" : null
          }>
            <Link to="logs">Logs</Link>
          </li>
        </ol>
      </nav>
      <Routes>
        <Route exact path="products/*" element={<Products />} />
        <Route exact path="users/*" element={<Users />} />
        <Route exact path="requests" element={<Requests />} />
        <Route exact path="logs" element={<Logs />} />
      </Routes>
    </main>
  );
};

export default Admin;
